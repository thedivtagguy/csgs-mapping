<script>
	import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
	import places from "$data/indices/organizations-geocoded.csv.json";
	$: selectedRegion = "";

	let count = 0;

	// Define setRegion to set the value of the selected region to the value of the selected region
	const setRegion = (region) => {
		selectedRegion = region;
		console.log(selectedRegion);
	}

	// Go through all regions. Create an objec with unique region and their coordinates
	const regions = [];
	places.forEach(place => {
		if (place.region) {
			if (!regions.find(region => region.region === place.region)) {
				regions.push({
					region: place.region,
					latitude: place.lat,
					longitude: place.lng,
				});
			}
		}
	});

</script>

<main>
	<Map lat={22} lon={82} zoom={4.1}>
		<!-- Do this for all regions -->
		{#each regions as region, i}
			<MapMarker lat={region.latitude} lon={region.longitude} id={i} on:action={() => setRegion(region)}/>
		{/each}
	</Map>
	{selectedRegion.region}
</main>

<style>
	:global(.mapboxgl-canary) {
	/* Not hidden */
	visibility: visible !important;
	}

	:global(.mapboxgl-marker) {
  cursor: pointer;
}
</style>