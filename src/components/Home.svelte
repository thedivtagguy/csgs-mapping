<script>
      import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  import  { onMount } from "svelte";
  let toRender = false;

  onMount(() => {
    toRender = true;
  });
    import Header from "./Header.svelte";
    import Menu from "./Menu.svelte";
    import StackedBar from "./charts/StackedBar.svelte";
    import Circles from "./charts/Circles.svelte";
    import EventsSection from "./charts/EventsSection.svelte";
    import Mapbox from "./charts/Mapbox.svelte";
    import av from "$data/avMaterial.csv";
    import publications from "$data/publications.csv";
    let genreColors =  ["#Fac937", "#1d7485", "#88ab46", "#99262a", "#381b37", "#Ac4447", "#993300", "#818181", "#0E8587"];

</script>

<!-- Iterate and show all story headings -->
<main class="">

    <div class="container my-12">
        <div class="box">
            {#if toRender}
            <LottiePlayer
            src="https://assets1.lottiefiles.com/packages/lf20_szjmvam9.json"
            autoplay="{true}"
            loop="{true}"
            renderer="svg"
            background="transparent"
            height="{800}"
            width="{1250}"
          />
          {/if}
        </div>
        <div class="box stack-top" >

            <Menu />
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
            title: "title"
        }}
        />
    </section>
    <section id="digital-spaces">
        <Circles />
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
                title: "title"
            }}
        />
    </section>
    <section id="events">
        <EventsSection preview = {true}/>
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