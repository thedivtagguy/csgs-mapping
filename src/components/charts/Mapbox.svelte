<script>
	import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
	import places from "$data/indices/organizations-geocoded.csv.json";

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

	console.log(regions);

</script>

<main>
	<Map lat={22} lon={82} zoom={4.1}>
		<!-- Do this for all regions -->
		{#each regions as region}
			<MapMarker lat={region.latitude} lon={region.longitude}/>
		{/each}
	</Map>
</main>

<style>
	:global(.mapboxgl-canary) {
	/* Not hidden */
	visibility: visible !important;
	}
</style>