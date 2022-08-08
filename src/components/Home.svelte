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
    let genreColors =  ["#F3DF8C", "#CADEAD", "#F67C87", "#F3BEF1", "#F7B289", "#D1BB80", "#D08C87", "#BEF3E0", "#C0AAAF", "#79A5AE", "#F4D6C5" , "#818181"];</script>

<!-- Iterate and show all story headings -->
<main class="">
    <Menu />

    <div class="container ">
        <div class="box">
          <img  width="1440" src="/assets/animation.gif" alt="animation">
        </div>
        <div class="box stack-top" >
            <Header />
        </div>
    </div>
<div class="py-2 ">
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
            facet="keywords"
        facetTwo="keyword2"
        combine={['keywords', 'keyword2', 'keyword3']}
            colorBy="format"
            colors={genreColors}
            sortBy="year"
            modalContent={{
                label: "format",
                title: "title",
                year: "year",
            }}
            direction="left"
            combineYear={false}
        />
    </section>
</div>
</main>

<style>    .container{
    width: 100%;
    height: 90vh;
    position: relative;
}

/* MObile */
@media (max-width: 768px) {
    .container{
        height: 70vh;
    }
}
.box{
    width: 100%;
    height: 100px;            
    position: absolute;
    top: 0;
/* Center */
    left: 0;
    right: 0;
    margin: auto;

}
.stack-top{
    z-index: 9;
    /* margin: 20px; for demo purpose  */
}
</style>