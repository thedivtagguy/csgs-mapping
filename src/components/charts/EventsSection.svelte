<script>
    import events from "$data/events.csv";
import EventCard from "./EventCard.svelte";
    // Add new id to each event
    events.forEach((event, index) => {
        event.id = index;
    });
    let marches = {};
    let festivals = {};
    let conferences = {};
    $: choice = "";
    
    // Read in events and look for the type column. If type is march, add that row to the march object
    // If type is festival, add that row to the festival object
    // If type is conference, add that row to the conference object
    events.forEach(event => {
        if (event.type === "Pride Marches") {
            marches[event.id] = event;
        } else if (event.type === "Literary and Film Festivals") {
            festivals[event.id] = event;
        } else if (event.type === "Conferences") {
            conferences[event.id] = event;
        } 
    });

    // Convert march, festival and concert objects to arrays
    let marchArray = Object.values(marches);
    let festivalArray = Object.values(festivals);
    let conferencesArray = Object.values(conferences);

</script>

    
<section class="relative py-20 overflow-hidden ">
    <span class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span class="container hidden w-screen h-16 max-w-xs mt-24 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
    </span>
    <span class="absolute bottom-0 left-0"> </span>
    <div class="relative px-8 mx-auto max-w-7xl">
        <h2 class="relative font-bold max-w-lg mt-5 mb-10 text-4xl leading-tight lg:text-5xl">Pride Marches</h2>
    </div>

    <div class="main flex">
        {#each marchArray as event}
        <div class="portfolio_item p-8">
            <EventCard event={event} />
        </div>
       {/each}
    </div>
</section>

    
<section class="relative py-20 overflow-hidden ">
    <span class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span class="container hidden w-screen h-16 max-w-xs mt-24 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-green-50"></span>
    </span>
    <span class="absolute bottom-0 left-0"> </span>
    <div class="relative px-8 mx-auto max-w-7xl">
        <h2 class="relative font-bold max-w-lg mt-5 mb-10 text-4xl leading-tight lg:text-5xl">Festivals</h2>
    </div>

    <div class="main flex">
        {#each festivalArray as event}
        <div class="portfolio_item p-8">
            <EventCard event={event} />
        </div>
       {/each}
    </div>
</section>

<section class="relative py-20 overflow-hidden ">
    <span class="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span class="container hidden w-screen h-16 max-w-xs mt-24 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-red-50"></span>
    </span>
    <span class="absolute bottom-0 left-0"> </span>
    <div class="relative px-8 mx-auto max-w-7xl">
        <h2 class="relative font-bold max-w-lg mt-5 mb-10 text-4xl leading-tight lg:text-5xl">Conferences</h2>
    </div>

    <div class="main flex">
        {#each conferencesArray as event}
        <div class="portfolio_item p-8">
            <EventCard event={event} />
        </div>
       {/each}
    </div>
</section>

<style>
        .main {
        flex-direction: row;
        -webkit-flex-direction: row;
        overflow-x: scroll;
        width: 100%;

        }

        .portfolio_item {  
        min-width: 30%;
        width:50%;
        }

        .flex {
        display: flex;
        display: -webkit-flex;
        }
</style>