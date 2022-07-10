<script>
	import { setContext } from 'svelte';
	import { mapboxgl, key } from './mapbox.js';
    import geoData from "$data/organizationsScatter.json"
	import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
	
	setContext(key, {
		getMap: () => map,
	});


	let map;


	function initMap(container) {
			// Create a popup, but don't add it to the map yet.
	const popup = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});
		map = new mapboxgl.Map({
			container: container,
			style: 'mapbox://styles/thedivtagguy/cl4ktlt35001d16mim8rtqh8i',
			center: [80.9, 22.7],
			zoom: 4,
			maxZoom: 20
		});

		map.on('load', () => {
			// Add a new source from our GeoJSON data and
			// set the 'cluster' option to true. GL-JS will
			// add the point_count property to your source data.
			map.addSource('earthquakes', {
				type: 'geojson',
				// Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
				// from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
				data: geoData,
				cluster: true,
				clusterMaxZoom: 14, // Max zoom to cluster points on
				clusterRadius: 20 // Radius of each cluster when clustering points (defaults to 50)
			});

			map.addLayer({
				id: 'clusters',
				type: 'circle',
				source: 'earthquakes',
				filter: ['has', 'point_count'],
				paint: {
					// Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
					// with three steps to implement three types of circles:
					//   * Blue, 20px circles when point count is less than 100
					//   * Yellow, 30px circles when point count is between 100 and 750
					//   * Pink, 40px circles when point count is greater than or equal to 750
					'circle-color': [
						'step',
						['get', 'point_count'],
						'#F67C87',
						100,
						'#f1f075',
						750,
						'#f28cb1'
					],
					'circle-radius': [
						'step',
						['get', 'point_count'],
						30,
						100,
						40,
						750,
						50
					]
				}
			});

			map.addLayer({
				id: 'cluster-count',
				type: 'symbol',
				source: 'earthquakes',
				filter: ['has', 'point_count'],
				layout: {
					'text-field': '{point_count_abbreviated}',
					'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
					'text-size': 12
				}
			});

			map.addLayer({
				id: 'unclustered-point',
				type: 'circle',
				source: 'earthquakes',
				filter: ['!', ['has', 'point_count']],
				paint: {
					'circle-color': '#c43540',
					'circle-radius': 10,
					'circle-stroke-width': 1,
					'circle-stroke-color': '#fff'
				}
			});

			// inspect a cluster on click
			map.on('click', 'clusters', (e) => {
				const features = map.queryRenderedFeatures(e.point, {
					layers: ['clusters']
				});
				const clusterId = features[0].properties.cluster_id;
				map.getSource('earthquakes').getClusterExpansionZoom(
					clusterId,
					(err, zoom) => {
						if (err) return;

						map.easeTo({
							center: features[0].geometry.coordinates,
							zoom: zoom
						});
					}
				);
			});


			
			// When a click event occurs on a feature in
			// the unclustered-point layer, open a popup at
			// the location of the feature, with
			// description HTML from its properties.
			map.on('mouseenter', 'unclustered-point', (e) => {
				const coordinates = e.features[0].geometry.coordinates.slice();
				
				// Ensure that if the map is zoomed out such that
				// multiple copies of the feature are visible, the
				// popup appears over the copy being pointed to.
				while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
				}

				popup
					.setLngLat(coordinates)
					.setHTML(
					`${e.features[0].properties.name}<br> ${e.features[0].properties.region}`
				)
					.addTo(map);


			});

			map.on('mouseleave', 'unclustered-point', () => {
				popup.remove();
			});
			

			// On clicking point, show sidebar
			map.on('click', 'unclustered-point', (e) => {
				console.log(e.features[0].properties);
				document.getElementById('sidebar').style.visibility = 'visible';

				document.getElementById('name').innerHTML = e.features[0].properties.name;
	
				let keywords = e.features[0].properties.keywords.split(',');
				let keywordsHTML = '';
				keywords.forEach(keyword => {
					keywordsHTML += `<p id="keyword">${keyword}</p>`;
				});
				document.getElementById('keywords').innerHTML = keywordsHTML;
				document.getElementById('type').innerHTML = e.features[0].properties.type;
			})

		
			map.on('mouseenter', 'clusters', () => {
				map.getCanvas().style.cursor = 'pointer';
			});
			map.on('mouseleave', 'clusters', () => {
				map.getCanvas().style.cursor = '';
			});
		});

	}
	// Add clustering to the map
</script>

<!-- this special element will be explained in a later section -->
<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
		
	/>
</svelte:head>
	<h3 class="text-4xl py-6 uppercase font-sans font-bold">Institutions</h3>
	
<div id="map-background" use:initMap>

	<div  transition:scale={{ delay: 250, duration: 300, easing: quintOut }} id="sidebar">
		<p id="name"></p>
		<div id="keywords">
			<p id="keyword"></p>
		</div>
		<p id="type"></p>
		<p id="region"></p>
	</div>
</div>


<style>
	div {
		width: 100%;
		height: 90vh;
	}
    
	#map-background {
		position: relative;
	}

	#sidebar {
		visibility: hidden;
		position: absolute;
		top: 10;
		left: 10;
		bottom: 10;
		width: 400px;
		height: 50%;
		background: var(--color-background);
		margin: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	#name {
		width: 100%;
		font-weight: 700;
		font-size: 20px;
		line-height: 1.2em;
		padding: 10px;
		text-transform: uppercase;
		background-color: var(--color-aqua);
		color: var(--color-heading-text);
	}

	#keywords {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: start;
		padding: 10px;
	}

	:global(#keyword) {
		background-color: var(--color-orange);
		font-weight: 600;
		padding: 5px 10px 5px 10px;
		font-size: 14px;
		text-transform: uppercase;
	}
</style>
