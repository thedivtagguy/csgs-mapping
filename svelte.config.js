import fs from "fs";
import path from "path";
import adapterStatic from "@sveltejs/adapter-static";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { indexAlgolia } from 'svelte-algolia/server-side'
import 'dotenv/config' // optional
import { loadPublications, loadAVMaterial, loadDigitalSpaces, loadEvents, loadMiscellaneous, loadOrganizations, loadJudgements, loadQA } from "./algoliaIndices.js";


const algoliaConfig = {
  appId: process.env.VITE_ALGOLIA_APP_ID,
  // don't prefix admin key with VITE_ else it would get exposed to client-side code
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indices: [
    { name: `publications`, getData: loadPublications },
    { name: `avMaterial`, getData: loadAVMaterial },
    { name: `digitalSpaces`, getData: loadDigitalSpaces },
    { name: `events`, getData: loadEvents },
    { name: `miscellaneous`, getData: loadMiscellaneous },
    { name: `organizations`, getData: loadOrganizations },
    { name: `judgements`, getData: loadJudgements },
    { name: `qa`, getData: loadQA },
  ],
  settings: {
    attributesToHighlight: [`title`, `programs`],
    typoTolerance: `false`,
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

