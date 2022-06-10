import mapbox from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
mapbox.accessToken = "pk.eyJ1IjoidGhlZGl2dGFnZ3V5IiwiYSI6ImNsNDVudHlmYTAwZTIzcGtraTA3cnkyNWsifQ.D-1s9HUxnzksEdF31NFr_Q";

const key = Symbol();

export { mapbox, key };