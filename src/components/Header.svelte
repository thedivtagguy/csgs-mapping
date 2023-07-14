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
    {
      title: "Judgments",
      url: "#judgements",
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
    
<<<<<<< Updated upstream
      <div >
          <div class="flex flex-col justify-start items-start ">
            {#each pages as page}
              <div class="flex items-center justify-center">
                <MainButton label={page.title} link={page.url}/>
              </div>
            {/each}
            </div>
=======
          <div >
            <div class="flex flex-col justify-start items-start md:py-4 grid grid-cols-2 gap-4">
              
                <MainButton label={pages[0].title} link={pages[0].url}/>
                <MainButton2 label={pages[1].title} link={pages[1].url}/>
                <MainButton3 label={pages[2].title} link={pages[2].url}/>
                
            
              
              <MainButton2 label={pages[3].title} link={pages[3].url}/>
              <MainButton3 label={pages[4].title} link={pages[4].url}/>
              <MainButton3 label={pages[5].title} link={pages[5].url}/>
          </div>
          </div>
>>>>>>> Stashed changes
      </div>
    
    </section>
</div>

