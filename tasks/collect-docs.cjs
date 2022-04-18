// Program to collect Google Doc IDs 
// of all files present in a Google Drive Folder
// and write them to a file.

const CWD = process.cwd();
const fs = require("fs");
const fetch = require("node-fetch");
const getfilelist = require("google-drive-getfilelist");
require('dotenv').config()
// Get API key from /env
const auth = process.env.key;
// In src/data, create new directory called posts
const posts = `${CWD}/src/data/posts`;
// Create posts directory if it doesn't exist
if (!fs.existsSync(posts)) {
  fs.mkdirSync(posts);
}

const topFolderId = "1YCZxZ7ACu9f3aS8LpV5uD7VxPdEya7FS"; // Please set the top folder ID.
getfilelist.GetFileList(
  {
    auth: auth,
    fields: "files(id), files(name)",
    id: topFolderId,
  },
  (err, res) => {
    if (err) {
      
      return;
    }
    const fileList = res.fileList.flatMap(({ files }) => files);
    

    const fileListString = fileList
      .map(
        (file) =>
          `{
    id: "${file.id}",
    filepath: "src/data/posts/${file.name}.json"
  }`
      )
      .join(",\n");
    fs.writeFileSync(
      `${CWD}/src/data/posts/all-docs.cjs`,
      `module.exports = [\n${fileListString}\n];`
    );
  }
);
