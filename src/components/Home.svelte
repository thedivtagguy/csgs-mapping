<script>
import Header from "./Header.svelte";
import Menu from "./Menu.svelte";
import StackedBar from "./charts/StackedBar.svelte";
import Circles from "./charts/Circles.svelte";
import EventsSection from "./charts/EventsSection.svelte";
</script>

<!-- Iterate and show all story headings -->
<main class="">
    <Menu />
<Header />
<div class="py-12 ">
    <StackedBar/>
    <Circles />
    <StackedBar />
    <EventsSection />
  </div>
</main>
