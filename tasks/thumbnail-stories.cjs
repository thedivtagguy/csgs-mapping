const fs = require("fs");
const mkdirp = require("mkdirp");
const resize = require("./resize-image.cjs");

const CWD = process.cwd();
const pathIn = `${CWD}/thumbnails/stories`;
const pathOut = `${CWD}/static/common/assets/thumbnails`;
const sizes = [32, 640, 960, 1280];

function getNewImages() {
  const filesIn = fs.readdirSync(pathIn).filter((d) => d.includes(".jpg"));
  const filesOut = fs.readdirSync(`${pathOut}/${sizes[0]}`).filter((d) => d.includes(".jpg"));

  return filesIn.filter((d) => !filesOut.includes(d));
}

function makeThumbnail(file) {
  return new Promise((resolve, reject) => {
    const promises = sizes.map((size) =>
      resize({ pathIn, pathOut, file, size, blur: size === sizes[0] })
    );

    Promise.all(promises).then(resolve).catch(reject);
  });
}

(async () => {
  

  sizes.forEach((size) => mkdirp.sync(`${pathOut}/${size}`));

  const files = getNewImages();

  try {
    for (let file of files) {
      await makeThumbnail(file);
      console.log(`${file} done`);
    }
  } catch (err) {
    console.error(err);
  }

  
  process.exit();
})();
