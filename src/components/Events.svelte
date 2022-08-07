<script>
    import Form from "./Form.svelte";
    import EventCard from "./charts/EventCard.svelte";
    import events from "$data/events.csv";
    export let upcoming = false;

     // Add new id to each event
     events.forEach((event, index) => {
        event.id = index;
    });
    let marches = {};
    let festivals = {};
    let conferences = {};

    const colors = [ 'yellow', 'green', 'orange'];

    
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

    // Assign a color randomly to each event from the array of colors
    // This is done by choosing a random index from the array of colors
    // Then using that index to select a color from the array of colors
    // Then assigning the color to the event

    marchArray.forEach(event => {
        let color = colors[0];
        event.color = color;
    });

    festivalArray.forEach(event => {
        let color = colors[1];
        event.color = color;
    });

    conferencesArray.forEach(event => {
        let color = colors[2];
        event.color = color;
    });
  
  const types = ["Pride Marches", "Literary and Film Festivals", "Conferences"];
</script>

<!-- Iterate and show all story headings -->
<main class="py-12 px-8 md:px-0">
    {#if upcoming}
    <div class="col-span-3 py-6">
        <h3 class="text-4xl uppercase font-sans font-bold">Upcoming Events</h3>
      </div>
    <div class="main flex flex-row md:flex">
        {#each events as event}
        {#if event.upcoming == "TRUE"}

        <div class="md:portfolio_item portfolio_item -ml-4 p-4">
           <EventCard event={event}
              />
        </div>
        {/if}
        {/each}
     </div>
     <div class="flex justify-end">
         <a href="/events">
            <button class="bg-[color:var(--color-turquoise)] mx-4 hover:bg-[color:var(--color-green)] text-black font-bold py-2 px-4 " onclick="search.start()">
              See All Events
            </button>
          </a>
     </div>
    {/if}
    {#if !upcoming}
    <h1 class="text-5xl uppercase font-bold text-left">All Events</h1>
     <!-- Divider -->
        <div class="w-full my-6 border-b-2 border-gray-400"></div>
    {#each types as type}
    <h2 class="text-4xl uppercase font-bold text-left">{type}</h2>
    <!-- Show all events in a flex grid -->
    <div class="main grid grid-cols-1 md:grid-cols-4">
        {#each events as event}
        {#if event.type == type}
        <div class="-ml-4 p-4">
           <EventCard event={event}
              />
        </div>
        {/if}
        {/each}
        
     </div>
     <div class="w-full my-6 border-b-2 border-gray-400"></div>

     {/each}
    
    {/if}
     
</main>
<style>
    .portfolio_item {  
    min-width: 25%;
    width:30%;
    }

    /* Media query */
    @media only screen and (max-width: 600px) {
        .portfolio_item {  
    min-width: 100%;
    }
}

    .flex {
    display: flex;
    display: -webkit-flex;
    }

    .main {
        overflow-x: auto;
    }
</style>