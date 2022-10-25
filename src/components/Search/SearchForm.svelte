<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let query = '';

    // This function is called when the form is submitted

    function goToSearch(e){
        e.preventDefault();
        // Reload 
        goto('/search?publications[query]=' + query);
    }
</script>

<form class="flex  justify-center items-center" >
      
    <input bind:value={query} type="text" class="w-full searchbar pl-6 pr-4 text-gray-700 font-light bg-[color:var(--color-darker-background)]  border-gray-400/0   focus:border-blue-400/0 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search our archive">
    <!-- Submit button -->
    <input type="submit" class="w-full hidden bg-gray-800 text-white rounded-md border-0 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" value="Search" on:click={goToSearch}>
        <!-- <a  rel="external" href="/search?publications[query]={query}"> -->
            <div class="bg-[color:#f1efe2] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="#3a3a3a" width="30" height="30" viewBox="-5 -5 28 28">
                  <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)">
                    <circle cx="7.11" cy="7.11" r="7.11"/>
                    <path d="M16 16l-3.87-3.87"/>
                  </g>
                </svg>
              </div>
        <!-- </a> -->
</form>