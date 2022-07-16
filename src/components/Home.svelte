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
let genreColors =  ["#F3DF8C", "#79A5AE", "#CADEAD", "#F67C87", "#F3BEF1", "#F7B289", "#D1BB80", "#D08C87", "#BEF3E0", "#BED6F3", "#0E8587","#818181"];
</script>

<!-- Iterate and show all story headings -->
<main class="">
    <Menu />

    <div class="container my-12">
        <div class="box">
          <img  width="1200" src="/assets/animation.gif" alt="animation">
        </div>
        <div class="box stack-top" >
            <Header />
        </div>
    </div>



<div class="py-12 ">
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
        colors={genreColors}
        sortBy="year"
        modalContent={{
            label: "genre",
            title: "title",
            year: "year",
        }}
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
            facet="format"
            colorBy="format"
            colors={genreColors}
            sortBy="year"
            modalContent={{
                label: "format",
                title: "title",
                year: "year",
            }}
            direction="left"
        />
    </section>
</div>
</main>

<style>    .container{
    width: 100%;
    height: 100vh;
    position: relative;
    margin: 20px;
}
.box{
    width: 100%;
    height: 100%;            
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;  /* for demo purpose  */
}
.stack-top{
    z-index: 9;
    margin: 20px; /* for demo purpose  */
}
</style>