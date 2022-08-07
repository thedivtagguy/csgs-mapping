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
  
    <section class=" flex justify-center items-start flex-row h-screen">
      <div class="container px-6 text-left">
          <div class="max-w-4xl py-8">
              <p class="mt-6 px-7 text-gray-500 ">The Centre for Studies in Gender and Sexuality, Ashoka University, brings to you a one-stop resource directory on all things gender and sexuality in India
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

