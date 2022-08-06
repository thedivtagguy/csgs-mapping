<script>
    import { scaleLinear } from 'd3-scale';
	import ModalOpen from '../modal/ModalOpen.svelte';
	import polygonGenerator from './polygons.js';
	let modal;
	let year = '2020';

	let gridWdith = 10;
	let gridHeight = 10;
	$: console.log(year);

	//////////////////////////////////////////////////////////////////
	export let data = [];	// The dataset to be used
    export let height = 800;	// Height of the chart
	export let width = 900;	    // Width of the chart
	export let modalContent = {};	// The content to be shown in the modal
	export let id = "";			// ID prefix of the chart
	export let selected = "";	// The selected facet
	export let facet = "";
	export let facets = [];
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

	// Array of years present in the data
	const years = data.map((d,i) => d[0].year);
</script>

<section>
	<ModalOpen bind:this={modal}/>
	<div id="facets" class="flex z-10 my-8  flex-col gap-4 justify-start pb-8my-8">
		<select bind:value={selected} class="rounded-md " >
			{#each facets as facet}
				<option class="capitalize" value={facet}>
					{facet}
				</option>
			{/each}
		</select>

		<select bind:value={year} class="rounded-md " >
			{#each years as year}
				<option class="capitalize" value={year}>
					{year <= 1990 ? "1940-1990" : year}
				</option>
			{/each}
		</select>
	
	</div>

    <div class="grid grid-cols-6 gap-1">
		{#each data as point, i}
		{#each {length: point[0].totalCount} as book, j}
		{#if point[0].year == year}
		<svg width="40" height="20">
			<path
			style="opacity:{
				// If selected is equal to null, opacity if full. If selected is not null and not equal to the facet, opacity is 0.1
				selected === `All ${facet}s` ? 1 : selected !== point[j][facet] ? 0.2 : 1								
				};
				pointer-events: {
					// If selected is equal to null, pointer events are all. If selected is not null and not equal to the facet, pointer events are none.
					selected === `All ${facet}s` ? 'all' : selected !== point[j][facet] ? 'none' : 'all'
				}"
			fill="{point[j].color}"
								on:click={() => modal.handleOpen(point[j], modalContent, id)}
								on:mouseover="{() => tooltip(point[j])}"
								on:mouseleave="{() => [nameVar] = [null]}"
			d="{polygonGenerator(true, 20 ,30 )}" />
			  
		  </svg>
	
		  {/if}
		{/each}
	{/each}
	</div>
</section>

<style>
	
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
  font-size: small;
  background-color: var(--color-orange);
  text-transform: capitalize;

}
	option {
		text-transform: capitalize;
	}

</style>