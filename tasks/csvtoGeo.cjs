const fs = require('fs');
const CWD = process.cwd();
const { parse } = require('csv/sync');
const inPath = `${CWD}/src/data/`;
const outPath = `${CWD}/src/data/`;
// Read file
const csv = fs.readFileSync(`${inPath}organizations.csv`, 'utf8');

const colorDictionary = {
    "Academic Research Centre": "#CADEAD",
    "Collective": "#F67C87",
    "Community Organization": "#F3DF8C",
    "NGO": "#79A5AE",
    "Publishing house": "#F3BEF1",
    "Non-profit organization": "#f3bef1",
    "Resource Group": "#F7B289",
    "Service Provider": "#F3BEF1",
}
const color = "#F3BEF1";

const json = parse(csv, { columns: true });

let jsonWithId = json.map((el, i) => ({ ...el, id: i + 1 }));
// Go through each row and add a color based on matching type
jsonWithId.forEach(el => {
    el.color = colorDictionary[el.type] || color;
});

const features = jsonWithId.map(el => ({
    type: 'Feature',
    properties: el,
    geometry: {
        type: 'Point',
        coordinates: [el.scatterLong, el.scatterLat ]
    }
}));
// Create the feature collection
const featureCollection = {
    type: 'FeatureCollection',
    crs: {
        type: 'name',
        properties: {
            name: 'urn:ogc:def:crs:OGC:1.3:CRS84'
        },
}, 
features: features

};

// Clean

// Write file
fs.writeFileSync(`${outPath}organizationsScatter.json`, JSON.stringify(featureCollection, null, 2));

// Write the GEOJSON file
// fs.writeFileSync(`${outPath}organizationsScatter.geojson`, featureCollection);
