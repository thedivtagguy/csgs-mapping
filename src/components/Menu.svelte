<script>
    import { goto } from '$app/navigation';

    let query = '';

    function goToSearch(e){
        e.preventDefault();
        goto('/search?publications[query]=' + query);
    }
</script>
 


<nav class="p-3  rounded border-gray-200 ">
  <div class="container flex flex-wrap justify-between items-center pr-8 md:pr-0 mx-auto">
    <a href="/" class="flex justify-center items-center">
      <img src="/assets/logo.png" width="160" alt="Main logo image">
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col px-8 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 justify-center items-center md:dark:bg-transparent dark:border-gray-700">
        <form class="flex  justify-center items-center" >
      
          <input bind:value={query} type="text" class="w-full searchbar pl-6 pr-4 text-gray-700 font-light bg-[color:var(--color-darker-background)]  border-gray-400/0   focus:border-blue-400/0 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search our archive">
          <!-- Submit button -->
          <input type="submit" class="w-full hidden bg-gray-800 text-white rounded-md border-0 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" value="Search" on:click={goToSearch}>
              <a  rel="external" href="/search?publications[query]={query}">
                  <div class="bg-[color:#f1efe2] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" stroke="#3a3a3a" width="30" height="30" viewBox="-5 -5 28 28">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)">
                          <circle cx="7.11" cy="7.11" r="7.11"/>
                          <path d="M16 16l-3.87-3.87"/>
                        </g>
                      </svg>
                    </div>
              </a>
</form>
        <li>
          <a href="/about" class="block uppercase py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#79A5AE] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="/contact" class="block uppercase py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#79A5AE] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Submit a resource</a>
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