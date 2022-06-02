<script>
import Header from "./Header.svelte";
import Menu from "./Menu.svelte";
import StackedBar from "./charts/StackedBar.svelte";
import Circles from "./charts/Circles.svelte";
import Map from "./charts/Map.svelte";
import EventsSection from "./charts/EventsSection.svelte";
import MainButton from "./helpers/MainButton.svelte";
</script>

<!-- Iterate and show all story headings -->
<main class="">
    <Menu />
<Header />
<div class="py-12 ">
    <StackedBar/>
    <Circles />
    <EventsSection />
  </div>
</main>
