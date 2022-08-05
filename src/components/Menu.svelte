<script>
  import {createUrlStore} from '$utils/url.js';
  import { getContext, setContext } from 'svelte'
  import { goto } from '$app/navigation';
    export let ssrUrl = ''
  setContext('APP', { url: createUrlStore(ssrUrl) })
  // Usage across descendants for SSR support
  const { url } = getContext('APP')
  function handleLinkClick(e) {
    e.preventDefault()
    const href = e.target.href
    history.pushState(href, '', href)
  }
    let query = '';
// On Submit, redirect to /search?publications[query]={query}
function goToSearch(e){
    e.preventDefault();
    goto('/search?publications[query]=' + query);
}
</script>
    <nav class="">
        <div class="container px-6 py-3 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <a href="https://csgs.ashoka.edu.in/">
                    <div>
                        <img rel="preload" src="/assets/logo-a.png" alt="Directory logo" width="150">
                    </div>
                </a>
                
                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button type="button" class="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="w-full md:flex md:items-center md:justify-end">
              
                <!-- {#if $url.pathname  === '/' || $url.pathname  === '#/' || $url.pathname === "/about" || $url.pathname === "/contact"} -->
                <div class="flex  justify-center items-center">
    <form class="flex  justify-center items-center" >
        
                        <input bind:value={query} type="text" class="w-full searchbar pl-10 pr-4 text-gray-700 bg-[color:var(--color-darker-background)] border rounded-md border-gray-400   focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search our archive">
                        <!-- Submit button -->
                        <input type="submit" class="w-full hidden bg-gray-800 text-white rounded-md border-0 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" value="Search" on:click={goToSearch}>
                            <a  rel="external" href="/search?publications[query]={query}">
                                <div class="bg-[color:#d5d2bf] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke="#f0f0f0" width="30" height="30" viewBox="-5 -5 28 28">
                                      <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)">
                                        <circle cx="7.11" cy="7.11" r="7.11"/>
                                        <path d="M16 16l-3.87-3.87"/>
                                      </g>
                                    </svg>
                                  </div>
                            </a>
    </form>
            </div>
              <!-- {/if} -->
              
               
                <div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                    <a  href="/" class="px-2 py-1 text-sm font-bold text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">Home</a>
                    <a  href="/contact" class="px-2 py-1 text-sm font-bold text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contact</a>
                </div>
            </div>
        </div>
    </nav>

<style>
    .searchbar {
        height: 40px;
    }
</style>