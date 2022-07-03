<script>
import algoliasearch from 'algoliasearch/lite.js';
import instantsearch from 'instantsearch.js';
import { stats, searchBox, hits, index, pagination } from 'instantsearch.js/es/widgets/index.js';
import {onMount} from 'svelte';
const searchClient = algoliasearch('8P43BBJQAR', '2c3f24b6adc627d1edf4a3e6879e1e62');


// Add onMount 
onMount(() => {

  const search = instantsearch({
  indexName: 'publications',
  searchClient,
  routing: true,
  hitsPerPage: 10,
});

search.addWidgets([
  searchBox({
    container: '#searchbox',
    searchAsYouType: false,
    placeholder: 'Search our archive',
    templates: {
    submit: `
<div class="bg-[color:#d5d2bf] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-lg">
  <svg xmlns="http://www.w3.org/2000/svg" stroke="#f0f0f0" width="30" height="30" viewBox="-5 -5 28 28">
    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)">
      <circle cx="7.11" cy="7.11" r="7.11"/>
      <path d="M16 16l-3.87-3.87"/>
    </g>
  </svg>
</div>
    `,
  },
  }),

 pagination({
  container: '#paginate',
  padding: 1,
  showFirst: false,
  showLast: false,
  templates: {
    previous: `
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.143">
    <path d="M9 5H1M5 9L1 5l4-4"/>
  </g>
</svg>
    `,
    next: `
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.143">
    <path d="M1 5h8M5 9l4-4-4-4"/>
  </g>
</svg>
    `,
  },
 }),

  hits({
    container: '#publications-search',
    templates: {
      item:
        `
        <div class="py-4">
          <h4 class="font-semibold text-xl">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h4>
          <p class="text-sm hit-description">{{ author }}</p>
          <div class="flex flex-row justify-items-center items-center gap-4">
            <p class="text-sm hit-description">{{ genre }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{ year }}</p>
          </div>
        </div>
        `,
    },
  }),

  index({ indexName: 'events' })
    .addWidgets([
      hits({
        container: '#events-search',
        templates: {
          item:
            '{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}',
        },
      }),
    ]),
]);

search.start();

});

</script>
  
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=" crossorigin="anonymous">
</svelte:head>
<main class="py-12">
  <div class="flex justify-end w-full gap-24 items-center">
    <div id="searchbox"></div>
    <div id="paginate"></div>

  </div>
  <section class="grid  py-12 grid-cols-12">
    <div class="col-span-3">
      <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Publications</h3>
    </div>
    <div class="col-span-9">
      <div id="publications-search"></div>
    </div>
  </section>

  <section class="grid  grid-cols-12">
    <div class="col-span-3">
      <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Events</h3>
    </div>
    <div class="col-span-9">
      <div id="events-search"></div>
    </div>
  </section>
</main>

<style global>
  
  .ais-SearchBox-input {
    padding: 10px;
    border: 1px solid #d5d2bf;
    border-radius: 6px;
    width: 600px;
  }

  .ais-SearchBox-submitIcon path{
    width: 45px;
    stroke-width: 12px ;
    stroke: #f0f0f0;
  }

  .ais-SearchBox-form{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .ais-Pagination-item  {
    padding: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: large;
  }
  .ais-Pagination-item:hover {
    background-color: #f0f0f0;
  }
</style>