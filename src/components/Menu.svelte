<script>
    import { onMount } from 'svelte';
    let query = '';
    const executeSearch = (query) => {
        // URL to go to: /search?publications[query]=queryToSearch
        const url = `/search?publications[query]=${queryToSearch}`;
        // Redirect to the url
        window.location.href = url;
    }
    onMount(() => {
        // When button is clicked, execute the search
        // When input is submitted, execute the search

    })

</script>
    <nav class="">
        <div class="container px-6 py-3 mx-auto md:flex">
            <div class="flex items-center justify-between">
                <a href="/">
                    <div>
                        <img src="./assets/csgs-logo.png" alt="CSGS logo" width="100">
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
              
               
                <div class="relative">
                    
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                    <form>

                        <input bind:value={query} type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-[color:var(--color-darker-background)] border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search">
                        <!-- Submit button -->
                        <a href="/search?publications[query]=${query}">Search</a>
                    </form>
                </div>
                <div class="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                    <a href="/" class="px-2 py-1 text-sm font-bold text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">Home</a>
                    <a href="/contact" class="px-2 py-1 text-sm font-bold text-gray-700 transition-colors duration-200 transform rounded  hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contact</a>
                </div>
            </div>
        </div>
    </nav>