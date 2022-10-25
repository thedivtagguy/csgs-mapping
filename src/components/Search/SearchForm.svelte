<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    let query = 'women';

    async function submitForm() {
        goto(`/search?publications[query]=${query}`);
    }

    // /search?publications[query]=
  
</script>
<!-- 
<form class="flex  justify-center items-center" >
      
    <input bind:value={query} type="text" class="w-full searchbar pl-6 pr-4 text-gray-700 font-light bg-[color:var(--color-darker-background)]  border-gray-400/0   focus:border-blue-400/0 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search our archive">
    <input type="submit" class="w-full hidden bg-gray-800 text-white rounded-md border-0 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" value="Search" >
            <div class="bg-[color:#f1efe2] text-[color:var(--off-white)] w-[40px] h-[40px] m-1 p-1 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="#3a3a3a" width="30" height="30" viewBox="-5 -5 28 28">
                  <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67" transform="translate(1 1)">
                    <circle cx="7.11" cy="7.11" r="7.11"/>
                    <path d="M16 16l-3.87-3.87"/>
                  </g>
                </svg>
              </div>
</form>

<form class="" on:submit|preventDefault={submitForm}>
  <label for="email" class="label">
    <span class="sr-only">Your Email</span>
  </label>
  <input
    id="email"
    aria-label="email"
    type="text"
    name="email"
    autocomplete="email"
    placeholder="your@email.com"
    required
    bind:value={query}
  />
  <input type="submit" />
</form> -->

 <!-- <form class="" on:submit|preventDefault={submitForm}>
          <label for="email" class="label">
            <span class="sr-only">Your Email</span>
          </label>
          <input
            id="email"
            aria-label="email"
            type="text"
            name="email"
            autocomplete="email"
            placeholder="your@email.com"
            required
            bind:value={query}
          />
          <input type="submit" />
        </form> -->

<a href="/search">
  <button class="bg-[color:var(--color-darker-background)] hover:bg- border-gray-400/0    py-2 px-4 rounded inline-flex items-center">
    <span class="block uppercase py-2 pr-4 pl-3 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-[#79A5AE] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">SEARCH</span>
    <svg class="w-4 h-4 ml-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>
  </button>
</a>