<script>
  export let event;
</script>

  <div
   
    class="flex rounded-sm flex-col  h-full hover:shadow-lg items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"  style="
    background-color: var(--color-{event.color});
"
  >
  <div class="p-6 flex justify-around flex-col text-gray-700">
        <h2 class="text-lg font-semibold ">{event.title}</h2>
        <p class="pt-2 text-sm">
          <span class="mr-1 ">{event.location}</span> · <span class="mx-1">From {event.year} onwards</span>
        </p>
        <p class="pt-2 text-sm ">{event.contact}</p>
        <a href={event.link} class="pt-4 text-sm font-bold hover:text-blue-400" rel="external"> Visit </a>
    </div>
  </div>
