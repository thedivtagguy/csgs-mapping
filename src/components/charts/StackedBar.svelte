<script>
	import { scaleLinear } from 'd3-scale';
	import ModalOpen from '../modal/ModalOpen.svelte';
	import polygonGenerator from './polygons.js';
	
	let selected;

	//////////////////////////////////////////////////////////////////
	let modal;
	export let dataset = [];	// The dataset to be used
	export let facet = "";		// What do we want to include in the dropdown?
	export let colors = [];		// Array of colors for facets
	export let title = "";		// Title to be displayed
	export let height = 800;	// Height of the chart
	export let width = 900;	    // Width of the chart
	export let id = "";			// ID prefix of the chart
	export let sortBy = "year";		// What do we want to sort by?
	export let modalContent;
	export let colorBy = "";		// What do we want to color by?
  	export let direction = "right";
	export let facetTwo = null;

	///////////////////////////////////////////////////////////////////
	// Data Preprocessing /////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////

	const refined = [];

	// Delete items where year is empty
	dataset.forEach(d => {
		if (d.year !== '') {
			refined.push(d);
		}
	});
	refined.sort((a, b) => a[sortBy] - b[sortBy]);
	// Count the number of books in each year and add that to the totalCount
	refined.forEach(d => {
		const counter = d[sortBy];
		const count = refined.filter(d => d[sortBy] === counter).length;
		d.totalCount = count;
	});


// Convert the dataset from an array to an array of objects
	// Where each sortBy is a key and it contains objects for each book
	let result = refined.reduce(function (r, a){
		r[a[sortBy]] = r[a[sortBy]] || [];
		r[a[sortBy]].push(a);
		return r;
	}, Object.create(null));

	// Convert that to an array of objects
	let data2 = Object.values(result);


	////////////////////////////////////////////////////////////////////
	/////////// facet Filters //////////////////////////////////////////
	////////////////////////////////////////////////////////////////////

	// Create an array of unique facets

	let facets = dataset.map(d => d[facet]).filter((v, i, a) => a.indexOf(v) === i);
	// Remove empty facets
	facets.forEach(d => {
		if (d === '') {
			facets.splice(facets.indexOf(d), 1);
		}
	});
	// Capitalize the facets
	facets.forEach(d => {
		d = d.charAt(0).toUpperCase() + d.slice(1);
	});

	if (facetTwo){
		let facetsTwo = dataset.map(d => d[facetTwo]).filter((v, i, a) => a.indexOf(v) === i);
		facetsTwo.forEach(d => {
			if (d === '') {
				facetsTwo.splice(facetsTwo.indexOf(d), 1);
			}
		});
		facetsTwo.forEach(d => {
			d = d.charAt(0).toUpperCase() + d.slice(1);
		});
		facets = facets.concat(facetsTwo);
		// Remove duplicates
		facets = facets.filter((v, i, a) => a.indexOf(v) === i);
	}

	const colorBys = dataset.map(d => d[colorBy]).filter((v, i, a) => a.indexOf(v) === i);


	// Iterate through data2 and add an item called color with the associated color for each book
	let i = 1;

	data2.forEach(d => {
		d.forEach(d=> {
			d.color = colors[colorBys.indexOf(d[colorBy])];
			d.id = `${id}-${i}`;
			i++;
		});
	});
	facets.unshift(`All ${facet}s`);

	// Each colorBy and its color 
	const colorByColors = colorBys.map(d => {
		return {
			color: colors[colorBys.indexOf(d)],
			name: d
		};
	});


	////////////////////////////////////////////////////////////////////
	//////// D3 Config /////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////

	const xTicks = ["1990-2030", 1995, 2000, 2005, 2010, 2015];
	const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
	const padding = { top: 100, right: 65, bottom: 30, left: 25 };


	$: xScale = scaleLinear()
		.domain([0, xTicks.length ])
		.range([padding.left, width - padding.right]);
	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length - 118; 
	let m = { x: 0, y: 0, offsetX: 0, offsetY: 0 };

	function handleMousemove(event) {
		m.x = event.clientX - 200;
		m.y = event.clientY;
		m.offsetX = event.offsetX;
		m.offsetY = event.offsetY;
	}
	
	let nameVar;

	let positionX, positionY = [10, 10]
	// Function tooltip to display the data of the selected bar
	function tooltip(d) {
		nameVar = d.title;
		// Position it right next to the bar
		positionX = 1100 -  m.offsetX - 350;
		positionY = m.offsetY - 70;

	}

// If selected is equal to null, opacity if full. If selected is not null and not equal to the facet, opacity is 0.1
// If hoverVar 


