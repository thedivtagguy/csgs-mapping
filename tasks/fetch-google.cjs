const CWD = process.cwd();

const fs = require("fs");
const archieml = require("archieml");
const fetch = require("node-fetch");
const docs = require(`${CWD}/google.config.cjs`);
// Also get the Google Docs IDs from src/data/all-docs.js
const allDocs = require(`${CWD}/src/data/posts/all-docs.cjs`);
// Add allDocs to docs array
docs.push(...allDocs);


function csvJSON(csv){

  let lines=csv.split("\n");

  let result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step 
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  let headers=lines[0].split(",");

  for(let i=1;i<lines.length;i++){

      let obj = {};
      let currentline=lines[i].split(",");

      for(let j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}


const fetchGoogle = async ({ id, gid }) => {
  

  const base = "https://docs.google.com";
  const post = gid
    ? `spreadsheets/u/1/d/${id}/export?format=csv&id=${id}&gid=${gid}`
    : `document/d/${id}/export?format=txt`;
  const url = `${base}/${post}`;

  

  try {
    const response = await fetch(url);
    const text = await response.text();

    // CSV files to JSON
    const json = csvJSON(text);

    // Write to file  
    fs.writeFileSync(`${CWD}/src/data/posts/${id}.json`, json);
    

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
