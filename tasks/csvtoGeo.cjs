const csv2geojson = require('csv2geojson');
const fs = require('fs');
const CWD = process.cwd();

const path = require('path');
const inPath = `${CWD}/src/data/`;
const outPath = `${CWD}/src/data/`;
// Read file
const csv = fs.readFileSync(`${inPath}organizationsScatter.csv`, 'utf8');

// Convert CSV to GeoJSON
const geojson = csv2geojson.csv2geojson(csv, {
    delimiter: ',',
    latfield: 'scatterLat',
    lonfield: 'scatterLong',
}, function(err, data) {
    if (err) throw err;
    console.log(data);
}
);

// Write GeoJSON to file
fs.writeFileSync(outPath, JSON.stringify(geojson));
console.log('Done!');
