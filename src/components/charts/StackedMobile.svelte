<script>
    import { scaleLinear } from 'd3-scale';
	import ModalOpen from '../modal/ModalOpen.svelte';
	import polygonGenerator from './polygons.js';
	
	let selected;
	let decade = '2020';

	let gridWdith = 10;
	let gridHeight = 10;
	$: console.log(decade);

	//////////////////////////////////////////////////////////////////
	let modal;
	export let data = [];	// The dataset to be used
    export let height = 800;	// Height of the chart
	export let width = 900;	    // Width of the chart

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
    <label for="large-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large range</label>
<input id="large-range" type="range" value="50" class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700">
</main>