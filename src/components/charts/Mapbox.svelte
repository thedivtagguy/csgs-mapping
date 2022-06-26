<script>
	import Map from './Map.svelte';
	import places from "$data/indices/organizations-geocoded.csv.json";
	$: selectedRegion = "";

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

	// Create an object with all organizations and their coordinates
	const organizations = [];
	places.forEach(place => {
		if (place.region) {
			organizations.push({
				organization: place.name,
				latitude: place.lat,
				longitude: place.lng,
			});
		}
	});
</script>

<main class="py-16">
	<div class="col-span-1">
		<Map zoom={4.1}>
			<!-- Do this for all regions
			{#each organizations as region, i}
				<MapMarker lat={region.latitude} lon={region.longitude} id={i} on:action={() => setRegion(region)}/>
			{/each} -->
		</Map>
	</div>
	<!-- <div class="col-span-1">
		<MapOrganizationList region={selectedRegion}/>
	</div> -->
</main>

<style>


	:global(.mapboxgl-marker) {
  cursor: pointer;
}
</style>