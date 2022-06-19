<script>
	import { scaleLinear } from 'd3-scale';
	import publications from "$data/publications.csv";
	import * as d3 from 'd3';
	import Modal from '$components/helpers/Modal.svelte';
	let modal;
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
	// Add 'All Genres' to genres array

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
	genres.unshift('All Genres');

	////////////////////////////////////////////////////////////////////
	//////// D3 Config /////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////

	const xTicks = [1990, 1995, 2000, 2005, 2010, 2015];
	const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
	const padding = { top: 20, right: 65, bottom: 35, left: 25 };

	let width = 900;
	let height = 800;

	$: xScale = scaleLinear()
		.domain([0, xTicks.length ])
		.range([padding.left, width - padding.right]);
	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length - 118; 
	

	////////////////////////////////////////////////////////////////////
	//////// Filters and Hover /////////////////////////////////////////
	////////////////////////////////////////////////////////////////////


	$: selectedGenre = null; 

	// Function to handleFill. 
	// If a genre is selected, then return that color. If not then return gray
	// Color only that genre
	$: handleFill = (d) => {
		if (selectedGenre === d.genre) {
			return d.color;
		} else {
			return '#d3d3d3';
		}
	}

	// Function to change genreSelection when a genre is clicked
	$: highlightGenre = (d) => {
		selectedGenre = d;
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
	$: everythingElse = [];
	// Based on the search term, function to filter those IDs
	$: searchResults = () => {
		// Clear the search array
		clearResults();
		data2.forEach(d => {
			d.forEach(d => {
				if (d.title.toLowerCase().includes(searchTerm.toLowerCase()) || d.genre.toLowerCase().includes(searchTerm.toLowerCase())) {
					// Add this ID to array
					searchArray.push(d.id)
				}
			})
		})

		// everythingElse is everything else
		data2.forEach(d => {
			d.forEach(d => {
				if (!searchArray.includes(d.id)) {
					everythingElse.push(d.id)
				}
			})
		})

	   // Error handling
	   if (searchTerm === '') {
		   	clearResults();
		} else if (searchArray.length === 0) {
			alert('No results found');
		}
		highlightResults();

	} 

	$: highlightResults = () => {
		// Apply bars.ctive class to the Ids in searchArray
		// rects have ID of the form 'bar-{id}'
		// Select all the IDs in searchArray
		searchArray.map(
			d => d3.select('#bar-' + d)
				.classed('active', true)
		)
		// Reduce opacity of bars in everythingElse
		everythingElse.map(
			d => d3.select('#bar-' + d)
				.classed('inactive', true)
		)
		console.log(everythingElse);

	}

	$: clearResults = () => {
		// Empty the array
		searchArray = [];
		d3.selectAll('.active')
			.classed('active', false)
		// Clear the everythingElse array
		everythingElse = [];
		d3.selectAll('.inactive')
			.classed('inactive', false)

		
	}

	////////////////////////////////////////////////////////////////////
	// Polygon Generator ///////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////

	// Function to generate the polygon

	$: polygonGenerator = (xStartingPos , yStartingPos) => {

			yStartingPos -= 16;
			// Generate a polygon with random points

			let r = 2; //r is the maximum a vertex can vary. Might also need to be a function of screenwidth

			let c1 = r * Math.random();
			let c2 = r * Math.random();
			let c3 = r * Math.random();
			let c4 = r * Math.random();


			let x = xStartingPos + c1;
			let y = yStartingPos + c1;

			//width (a) and height (b) of rectangle sides. Should ideally be a function of screenwidth?
			let a = 18;
			let b = 12;

			let x2 = a + xStartingPos - c2;
			let y2 =  yStartingPos + c2;

			let x3 = a + xStartingPos - c3;
			let y3 = b + yStartingPos -c3;

			let x4 = xStartingPos + c4;
			let y4 = b + yStartingPos -c4;

			let polygon = 'M' + x + ',' + y;
			polygon += 'L' + x2 + ',' + y2;	
			polygon += 'L' + x3 + ',' + y3;
			polygon += 'L' + x4 + ',' + y4;
			//polygon += 'L' + x + ',' + y  ;
			polygon += 'Z';
			return polygon;

}

</script>
<main>
	<datalist id="titles">
		{#each data2 as point, i}
			{#each {length: point[0].totalCount} as book, j}
				<option value="{point[j].title}">
			{/each}
		{/each}
	</datalist>
	<section class="grid grid-cols-12 gap-6 ">
		<div class="col-span-3 py-6">
			<h1 class="text-4xl uppercase font-bold">Publications</h1>
			<p class="text-gray-600 py-4 text-sm">
				This chart shows the number of publications by genre in the last five years. Use the sidebar to filter by genre or click on a box to read more.
			</p>
			<div class="flex h-28 flex-col items-center">
				<input bind:value={searchTerm} class="w-full my-2 border-2 px-4 focus:ring focus:ring-gray-400 bg-[color:var(--color-darker-background)]  border-amber-600 rounded-md h-12" list="titles"
				size="50"
				autocomplete="off" />
				<button type="submit" class="w-full px-4 py-2 text-gray-700 bg-[color:var(--color-orange)] rounded-lg" on:change={clearResults()} on:click={searchResults()}>Search</button>
			</div>
			
		</div>
		
		<div class="col-span-9">	
				
			<div class="chart relative " bind:clientWidth={width} bind:clientHeight={height}>
				<div id="facets" class="flex z-10 right-0 absolute flex-col gap-8 justify-start my-8">
					<select class="rounded-md" on:change="{highlightGenre(selectedGenre)}">
						{#each genres as genre}
							<option on:click="{highlightGenre(genre)}" value={genre}>
								{genre}
							</option>
						{/each}
					</select>
				
				</div>
				<svg class="relative">
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
							<path 
								class="bars boxes hover:cursor-pointer"
								id="bar-{point[j].id}"
								fill="{handleFill(point[j])}"
								on:click={() => modal.show()}
								d="{polygonGenerator(xScale(i)/7, yScale(j))}"
							></path>
						

							{/each}
						{/each}
						</g>
				</svg>
			</div>
		</div>
		<div class="col-span-2">
		
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

}
	
</style>
