<script>
	import { scaleLinear } from 'd3-scale';
	import ModalOpen from '../modal/ModalOpen.svelte';
	import polygonGenerator from './polygons.js';
	let selected;

	///////////////////////////////////////////////////////////////////
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

	////////////////////////////////////////////////////////////////////
	//////// D3 Config /////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////

	const xTicks = [1990, 1995, 2000, 2005, 2010, 2015];
	const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
	const padding = { top: 100, right: 65, bottom: 100, left: 25 };


	$: xScale = scaleLinear()
		.domain([0, xTicks.length ])
		.range([padding.left, width - padding.right]);
	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length - 118; 
	

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

			<!-- Search bar

			<div class="flex h-28 flex-col items-center">
				<input bind:value={searchTerm} class="w-full my-2 border-2 px-4 focus:ring focus:ring-gray-400 bg-[color:var(--color-darker-background)]  border-amber-600 rounded-md h-12" list="titles"
				size="50"
				autocomplete="off" />
				<button type="submit" class="w-full px-4 py-2 text-gray-700 bg-[color:var(--color-orange)] rounded-lg" on:change={clearResults()} on:click={searchResults()}>Search</button>
			</div> -->
			
		</div>
		
		<div class="col-span-9">	
			
			<!-- Dropdown for selecting facets -->

			<div class="chart relative " >
				<div id="facets" class="flex z-10 right-0 absolute flex-col gap-8 justify-start my-8">
					<select bind:value={selected} class="rounded-md capitalize" >
						{#each facets as facet}
							<option class="capitalize" value={facet}>
								{facet}
							</option>
						{/each}
					</select>
				
				</div>
				<svg class="relative">						

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
						<g class="tick" transform="translate({xScale(i)/7} ,{height + 10})">
								<text x="{barWidth/2}" y="-90">{point[0].year}</text>
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
								}"
								class="bars boxes hover:cursor-pointer"
								id="bar-{point[j].id}"
								fill="{point[j].color}"
								on:click={() => modal.handleOpen(point[j], modalContent)}
								d="{polygonGenerator(xScale(i)/7, yScale(j))}"
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

	svg {
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
