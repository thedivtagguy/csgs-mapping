import sveltePreprocess from "svelte-preprocess";
import svelte from "rollup-plugin-svelte";
import { mdsvex } from "mdsvex";
const production = !process.env.ROLLUP_WATCH;

preprocess: sveltePreprocess({
  sourceMap: !production,
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")]
  }
});

export default {
  plugins: [
    svelte({
			// tell svelte to handle mdsvex files
			extensions: [".svelte", ".svx"],
			preprocess: mdsvex()
		})
  ]
};