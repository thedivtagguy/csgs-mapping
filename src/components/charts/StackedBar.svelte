<script>
	import { scaleLinear } from 'd3-scale';

	import publications from "$data/publications.csv";
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
	// Print year of the first item
	console.log(refined);

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

	const points = refined;

	const xTicks = [1990, 1995, 2000, 2005, 2010, 2015];
	const yTicks = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
	const padding = { top: 20, right: 50, bottom: 20, left: 25 };

	let width = 1000;
	let height = 500;

	function formatMobile(tick) {
		return "'" + tick.toString().slice(-2);
	}

	$: xScale = scaleLinear()
		.domain([0, xTicks.length ])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, Math.max.apply(null, yTicks)])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / xTicks.length - 140; 
</script>


<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg>
		<!-- y axis -->
		<g class="axis y-axis">
			{#each yTicks as tick}
				<g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
					<line x2="100%"></line>
					<text y="-4">{tick}</text>
				</g>
			{/each}
		</g>

		<!-- x axis -->
		<g class="axis x-axis">
			{#each points as point, i}
				<g class="tick" transform="translate({xScale(i)} ,{height})">
					<text x="{barWidth/2}" y="-4">{width > 380 ? point.year : formatMobile(point.year)}</text>
				</g>
			{/each}
		</g>

		<g class='bars'>
			{#each points as point, i}
				
				<rect
					x="{xScale(i)/14}"
					y="{yScale(point.totalCount)}"
					width="{barWidth - 4}"
					height="{yScale(0) - yScale(point.totalCount)}"
				></rect>
			{/each}
		</g>
	</svg>
</div>

<style>
	h2 {
		text-align: center;
	}

	.chart {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}

	svg {
		position: relative;
		width: 100%;
		height: 500px;
	}

	.tick {
		font-family: Helvetica, Arial;
		font-size: .725em;
		font-weight: 200;
	}

	.tick line {
		stroke: #e2e2e2;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #ccc;
		text-anchor: start;
	}

	.tick.tick-0 line {
		stroke-dasharray: 0;
	}

	.x-axis .tick text {
		text-anchor: middle;
	}

	.bars rect {
		fill: #a11;
		stroke: none;
		opacity: 0.65;
	}
</style>
