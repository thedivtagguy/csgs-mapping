<script context="module">
// IMport src/data/publications.js
import publications from "../data/publications.csv";
// First row is the header
const header = publications.shift();
// Create a new JSON object with first 5 rows of data
const data = publications.slice(0, 5);
export const  publicationsData = data;
import Form from "../components/Form.svelte";
</script>

<header class="py-1">
  <div class="py-12 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-lg font-bold leading-6 text-gray-900">
        Publications
      </h2>
      <!-- Render publicationsData -->
      {#each publicationsData as publication}
      <div class="mt-4">
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

  </div>
</header>
