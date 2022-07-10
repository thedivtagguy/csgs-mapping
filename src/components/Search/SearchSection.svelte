<script>
import algoliasearch from 'algoliasearch/lite.js';
import instantsearch from 'instantsearch.js';
import { stats, searchBox, hits, index, pagination } from 'instantsearch.js/es/widgets/index.js';
import {onMount} from 'svelte';
const searchClient = algoliasearch('8P43BBJQAR', '2c3f24b6adc627d1edf4a3e6879e1e62');
let selected;

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
<div class="bg-[color:#d5d2bf] hover:bg-[color:#f0f0f0] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-lg">
  <svg xmlns="http://www.w3.org/2000/svg" stroke="#f0f0f0" width="30" height="30" viewBox="-5 -5 28 28">
    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)">
      <circle cx="7.11" cy="7.11" r="7.11"/>
      <path d="M16 16l-3.87-3.87"/>
    </g>
  </svg>
</div>
    `,
    reset: `
    <div class="bg-[color:#d5d2bf] hover:bg-[color:#f0f0f0] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-lg">
  <svg xmlns="http://www.w3.org/2000/svg" stroke="#f0f0f0" width="25" height="25" viewBox="-200 -200 700 700">
    <g fill="black" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)">
      <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
    </g>
  </svg>
</div>
    `
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

  index({ indexName: 'events',   hitsPerPage: 10 })
    .addWidgets([
      hits({
        container: '#events-search',
        templates: {
          item:
           `
        <div class="py-4">
          <h4 class="font-semibold text-xl">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h4>
          <p class="text-sm hit-description">{{ type }}</p>
          <div class="flex flex-row justify-items-center items-center gap-4">
            <p class="text-sm hit-description">{{ location }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{ year }}</p>
          </div>
          <p class="text-sm hit-description">{{ organiser }}</p>
          <h6 class="text-sm"><span class="font-bold"><a href="mailto:{{ contact }}">{{contact}}</a></span></h6>
          </div>
           `,
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
  <div class="flex justify-start w-2/3 gap-24 items-center">
    <div id="searchbox"></div>
    <div id="facets" class="flex flex-col gap-8 justify-start my-8">
      <select bind:value={selected} 
 
      class="rounded-md h-12 w-[200px] " >
        <option value="all">All</option>
        <option value="publications-search">Publications</option>
        <option value="events-search">Events</option>
      </select>
    </div>
    <div id="paginate"></div>
  </div>


  <div hidden={selected === 'publications-search' ? false : selected === 'all' ? false : true} >
    <section class="grid  py-12 grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Publications</h3>
      </div>
      <div class="col-span-9">
        <div id="publications-search" class="-mt-2"></div>
      </div>
    </section>
  </div>

  <div hidden={selected === 'events-search' ? false : selected === 'all' ? false : true} >
    <section class="grid  py-12 grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Events</h3>
      </div>
      <div class="col-span-9">
        <div id="events-search"></div>
      </div>
    </section>
  </div>
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

  select {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 1em 0.5em 0.5em;
  border: 1px solid #eee;
  font: inherit;
  line-height: inherit;
  color:var(--color-heading);
  font-weight: 500;
  background-color: var(--color-orange);
  }
</style>