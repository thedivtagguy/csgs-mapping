// Using csv-parser, we can convert the csv file to JSON.
// This script takes in all CSVs in the data folder and converts them to JSON.
// The JSON files are saved in the data folder.

const CWD = process.cwd();
const fs = require('fs');
const { parse } = require('csv/sync');
const path = require('path');

const inPath = `${CWD}/src/data/`;
const outPath = `${CWD}/src/data/indices/`;

// If output directory doesn't exist, create it
if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath);
}

// list all files in the inPath, keep only .csv files
const files = fs.readdirSync(inPath).filter(file => path.extname(file) === '.csv');
console.log(files);
// Take each file, parse it, and stringify it and save it as a JSON file
files.forEach(file => {
    const csv = fs.readFileSync(`${inPath}${file}`, 'utf8');
    console.log(`Converting ${file} to JSON`);
    // Convert to JSON and save
    const json = parse(csv, { columns: true });
    // Write JSON file
    fs.writeFileSync(`${outPath}/${file}.json`, JSON.stringify(json))
});