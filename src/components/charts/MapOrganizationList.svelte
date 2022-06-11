<script>
    import places from "$data/indices/organizations-geocoded.csv.json";
    export let region;    

    // Filter the organizations by region
    $: organizations = places.filter(place => place.region === region.region);

</script>

<main class="w-full">
    <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold leading-none text-gray-900 ">Organizations
            {#if region}
                in {region.region}
            {/if}

        </h3>
   </div>
    <section class="flex w-full h-[250px] overflow-y-auto">
        <!-- component -->
<!-- This is an example component -->

<div class="w-full mx-auto">

	<div class="p-4 w-full bg-gray-100 rounded-lg border shadow-md sm:p-8 ">
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 ">
            {#if organizations}
            {#each organizations as organization, i}

            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            {organization.name}
                        </p>
                        
                    </div>
                </div>
            </li>
            {/each}
           {/if}
        </ul>
   </div>
</div>

</div>
</section>
</main>