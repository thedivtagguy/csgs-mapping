<script>
  import MainButton from "./helpers/MainButton.svelte";
  import MainButton2 from "./helpers/MainButton2.svelte";
  import MainButton3 from "./helpers/MainButton3.svelte";

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
        <div class="container md:px-40 text-left">
          
            <div class="max-w-7xl md:py-0">
                <p class="md:mt-2 px-6 py-2 text-xl font-light text-gray-700 ">The Centre for Studies in Gender and Sexuality, Ashoka University, brings to you a one-stop resource directory on all things gender and sexuality in India
                </p>
            </div>      
    
          <div >
            <div class="flex flex-cols-2 gap-x-4 md:gap-y-6 sm:gap-1 flex-wrap justify-start items-start md:py-6 h-max ">
              
                <MainButton label={pages[0].title} link={pages[0].url}/>
                <MainButton2 label={pages[1].title} link={pages[1].url}/>
                <MainButton3 label={pages[2].title} link={pages[2].url}/>
                <MainButton2 label={pages[3].title} link={pages[3].url}/>
                <MainButton label={pages[4].title} link={pages[4].url}/>
                <MainButton3 label={pages[5].title} link={pages[5].url}/>
            </div>
          </div>
      </div>
    
    </section>
</div>