</script>
<main>
	

	
	<!-- Modal component binding-->

	<ModalOpen bind:this={modal}/>

	<section class="grid grid-cols-12 gap-6 ">
		<div class="col-span-3 py-6">
			<h1 class="text-4xl uppercase font-bold">{title}</h1>
			<p class="text-gray-600 py-4 text-sm">
				This chart shows the number of publications by genre in the last five years. Use the sidebar to filter by facets or click on a box to read more.
			</p>
			<div class="flex flex-col gap-2">
				<!-- Create a legend of formats and their colors -->
				{#each colorByColors as item, i}
				<div class="flex gap-2 justify-center items-center">
				  <div class="mr-2">
					<!-- Small svg polygon -->
					<svg width="40" height="20">
					  <path d="{polygonGenerator(true, 20 ,30 )}" fill={item.color} />
						
					</svg>
				  </div>
				  <div class=" flex-1 font-medium ">
					<p class="text-sm">{item.name}</p></div>
				</div>  
				{/each}
			  </div>
		   
		</div>
		
		<div  on:mousemove={handleMousemove}  class="col-span-9">	
			
			<!-- Dropdown for selecting facets -->

			<div class="chart relative" >
				<div id="facets" class="flex z-10 {direction}-0 absolute flex-col gap-8 justify-start my-8">
					<select bind:value={selected} class="rounded-md " >
						{#each facets as facet}
							<option class="capitalize" value={facet}>
								{facet}
							</option>
						{/each}
					</select>
				
				</div>

				<div 
				id="infobox"
				style="top: {positionY}px;
				right: {positionX }px;
				visibility: {nameVar ? 'visible' : 'hidden'};
				background-color: var(--color-background);
				z-index: 3;"
				class="border-[1px] px-4 py-2 w-1/3 shadow-lg border-gray-400 border-dashed absolute">
					<div class="flex flex-col w-full justify-start items-start">
						<div class="text-gray-600 text-sm">
							<p class="font-bold text-sm">
								{#if nameVar}
									{nameVar}
								{:else}
								Hover the chart to begin
								{/if}
							</p>
						</div>
						
					</div>
				</div>


				<svg  class="chartSVG">						

					<g class="axis y-axis">
						{#each yTicks as tick}
							<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
								<line x2="100%"></line>
							</g>
						{/each}
					</g>
			
					<g class="axis x-axis">
						{#each data2 as point, i}
						{#if i % 4 === 0 }	
						<g class="tick" transform="translate({xScale(i)/6} ,{height + 10})">
								<text x="{barWidth/2}" y="-90">
								{#if point[0].year  >= 1920 && point[0].year <= 1990 && id == "publications"}
									1940 - 1990
								{:else}
									{point[0].year}
								{/if}
								
								</text>
							</g>
							{/if}
						{/each}
					</g>
			
					<g class='bars'>
						{#each data2 as point, i}
							{#each {length: point[0].totalCount} as book, j}
							
							<path 
								style="opacity:{
								// If selected is equal to null, opacity if full. If selected is not null and not equal to the facet, opacity is 0.1
								selected === `All ${facet}s` ? 1 : selected !== point[j][facet] ? 0.2 : 1								
								};
								pointer-events: {
									// If selected is equal to null, pointer events are all. If selected is not null and not equal to the facet, pointer events are none.
									selected === `All ${facet}s` ? 'all' : selected !== point[j][facet] ? 'none' : 'all'
								}"
								
								class="bars boxes hover:cursor-pointer"
								id="bar-{point[j].id}"
								fill="{point[j].color}"
								on:click={() => modal.handleOpen(point[j], modalContent, id)}
								d="{polygonGenerator(false, xScale(i)/6, yScale(j)).polygon}"
								on:mouseover="{() => tooltip(point[j])}"
								on:mouseleave="{() => [nameVar] = [null]}"
							></path>
						

							{/each}
						{/each}
						</g>
				</svg>
			</div>
		</div>
	
	</section>
	
</main>

<style>


	.chart {
		width: 100%;
		max-width: 1100px;
		margin: 0 auto;
	}

	.chartSVG {
		position: relative;
		width: 100%;
		height: 720px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: .525em;
		font-weight: 200;
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: rgb(137, 137, 137);
		text-anchor: start;
		font-size: 10px;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
		stroke: rgb(187, 187, 187);
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars  {
		stroke: #828282;
		stroke-width: 0.5px;
		margin-bottom: 17px;
	}

	.bars.active {
		opacity: 1;
	}

	.bars.inactive {
		opacity: 0.3;
	}

	select::-ms-expand {
  display: none;
}
select {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 1em 0.5em 0.5em;
  border: 1px solid #eee;
  font: inherit;
  line-height: inherit;
  color:var(--color-heading);
  font-weight: 500;
  background-color: var(--color-orange);
  text-transform: capitalize;

}
	option {
		text-transform: capitalize;
	}

</style>