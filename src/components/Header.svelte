<script context="module">
// IMport src/data/publications.js
import publications from "../data/publications.csv";
// First row is the header
const header = publications.shift();
// Create a new JSON object with first 5 rows of data
const data = publications.slice(0, 5);
export const  publicationsData = data;
import StackedBar from "../components/charts/StackedBar.svelte";
import Circles from "./charts/Circles.svelte"
</script>

<header class="py-1">
  <div class="py-12 ">
    <StackedBar/>
    <Circles />
  </div>
</header>
