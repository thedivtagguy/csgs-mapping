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
    let genreColors =  ["#F3DF8C", "#C2DF97", "#F67C87", "#F3BEF1", "#F7B289", "#D1BB80", "#D08C87", "#A8DCC6", "#C0AAAF", "#79A5AE", "#F8CAB0" , "#818181"];</script>

<!-- Iterate and show all story headings -->
<main class="">
    <Menu />

    <div class="container">
        
        <div class="box stack-top" >
            <Header />
        </div>
        
    </div>
    <section id = "qa">
        <img src = "./assets/Banner.svg" alt = "Queer Archive Banner">
    </section>
<div class="pt-2 sm:py-2 ">
    <section id="map">
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
            year: "year",
            
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
    </section>
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
</div>
</main>

<style>    

#map{
    position:relative;
    z-index: 9;
}
.container{
    width: 100%;
    
    height: 90vh;
    position: relative;
    
    
}

/* MObile */


@media (max-width: 768px) {
    .container{
        height: 90vh;
        z-index: 0;
    }
    video {
    -moz-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    -ms-transform:rotate(-90deg);
    transform: rotate(-90deg) scale(1.5, 1.5) translate(-18vh, 0px) ;
    position: relative; 
    z-index: 0;
    
    
}
}

.box{
    width: 100%;
    height: 80vh;            
    position: absolute;
    top: 0;
/* Center */
    left: 0;
    right: 0;
    margin: auto;
    

}
.stack-top{
    z-index: 9;
    overflow-y: auto;
    /* margin: 20px; for demo purpose  */
}
</style>