<script>
    import events from "$data/events.csv";
    import EventCard from "./EventCard.svelte";
    export let preview = false;
    // Add new id to each event
    events.forEach((event, index) => {
        event.id = index;
    });
    let marches = {};
    let festivals = {};
    let conferences = {};
    import { Tabs, TabList, TabPanel, Tab } from '$components/Tabs/tabs.js';

    const colors = ['red', 'turquoise', 'yellow', 'green', 'pink', 'orange', 'aqua'];

    
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
        let color = colors[Math.floor(Math.random() * colors.length)];
        event.color = color;
    });

    festivalArray.forEach(event => {
        let color = colors[Math.floor(Math.random() * colors.length)];
        event.color = color;
    });

    conferencesArray.forEach(event => {
        let color = colors[Math.floor(Math.random() * colors.length)];
        event.color = color;
    });
    if(preview) {
    // Sort by date and keep only the first 4
      marchArray.sort((a, b) => new Date(a.date) - new Date(b.date));
      marchArray = marchArray.slice(0, 4);
      festivalArray.sort((a, b) => new Date(a.date) - new Date(b.date));
      festivalArray = festivalArray.slice(0, 4);
      conferencesArray.sort((a, b) => new Date(a.date) - new Date(b.date));
      conferencesArray = conferencesArray.slice(0, 4);
    }

</script><main class="py-24">
    <h1 class="text-4xl uppercase font-bold">Upcoming Events</h1>
 
    <Tabs>
        <TabList>
           <Tab>Marches</Tab>
           <Tab>Festivals</Tab>
           <Tab>Conferences</Tab>
        </TabList>
        <TabPanel>
           <section class="relative overflow-hidden ">
              <span class="absolute bottom-0 left-0"> </span>
              <!-- <div class="relative mx-auto max-w-7xl">
                 <h2 class="relative font-bold max-w-lg mt-5  text-4xl leading-tight lg:text-5xl">Pride Marches</h2>
              </div> -->
              <div class="main flex">
                 {#each marchArray as event, i}
                 <div class="portfolio_item -ml-4 p-4">
                    <EventCard event={event}
                       />
                 </div>
                 {/each}
              </div>
           </section>
        </TabPanel>
        <TabPanel>
            <section class="relative overflow-hidden ">
                <span class="absolute bottom-0 left-0"> </span>
                <!-- <div class="relative mx-auto max-w-7xl">
                   <h2 class="relative font-bold max-w-lg mt-5  text-4xl leading-tight lg:text-5xl">Festivals</h2>
                </div> -->
                <div class="main flex">
                   {#each festivalArray as event, i}
                   <div class="portfolio_item -ml-4 p-4">
                      <EventCard event={event}
                         />
                   </div>
                   {/each}
                </div>
             </section>
        </TabPanel>
        <TabPanel>
            <section class="relative overflow-hidden ">
                <span class="absolute bottom-0 left-0"> </span>
                <!-- <div class="relative mx-auto max-w-7xl">
                   <h2 class="relative font-bold max-w-lg mt-5  text-4xl leading-tight lg:text-5xl">Conferences</h2>
                </div> -->
                <div class="main flex">
                   {#each conferencesArray as event, i}
                   <div class="portfolio_item -ml-4 p-4">
                      <EventCard event={event}
                         />
                   </div>
                   {/each}
                </div>
             </section>
        </TabPanel>
     </Tabs>
</main>
 
<style>
        .main {
        flex-direction: col;
        width: 100%;

        }

        .portfolio_item {  
        min-width: 25%;
        width:30%;
        }

        .flex {
        display: flex;
        display: -webkit-flex;
        }
</style>