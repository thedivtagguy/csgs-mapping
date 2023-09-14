<script>
    import SearchForm from "./Search/SearchForm.svelte";

</script>



<nav class="p-3  rounded border-gray-200 ">
  <div class="container flex flex-wrap justify-between items-center pb-2 pr-6 md:pr-0 mx-auto">
    <a href="https://csgs.ashoka.edu.in/" class="flex justify-center items-center">
      <img src="/assets/CSGS logo.png" width="220" alt="Main logo image">
    </a>
    <a href="/" class="flex justify-center items-center block  py-7 pl-7 mx-auto text-2xl text-gray-700 text-bold">
      Mapping Sexuality in India
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-md md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col px-8 mt-4 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 justify-center items-center md:dark:bg-transparent dark:border-gray-700">
        <SearchForm />
        <li>
          <a href="/about" class="block uppercase py-2 pr-2 pl-2 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#79A5AE] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="/contact" class="block uppercase py-2 pr-2 pl-2 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#79A5AE] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Submit a resource</a>
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