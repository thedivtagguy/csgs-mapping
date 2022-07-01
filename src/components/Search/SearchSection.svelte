<script>
import algoliasearch from 'algoliasearch/lite.js';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, index } from 'instantsearch.js/es/widgets/index.js';
import {onMount} from 'svelte';

const searchClient = algoliasearch('8P43BBJQAR', '2c3f24b6adc627d1edf4a3e6879e1e62');


// Add onMount 
onMount(() => {
  const search = instantsearch({
  indexName: 'publications',
  searchClient,
  routing: true,
});

search.addWidgets([
  searchBox({
    container: '#searchbox',
  }),

  hits({
    container: '#publications-search',
    templates: {
      item:
        '{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}',
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
<div class="ais-InstantSearch">
  <h1>InstantSearch.js e-commerce demo</h1>

  <div class="right-panel">
    <div id="searchbox"></div>
    <div id="publications-search"></div>
    <div id="events-search"></div>
    <div id="hits"></div>
    <div id="pagination"></div>
  </div>
</div>
