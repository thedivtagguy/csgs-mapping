<script>
  import MainButton from "./helpers/MainButton.svelte";
  let pages = ['Institutions', 'Events', 'Publications', 'Digital Spaces'];
</script>


<section class=" flex justify-center items-start flex-row h-screen">
  <div class="container px-6 text-left">
      <div class="max-w-4xl py-12">
          <p class="mt-6 px-6 text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
            obcaecati illum mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
            obcaecati illum mollitia.</p>
      </div>      

  <div >
      <div class="flex flex-col justify-start items-start ">
        {#each pages as page}
          <div class="flex items-center justify-center">
            <MainButton label={page} />
          </div>
        {/each}
        </div>
  </div>

</section>