<script>
	import { scaleLinear } from 'd3-scale';
	import publications from "$data/publications.csv";
	import * as d3 from 'd3';

	///////////////////////////////////////////////////////////////////
	// Data Preprocessing /////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////

	const refined = [];
	// We will keep only year, title, genre
	const data = publications.map(d => ({
		year: d.year,
		title: d.title,
		genre: d.genre,
		totalCount: 0,
	}));

	// Delete items where year is empty
	data.forEach(d => {
		if (d.year !== '') {
			refined.push(d);
		}
	});
	refined.sort((a, b) => a.year - b.year);
	// Count the number of books in each year and add that to the totalCount
	refined.forEach(d => {
		const year = d.year;
		const count = refined.filter(d => d.year === year).length;
		d.totalCount = count;
	});

	// Convert year to number
	refined.forEach(d => {
		d.year = +d.year;
	});

	// Convert the dataset from an array to an array of objects
	// Where each year is a key and it contains objects for each book
	let result = refined.reduce(function (r, a){
		r[a.year] = r[a.year] || [];
		r[a.year].push(a);
		return r;
	}, Object.create(null));

	// Convert that to an array of objects
	let data2 = Object.values(result);


	////////////////////////////////////////////////////////////////////
	/////////// Genre Filters //////////////////////////////////////////
	////////////////////////////////////////////////////////////////////

	// Create an array of unique genres
	const genres = data.map(d => d.genre).filter((v, i, a) => a.indexOf(v) === i);
	const genreColors = ["#Fac937", "#1d7485", "#88ab46", "#99262a", "#381b37", "#Ac4447", "#993300", "#818181", "#0E8587"]

	// Iterate through data2 and add an item called color with the associated color for each book
	let i = 1;

	data2.forEach(d => {
		d.forEach(d=> {
			d.color = genreColors[genres.indexOf(d.genre)];
			d.id = i;
			i++;
		});
	});

	console.log(data2)
	////////////////////////////////////////////////////////////////////
	//////// D3 Config /////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////

	const xTicks = [1990, 1995, 2000, 2005, 2010, 2015];
	const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
	const padding = { top: 20, right: 50, bottom: 35, left: 25 };

	let width = 1100;
	let height = 800;

	$: xScale = scaleLinear()
		.domain([0, xTicks.length ])
		.range([padding.left, width - padding.right]);
	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length - 121; 
	

	////////////////////////////////////////////////////////////////////
	//////// Filters and Hover /////////////////////////////////////////
	////////////////////////////////////////////////////////////////////


	$: genreSelection = null;

	// Function to handleFill. 
	// If a genre is selected, then return that color. If not then return gray
	// Color only that genre
	$: handleFill = (d) => {
		if (genreSelection === d.genre) {
			return d.color;
		} else {
			return '#d3d3d3';
		}
	}

	// Function to change genreSelection when a genre is clicked
	$: highlightGenre = (d) => {
		genreSelection = d;
	}

	////////////////////////////////////////////////////////////////////
	////// Show more info when clicking over a bar /////////////////////
	////////////////////////////////////////////////////////////////////

	$: currentBookTitle = null;
	$: currentBookGenre = null;
	$: currentBookYear = null;
	$: shouldShow = false;

	// Function to handle mouseover
	$: displayDetails = (d) => {
		currentBookTitle = d.title;
		currentBookGenre = d.genre;
		currentBookYear = d.year;
		shouldShow = true;
	}

	let searchTerm = '';
	$: searchArray = [];
	// Based on the search term, function to filter those IDs
	$: searchResults = () => {
		// Clear the search array
		data2.forEach(d => {
			d.forEach(d => {
				if (d.title.toLowerCase().includes(searchTerm.toLowerCase()) || d.genre.toLowerCase().includes(searchTerm.toLowerCase())) {
					// Add this ID to array
					searchArray.push(d.id)
				}
			})
		})
		highlightResults();
	
	} 

	$: highlightResults = () => {
		console.log(searchArray)
		// Apply bars.ctive class to the Ids in searchArray
		// rects have ID of the form 'bar-{id}'
		// Select all the IDs in searchArray

		searchArray.map(
			d => d3.select('#bar-' + d)
				.classed('active', true)
		)
		// Clear the search array
		console.log(searchArray)
	}

	$: clearResults = () => {
		// Remove the active class from all the bars
		d3.selectAll('.active')
			.classed('active', false)
		// Clear the search array
		searchArray = [];
	}
</script>
<main>
	
	<section class="grid grid-cols-12 gap-6 ">
		<div class="col-span-2 py-6">
			<h1 class="text-2xl font-bold">Publications</h1>
			<p class="text-gray-600 py-4 text-sm">
				This chart shows the number of publications by genre in the last five years. Use the sidebar to filter by genre or click on a box to read more.
			</p>
			<div class="flex flex-col items-center">
				<input bind:value={searchTerm} />
				<button class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg" on:change={clearResults()} on:click={searchResults()}>Search</button>
			</div>
			{searchTerm}
		</div>
		<div class="col-span-8">		
			<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
				<svg>
					{#if shouldShow}
					<!-- Display book details -->
					<g class="details bg-black">
						<text id="bookTitle" x="{xScale(0)}" y="100" >
								{currentBookTitle}
						</text>
						<text id="bookGenre" x="{xScale(0)}" y="120" >
								{currentBookGenre}
						</text>
						<text id="bookYear" x="{xScale(0)}" y="140" >
								{currentBookYear}
						</text>
					</g>
					{/if}
						

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
						<g class="tick" transform="translate({xScale(i)/7} ,{height})">
								<text x="{barWidth/2}" y="-17">{point[0].year}</text>
							</g>
							{/if}
						{/each}
					</g>
			
					<g class='bars'>
						{#each data2 as point, i}
							{#each {length: point[0].totalCount} as book, j}
							<rect class="bars"
							id="bar-{point[j].id}"
							fill="{handleFill(point[j])}"
							on:click="{displayDetails(point[j])}"
							x="{xScale(i)/7 }" y="{yScale(j) - 11}" width="{barWidth}" height="11"></rect>
							{/each}
						{/each}
						</g>
				</svg>
			</div>
		</div>
		<div class="col-span-2">
			<div id="facets" class="flex flex-col gap-8 h-full justify-center items-center">
				{#each genres as genre}
					<div  on:click={highlightGenre(genre)} class="h-[35px] px-4 flex justify-items-center items-center  cursor-pointer w-full bg-gray-200 rounded-lg ">
						<h4 class="text-gray-700 text-xs">{genre}</h4>
					</div>
				{/each}
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
		height: 700px;
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
		stroke-width: 1px;
		opacity: 0.65;
		margin-bottom: 17px;
	}

	.bars.active {
		stroke: red;
		stroke-width: 2px;
	}

	.bars rect:hover {
		opacity: 1;
		stroke: #000000;
		cursor: pointer;
	}


	
</style>
