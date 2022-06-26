const fs = require('fs');
const CWD = process.cwd();
const { parse } = require('csv/sync');
const inPath = `${CWD}/src/data/`;
const outPath = `${CWD}/src/data/`;
// Read file
const csv = fs.readFileSync(`${inPath}organizationsScatter.csv`, 'utf8');

const json = parse(csv, { columns: true });

const jsonWithId = json.map((el, i) => ({ ...el, id: i + 1 }));

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
const cleanIt = (obj) => {
    var cleaned = JSON.stringify(obj, null, 2);

    return cleaned.replace(/^[\t ]*"[^:\n\r]+(?<!\\)":/gm, function (match) {
        return match.replace(/"/g, "");
    });
}

// Clean

// Write file
fs.writeFileSync(`${outPath}organizationsScatter.json`, JSON.stringify(featureCollection, null, 2));

// Write the GEOJSON file
// fs.writeFileSync(`${outPath}organizationsScatter.geojson`, featureCollection);
