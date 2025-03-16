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
  
    <section class=" flex justify-left items-start flex-row md:h-auto">
        <div class="md:px-40 text-left">
          
            <div class="max-w-7xl md:py-0">
                <p class="md:mt-2 px-6 py-6 text-xl font-light text-gray-700 ">The Centre for Studies in Gender and Sexuality, Ashoka University, brings to you a one-stop resource directory on all things gender and sexuality in India
                </p>
            </div>      
    
          <div >
            <div class="flex flex-wrap justify-start items-start gap-4 w-full">
              <div class="relative ml-[10px] mt-[0px]">
                <MainButton label={pages[0].title} link={pages[0].url} />
              </div>
              <div class="relative ml-[35px] mt-[15px]">
                <MainButton2 label={pages[1].title} link={pages[1].url} />
              </div>
              <div class="relative ml-[25px] mt-[-18px]">
                <MainButton3 label={pages[2].title} link={pages[2].url} />
              </div>
              <div class="relative ml-[-20px] mt-[25px]">
                <MainButton2 label={pages[3].title} link={pages[3].url} />
              </div>
              <div class="relative ml-[8px] mt-[-12px]">
                <MainButton3 label={pages[4].title} link={pages[4].url} />
              </div>
              <div class="relative ml-[40px] mt-[25px]">
                <MainButton label={pages[5].title} link={pages[5].url} />
              </div>
            </div>
          </div>
      </div>
    
    </section>
</div>

<style>

.container{
  
  overflow-y: visible;
}

</style>

