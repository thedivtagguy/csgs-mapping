<script>
    import places from "$data/indices/organizations-geocoded.csv.json";
    export let region;

    // Filter the organizations by region
    const organizations = places.filter(place => place.region === region);

</script>

<main>
    <!-- Display organization list -->
    <section class="flex">
        <div class="w-1/2">
            <h2 class="text-2xl font-bold mb-4">Organizations</h2>
            <ul class="list-disc list-inside">
                {#each organizations as organization}
                <li class="mb-4">
                    <a href="{organization.url}" target="_blank" class="text-blue-500 hover:text-blue-700">{organization.name}</a>
                </li>
                {/each}
            </ul>
        </div>
        <div class="w-1/2">
            <h2 class="text-2xl font-bold mb-4">Events</h2>
            <ul class="list-disc list-inside">
                {#each organizations as organization}
                <li class="mb-4">
                    <a href="{organization.url}" target="_blank" class="text-blue-500 hover:text-blue-700">{organization.name}</a>
                </li>
                {/each}
            </ul>
        </div>
</main>