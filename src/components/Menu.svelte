<script>
    import { goto } from '$app/navigation';

    let query = '';

    function goToSearch(e){
        e.preventDefault();
        goto('/search?publications[query]=' + query);
    }
</script>
 

<nav class="px-8 border-gray-200 my-8 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CSGS Resources</span>
    </a>
    <div class="flex md:order-2">
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Search</span>
      </button>
      <div class="hidden relative md:block">
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
      <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
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
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="/contact" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
<style>
    .searchbar {
        height: 40px;
    }
</style>