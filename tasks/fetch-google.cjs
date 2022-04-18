const CWD = process.cwd();

const fs = require("fs");
const archieml = require("archieml");
const fetch = require("node-fetch");
const docs = require(`${CWD}/google.config.cjs`);
// Also get the Google Docs IDs from src/data/all-docs.js
const allDocs = require(`${CWD}/src/data/posts/all-docs.cjs`);
// Add allDocs to docs array
docs.push(...allDocs);

const fetchGoogle = async ({ id, gid }) => {
  

  const base = "https://docs.google.com";
  const post = gid
    ? `spreadsheets/u/1/d/${id}/export?format=csv&id=${id}&gid=${gid}`
    : `document/d/${id}/export?format=txt`;
  const url = `${base}/${post}`;

  try {
    const response = await fetch(url);
    const text = await response.text();

    if (gid) return text;

    const parsed = archieml.load(text);
    const str = JSON.stringify(parsed);
    return str;
  } catch (err) {
    throw new Error(err);
  }
};

(async () => {
  for (let d of docs) {
    try {
      const str = await fetchGoogle(d);
      const file = `${CWD}/${d.filepath}`;
      console.log(`Writing ${file}`);
      fs.writeFileSync(file, str);
    } catch (err) {
      
    }
  }
})();
