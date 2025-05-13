<script>
import algoliasearch from 'algoliasearch/lite.js';
import instantsearch from 'instantsearch.js';
import { stats, searchBox, hits, index, pagination, configure } from 'instantsearch.js/es/widgets/index.js';
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
<div class="bg-[color:#f1efe2] hover:bg-[color:#f0f0f0] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-none">
  <svg xmlns="http://www.w3.org/2000/svg" stroke="#f0f0f0" width="30" height="30" viewBox="-5 -5 28 28">
    <g fill="none" fill-rule="evenodd" stroke="currentColor" searc stroke-width="1.67" transform="translate(1 1)">
      <circle cx="7.11" cy="7.11" r="7.11"/>
      <path d="M16 16l-3.87-3.87"/>
    </g>
  </svg>
</div>
    `,
    reset: `
    <div class="bg-[color:#f1efe2] hover:bg-[color:#f0f0f0] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-none">
  <svg xmlns="http://www.w3.org/2000/svg" stroke="#f0f0f0" width="25" height="25" viewBox="-200 -200 700 700">
    <g fill="black" fill-rule="evenodd" stroke="currentColor" searc stroke-width="1.67" transform="translate(1 1)">
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


    index({ indexName: 'organizations',   hitsPerPage: 3 })
    .addWidgets([
      hits({
        container: '#institutions-search',
        templates: {
          item:
           `
        <div class="py-4 max-w-4">
          <h4 class="font-semibold text-xl">{{ name }}</h4>
          <p class="text-sm hit-description">{{ type }}</p>
          <div class="flex flex-row justify-items-center items-center gap-4">
            <p class="text-sm hit-description">{{ region }}</p>
            <p> | </p>
            <a href={{location}}><p class="text-sm hit-description">{{ location }}</p></a>
          </div>
          <h6 class="text-sm"><span class="font-bold"><a href="mailto:{{ contact }}">{{contact}}</a></span></h6>
          <p class="text-sm hit-description break-normal ">{{#helpers.highlight}}{ "attribute": "programs" }{{/helpers.highlight}}</p>
          </div>
           `,
        },
      }),
    ]),



    index({ indexName: 'avMaterial',   hitsPerPage: 3 })
    .addWidgets([
      hits({
        container: '#av-search',
        templates: {
          item:
           `
           <div class="py-4">
          <h4 class="font-semibold text-xl">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h4>
          <p class="text-sm hit-description">{{ director }}</p>
          <div class="flex flex-row justify-items-center items-center gap-4">
            <p class="text-sm hit-description">{{ format }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{ year }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{ language }}</p>
          </div>
          <p class="text-sm hit-description">{{#helpers.highlight}}{ "attribute": "keywords" }{{/helpers.highlight}}</p>
        </div>
           `,
        },
      }),
    ]),



    
    index({ indexName: 'digitalSpaces',   hitsPerPage: 3 })
    .addWidgets([
      hits({
        container: '#digital-spaces-search',
        templates: {
          item:
           `
           <div class="py-4">
          <h4 class="font-semibold text-xl">{{name }}</h4>
          <div class="flex flex-row justify-items-center items-center gap-4">
            <p class="text-sm hit-description">{{ genre }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{ active }}</p>
            <p> | </p>
           <a href={{{link}}}> <p class="text-sm hit-description">{{ link }}</p></a>
          </div>
          <p class="font-bold text-sm"><a href="mailto:{{ contact }}">{{ contact }}</a></p>
          <p class="text-sm hit-description">{{keywords}}</p>
        </div>
           `,
        },
      }),
    ]),
    index({ indexName: 'judgements',   hitsPerPage: 3 })
    .addWidgets([
      hits({
        container: '#judgements-search',
        templates: {
          item:
           `
           <div class="py-4">
          <h4 class="font-semibold text-xl"><a href={{{link}}} target=”_blank”>{{judgement }}</h4>
          <div class="flex flex-row justify-items-center items-center gap-4">
            <p class="text-sm hit-description">{{ court }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{ year }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{keyword}}</p>
          </div>
          
        </div>
           `,
        },
      }),
    ]),
    index({ indexName: 'queer-archive',   hitsPerPage: 3 })
    .addWidgets([
      hits({
        container: '#qa-search',
        templates: {
          item:
           `
           <div class="py-4">
          <h4 class="font-semibold text-xl"><a href={{{links}}} target=”_blank”>{{title }}</h4>
          <div class="flex flex-row justify-items-center items-center gap-4">
            <p class="text-sm hit-description">{{ duration }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{ plot }}</p>
            <p> | </p>
            <p class="text-sm hit-description">{{keywords}}</p>
          </div>
          
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
  <div class="flex flex-col md:flex-row sticky top-0 bg-[color:var(--color-background)] justify-start  gap-2 md:gap-8 items-start lg:items-center">
    
    <div class="grow" id="searchbox"></div>

    <div class="flex-row justify-self-end flex justify-center items-center gap-8">
      <div id="facets" class="flex flex-col ml-auto gap-8 justify-start items-stretch my-8">
        <select bind:value={selected}
        class="rounded-none h-12 w-[200px] text-gray-700 " >
          <option value="all">All</option>
          <option value="publications-search">Publications</option>
          <option value="events-search">Events</option>
          <option value="av-search">Audio Visual Materials</option>
          <option value="institutions-search">Institutions</option>
          <option value="digital-spaces-search">Digital Spaces</option>
          <option value="judgements-search">Judgements</option>
          <option value="qa-search">Queer Performance Archive</option>
        </select>
      </div>
      <div id="paginate"></div>
    </div>
  </div>


  <div hidden={selected === 'publications-search' ? false : selected === 'all' ? false : true} >
    <section class="grid  px-10 py-12 md:grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Publications</h3>
      </div>
      <div class="col-span-9">
        <div id="publications-search" class="-mt-2"></div>
      </div>
    </section>
  </div>

  <div hidden={selected === 'events-search' ? false : selected === 'all' ? false : true} >
    <section class="grid px-10 py-12 md:grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Events</h3>
      </div>
      <div class="col-span-9">
        <div id="events-search"></div>
      </div>
    </section>
  </div>

  <div hidden={selected === 'institutions-search' ? false : selected === 'all' ? false : true} >
    <section class="grid  px-10 py-12 md:grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Institutions</h3>
      </div>
      <div class="md:col-span-9 max-w-12">
        <div id="institutions-search"></div>
      </div>
    </section>
  </div>

  <div hidden={selected === 'av-search' ? false : selected === 'all' ? false : true} >
    <section class="grid  px-10 py-12 md:grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Audio Visual Material</h3>
      </div>
      <div class="col-span-9">
        <div id="av-search"></div>
      </div>
    </section>
  </div>

  <div hidden={selected === 'digital-spaces-search' ? false : selected === 'all' ? false : true} >
    <section class="grid px-10  py-12 md:grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Digital Spaces</h3>
      </div>
      <div class="col-span-9">
        <div id="digital-spaces-search"></div>
      </div>
    </section>
  </div>
  <div hidden={selected === 'judgements-search' ? false : selected === 'all' ? false : true} >
    <section class="grid px-10  py-12 md:grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Judgements</h3>
      </div>
      <div class="col-span-9">
        <div id="judgements-search"></div>
      </div>
    </section>
  </div>
  <div hidden={selected === 'qa-search' ? false : selected === 'all' ? false : true} >
    <section class="grid px-10  py-12 md:grid-cols-12">
      <div class="col-span-3">
        <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">The Queer Performance Archive</h3>
      </div>
      <div class="col-span-9">
        <div id="qa-search"></div>
      </div>
    </section>
  </div>
</main>

<style global>
  
  .ais-SearchBox-input {
    padding: 10px;
    border: 1px solid #d5d2bf;
    border-radius: 1px;
    width: 100%;
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