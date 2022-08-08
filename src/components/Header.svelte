<script>
  import MainButton from "./helpers/MainButton.svelte";

  let pages = [
    {
      title: "Institutions",
      url: "#map",
    },
    {
      title: "Publications",
      url: "#publications",
    },
    {
      title: "Events",
      url: "#events",
    },
    {
      title: "Digital Spaces",
      url: "#digital-spaces",
    },
    {
      title: "Audio Visual Material",
      url: "#av-material",
    },
  
  ];
</script>

<div class="container">
  
    <section class=" flex justify-left items-start flex-row md:h-screen">
      <div class="container md:px-0 text-left">
          <div class="max-w-7xl md:py-3">
              <p class="md:mt-6 px-6 text-lg font-light text-gray-700 ">The Centre for Studies in Gender and Sexuality, Ashoka University, brings to you a one-stop resource directory on all things gender and sexuality in India
              </p>
          </div>      
    
      <div >
          <div class="flex flex-col justify-start items-start ">
            {#each pages as page}
              <div class="flex items-center justify-center">
                <MainButton label={page.title} link={page.url}/>
              </div>
            {/each}
            </div>
      </div>
    
    </section>
</div>

