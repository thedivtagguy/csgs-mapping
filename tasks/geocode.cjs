const CWD = process.cwd();
const fs = require("fs");
const fetch = require("node-fetch");
require('dotenv').config()
const { parse, stringify} = require('csv/sync');// Fetch API key from dot env file
const API_KEY = process.env.LOCATIONIQ_API_KEY;

const baseURL = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=`


// Read in the CSV file
const getGeoCode = async (address) => {
    try {
        const url = `${baseURL}${address}`;
        const response = await fetch(url);
        const json = await response.json();
        // Get lat and lng from the response
        const lat = json.data[0].latitude;
        const lng = json.data[0].longitude;
        console.log(`Processed ${address}`);

        // Return the lat and lng
        return { lat, lng };
    }
    catch (error) {
        console.log(error);
    }
};

(async () => {
    const file = `${CWD}/src/data/organizations.csv`;
    const csv = fs.readFileSync(file, "utf8");
    const json = parse(csv, { columns: true });
    // Get all keys
    const keys = Object.keys(json[0]);
   // Add two new keys to the JSON object for lat and lng
    for (let i = 0; i < json.length; i++) {
        // Get address from the region key
        const address = json[i].region;
        // If the address is empty, skip it
        if (!address) continue;
        const { lat, lng } = await getGeoCode(address);
        json[i].lat = lat;
        json[i].lng = lng;
    }
    // Write the new CSV file with headers from the keys array
    const newCsv = stringify(json, { header: keys });
    fs.writeFileSync(`${CWD}/src/data/organizations-geocoded.csv`, newCsv);

})();