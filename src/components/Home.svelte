<script>
  import  { onMount } from "svelte";
  let toRender = false;

  onMount(() => {
    toRender = true;
  });
    import Header from "./Header.svelte";
    import Menu from "./Menu.svelte";
    import StackedBar from "./charts/StackedBar.svelte";
    import Circles from "./charts/Circles.svelte";
    import Mapbox from "./charts/Mapbox.svelte";
    import av from "$data/avMaterial.csv";
    import publications from "$data/publications.csv";
    import Events from './Events.svelte';
    import Judgements from "./charts/Judgements copy.svelte";
    import judge from "$data/judgements.csv";
    import QA from "./charts/qa.svelte";
    let genreColors =  ["#F3DF8C", "#C2DF97", "#F67C87", "#F3BEF1", "#F7B289", "#D1BB80", "#D08C87", "#A8DCC6", "#C0AAAF", "#79A5AE", "#F8CAB0" , "#818181"];</script>

<!-- Iterate and show all story headings -->
<main class="">
    <Menu />

    <div class="container">
        
        <div class="box stack-top" >
            <Header />
        </div>
    </div>

    <section id="judgements">
        <Judgements 
        id = "judge"
        modalContent={{
            label: "court",
            title: "judgement",
            year: "year",
            asset: "asset", 
            link: "link",
            
            
        }}
        
        title="judgments"
        dataset={judge}
        />
    </section>
    
    <section id = "qa">
       <QA
        modalContent={{
            label: "keywords",
            title: "title",
           
            link: "link",
            plot: "plot",
            rationale: "rationale",
        }}
       />
    </section>
      <section id="resources" class="px-6 py-16">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

    <!-- Column 1: Title and text -->
    <div>
      <h2 class="text-4xl font-bold mb-6">
        Resources
      </h2>
      <p class="text-lg leading-relaxed text-gray-600">
        Add your text here. This section can introduce the resources,
        explain what they contain, or guide visitors on how to use them.
      </p>
    </div>

    <!-- Column 2: Image placeholder -->
    <div class="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
      <span class="text-gray-500">Image placeholder</span>
    </div>

  </div>
</section>



<section class="px-6 py-16">
  <div class="flex flex-row gap-2 h-[380px] w-full">

    <div class="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out rounded-2xl bg-[#F3DF8C] overflow-hidden cursor-pointer">
      <span class="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] text-gray-800 text-lg font-medium whitespace-nowrap transition-all duration-300">
        Post 2010
      </span>
    </div>

    <div class="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out rounded-2xl bg-[#C2DF97] overflow-hidden cursor-pointer">
      <span class="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] text-gray-800 text-lg font-medium whitespace-nowrap transition-all duration-300">
        2000–2009
      </span>
    </div>

    <div class="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out rounded-2xl bg-[#F67C87] overflow-hidden cursor-pointer">
      <span class="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] text-gray-800 text-lg font-medium whitespace-nowrap transition-all duration-300">
        1991–1999
      </span>
    </div>

    <div class="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out rounded-2xl bg-[#F3BEF1] overflow-hidden cursor-pointer">
      <span class="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] text-gray-800 text-lg font-medium whitespace-nowrap transition-all duration-300">
        1981–1990
      </span>
    </div>

    <div class="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out rounded-2xl bg-[#F7B289] overflow-hidden cursor-pointer">
      <span class="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] text-gray-800 text-lg font-medium whitespace-nowrap transition-all duration-300">
        1971–1980
      </span>
    </div>

    <div class="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out rounded-2xl bg-[#D1BB80] overflow-hidden cursor-pointer">
      <span class="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] text-gray-800 text-lg font-medium whitespace-nowrap transition-all duration-300">
        1961–1970
      </span>
    </div>

    <div class="group relative flex-1 hover:flex-[5] transition-all duration-500 ease-in-out rounded-2xl bg-[#D08C87] overflow-hidden cursor-pointer">
      <span class="absolute inset-0 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] text-gray-800 text-lg font-medium whitespace-nowrap transition-all duration-300">
        1951–1960
      </span>
    </div>

  </div>
</section>


<div class="pt-2 sm:py-2 ">

 
    <!-- <section id="map">
        <Mapbox />
    </section>
    <section id="publications">
        <StackedBar
        id="publications"
        title="Publications"
        width={950}
        colorBy="genre"
        dataset={publications}
        facet="keyword"
        facetTwo="keyword2"
        combine={['keyword', 'keyword2', 'keyword3']}
        colors={genreColors}
        sortBy="year"
        modalContent={{
            label: "genre",
            title: "title",
            link: "link",
            
        }}
         combineYear={true}
        />
    </section>
    <section id="events">
        <Events upcoming = {true}/>
    </section>
    <section id="digital-spaces">
        <Circles
        
        modalContent={{
            label: "genre",
            title: "name",
            year: "active",
            link: "link",
            contact: "contact",
        }}
        />
    </section>
    <section id="av-material">
        <StackedBar
            id="av"
            title="Audio Visual Material"
            dataset={av}
            facet="keyword"
        facetTwo="keyword2"
        combine={['keyword', 'keyword2', 'keyword3']}
            colorBy="format"
            colors={genreColors}
            sortBy="year"
            modalContent={{
                label: "format",
                title: "title",
                year: "year",
                link: "link",
            }}
            direction="left"
            combineYear={false}
        />
    </section> -->
    
</div>
</main>

<style>    

#map{
    position:relative;
    z-index: 9;
}
.container{
    width: 100%;
    
    height: 60vh;
    position: relative;
    
    
}

/* MObile */


@media (max-width: 768px) {
    .container{
        height: 80vh;
        z-index: 0;
    }
    
}

.box{
    width: 100%;
    height: 75vh;            
    position: absolute;
    top: 0;
/* Center */
    left: 0;
    right: 0;
    margin: auto;
    

}
.stack-top{
    z-index: 2;
    overflow-y: auto;
    /* margin: 20px; for demo purpose  */
}
</style>