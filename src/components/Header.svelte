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
  
  ];
  </script>

<div class="container">
  
    <section class=" flex justify-left items-start flex-row md:h-screen">
        <div class="container md:px-20 text-left">
          
            <div class="max-w-7xl md:py-1">
                <p class="md:mt-2 px-6 py-1 text-xl font-light text-gray-700 ">The Centre for Studies in Gender and Sexuality, Ashoka University, brings to you a one-stop resource directory on all things gender and sexuality in India
                </p>
            </div>      
    
          <div >
            <div class="flex flex-col justify-start items-start ">
              
                <MainButton label={pages[0].title} link={pages[0].url}/>
                <MainButton2 label={pages[1].title} link={pages[1].url}/>
                <MainButton3 label={pages[2].title} link={pages[2].url}/>
                <MainButton2 label={pages[3].title} link={pages[3].url}/>
                <MainButton3 label={pages[4].title} link={pages[4].url}/>
            </div>
          </div>
      </div>
    
    </section>
</div>

