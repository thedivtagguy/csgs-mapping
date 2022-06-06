import fs from "fs";
import path from "path";
import adapterStatic from "@sveltejs/adapter-static";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { indexAlgolia } from 'svelte-algolia/server-side'
import fetch from "node-fetch";

import 'dotenv/config' // optional
import * as d3 from 'd3';

async function loadData() {
  // Fetch data from publications.csv and turn it into a JSON array
  const publications = await d3.csv('publications.csv')
    // Turn publications into a JSON array and return it
    return publications.map((publication) => ({
            ...publication,
            // Create new field called ID and create an ID from the publication's row number
            id: publication.row,
    }))

    console.log(publications)
}

const algoliaConfig = {
  appId: process.env.VITE_ALGOLIA_APP_ID,
  // don't prefix admin key with VITE_ else it would get exposed to client-side code
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indices: [
    { name: `publications`, getData: loadData },
  ],
  settings: {
    attributesToHighlight: [`title`],
  },
}

indexAlgolia(algoliaConfig)
const { thedivtagguy } = JSON.parse(fs.readFileSync("package.json", "utf8"));
const dev = process.env.NODE_ENV === "development";
const dir = thedivtagguy ? thedivtagguy.subdirectory : "";
const prefix = dir.startsWith("/") ? "" : "/";
const base = dev || !dir ? "" : `${prefix}${dir}`;

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [autoprefixer]
  }
});

const config = {
  preprocess,
  kit: {
    adapter: adapterStatic(),
    target: "#svelte",
    vite: {
      resolve: {
        alias: {
          $actions: path.resolve("./src/actions"),
          $components: path.resolve("./src/components"),
          $data: path.resolve("./src/data"),
          $stores: path.resolve("./src/stores"),
          $styles: path.resolve("./src/styles"),
          $svg: path.resolve("./src/svg"),
          $utils: path.resolve("./src/utils")
        }
      },
      plugins: [dsv(), svg()],
    },
    paths: {
      base
    }
  }
};

export default config;

