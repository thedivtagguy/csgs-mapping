<script context="module">
// IMport src/data/publications.js
import publications from "../data/publications.csv";
// First row is the header
const header = publications.shift();
// Create a new JSON object with first 5 rows of data
const data = publications.slice(0, 5);
export const  publicationsData = data;
</script>

<header class="py-1">
  <div class="py-12 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="mt-2 text-3xl leading-8 w-1/2 mx-auto font-extrabold tracking-tight text-gray-900 sm:text-4xl">CSGS</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Mapping Resources</p>
      </div>
      <!-- Render publicationsData -->
      {#each publicationsData as publication}
      <div class="mt-10">
        <div class="flex items-center justify-between">
          <div class="ml-4">
            <p class="text-sm leading-5 font-medium text-gray-900">
              <a href="/" class="hover:underline">{publication.Title}</a>
            </p>
            <div class="flex text-sm leading-5 text-gray-500">
              <time datetime="2020-03-16">{publication.Genre}</time>
            </div>
          </div>
        </div>
    </div>
    {/each}
    </div>
</header>
