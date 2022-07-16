<script>
    
    import Header from "./Header.svelte";
    import Menu from "./Menu.svelte";
    import StackedBar from "./charts/StackedBar.svelte";
    import Circles from "./charts/Circles.svelte";
    import EventsSection from "./charts/EventsSection.svelte";
    import Mapbox from "./charts/Mapbox.svelte";
    import av from "$data/avMaterial.csv";
    import publications from "$data/publications.csv";
    let genreColors =  ["#F3DF8C", "#CADEAD","#79A5AE",  "#F67C87", "#F7B289", "#D1BB80", "#D08C87", "#9597BE", "#BED6F3", "#C0AAAF","#A8DCC6", "#F3BEF1"];

</script>

<!-- Iterate and show all story headings -->
<main class="">
    <Menu />
<Header />
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
            height = {700}
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
