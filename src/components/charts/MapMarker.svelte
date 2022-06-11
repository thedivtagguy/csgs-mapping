<script>
	import { getContext } from 'svelte';
	import { mapbox, key } from './mapbox.js';
	import { createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	function dispatchAction() {
		dispatch('action');
	}
	
	const { getMap } = getContext(key);
	const map = getMap();

	export let lat;
	export let lon;
	export let label;
	export let id;

	const popup = new mapbox.Popup({ offset: 25 })
		.setText(label);

	const marker = new mapbox.Marker()
		.setLngLat([lon, lat])
		// .setPopup(popup)
		// Set the marker's id to the index of the marker in the array
		.addTo(map);

	marker.getElement().addEventListener('click', () => {
		// Dispatch an action when the marker is clicked
		dispatchAction();
	});
</script>

