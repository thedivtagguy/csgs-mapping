<script>
	import { onDestroy, setContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';

	setContext(key, {
		getMap: () => map,
	});

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;

	// Function load to create a new map and add to div
	const load = () => {
		map = new mapbox.Map({
			container: container,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lon, lat],
			zoom: zoom,
		});
	};
	
</script>

<!-- this special element will be explained in a later section -->
<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
		on:load={load}
	/>
</svelte:head>

<div bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: 500px;
	}
</style>
