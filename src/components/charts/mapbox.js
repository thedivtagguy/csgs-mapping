import mapboxgl from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZGl2dGFnZ3V5IiwiYSI6ImNpcWM4N3FlaDAxd2Nmd20xejdwdmVoNmwifQ.Toi-P83h-0tC_mj60h25rg';

const key = Symbol();

export { mapboxgl, key };