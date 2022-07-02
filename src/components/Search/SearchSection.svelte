<script>
import algoliasearch from 'algoliasearch/lite.js';
import instantsearch from 'instantsearch.js';
import { highlight } from 'instantsearch.js/es/helpers/index.js';
import { connectHits } from 'instantsearch.js/es/connectors/index.js'
import { searchBox, hits, index } from 'instantsearch.js/es/widgets/index.js';
import {onMount} from 'svelte';
import { connectSearchBox } from 'instantsearch.js/es/connectors/index.js'
const searchClient = algoliasearch('8P43BBJQAR', '2c3f24b6adc627d1edf4a3e6879e1e62');

	
// Create a render function
const renderSearchBox = (renderOptions, isFirstRender) => {
  const { query, refine, clear, isSearchStalled, widgetParams } = renderOptions;

  if (isFirstRender) {
    const input = document.createElement('input');

    const loadingIndicator = document.createElement('span');
    loadingIndicator.textContent = 'Loading...';

    const button = document.createElement('button');
    button.innerHTML = `<svg class="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40"> <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path> </svg>`;

    button.addEventListener('click', event => {
      refine(event.target.value);
    });


    widgetParams.container.appendChild(input);
    widgetParams.container.appendChild(loadingIndicator);
    widgetParams.container.appendChild(button);
  }

  widgetParams.container.querySelector('input').value = query;
  widgetParams.container.querySelector('span').hidden = !isSearchStalled;
};

// create custom widget
const customSearchBox = connectSearchBox(
  renderSearchBox
);


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
    searchAsYouType: false,
    placeholder: 'Search our archive',
  }),

  customSearchBox({
    container: document.querySelector('#searchbox2'),
    searchAsYouType: false,

  }),
 

  hits({
    container: '#publications-search',
    templates: {
      item:
        `
        <div class="py-4">
          <h4 class="font-semibold text-2xl">{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h4>
          <div class="flex flex-row gap-6">
            <p class="text-sm hit-description">{{ genre }}</p>
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
<main>
  <section class="grid min-h-[500px] py-12 grid-cols-12">
    <div class="col-span-3">
      <div id="searchbox"></div>
      <div id="searchbox2"></div>

      <h3 class="font-sans font-bold uppercase text-2xl text-gray-800">Publications</h3>
    </div>
    <div class="col-span-9">
      <div id="publications-search"></div>
    </div>
  </section>

  <section class="grid min-h-[500px] grid-cols-12">
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
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  .ais-SearchBox-submitIcon{
    width: 45px;
  }
</style>