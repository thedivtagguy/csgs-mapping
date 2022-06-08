<script>
  import MainButton from "./helpers/MainButton.svelte";
  let pages = ['Institutions', 'Events', 'Publications', 'Digital Spaces'];
</script>


<section class="bg-white flex justify-center items-center flex-col py-16 h-screen">
  <div class="container px-6 mx-auto text-center">
      <div class="max-w-lg mx-auto">
          <h1 class="text-3xl font-bold text-gray-800  md:text-4xl">CSGS Resource Directory Mapping</h1>
          <p class="mt-6 text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
              obcaecati illum mollitia.</p>
      </div>      
  </div>

  <div class="container px-8 mx-auto sm:px-12 lg:px-20">
      <div class="grid items-center justify-center grid-cols-12 py-12  gap-y-8">
        {#each pages as page}
          <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-3">
            <MainButton label={page} />
          </div>
        {/each}
        </div>
  </div>

</section>