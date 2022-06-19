<script>
import Header from "./Header.svelte";
import Menu from "./Menu.svelte";
import StackedBar from "./charts/StackedBar.svelte";
import Circles from "./charts/Circles.svelte";
import EventsSection from "./charts/EventsSection.svelte";
import Mapbox from "./charts/Mapbox.svelte";
import SearchSection from "./Search/SearchSection.svelte";
import av from "$data/avMaterial.csv";
import publications from "$data/publications.csv";
let genreColors =  ["#Fac937", "#1d7485", "#88ab46", "#99262a", "#381b37", "#Ac4447", "#993300", "#818181", "#0E8587"];
</script>



<!-- Iterate and show all story headings -->
<main class="">
    <Menu />
<Header />
<div class="py-12 ">
    <Mapbox />
    <StackedBar 
        id="av" 
        title="Audio Visual Material"
        dataset={av}
        facet="format"
        colors={genreColors}
        sortBy="year"
    />
    <Circles />
    <StackedBar 
        id="publications" 
        title="Publications" 
        width={950} 
        dataset={publications} 
        facet="genre" 
        colors={genreColors}
        sortBy="year"
    />
    <EventsSection />
    <SearchSection />
</div>
</main>
