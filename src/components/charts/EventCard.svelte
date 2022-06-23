<script>
  export let event;
</script>

  <div
   
    class="flex rounded-md flex-col h-full hover:shadow-lg items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"  style="
    background-color: var(--color-{event.color});
"
  >
  <img class="inset-0 max-h-[200px] w-full object-cover" src="/assets/placeholder.png" alt="">
  <div class="p-8 flex justify-between flex-col">
        <h2 class="text-lg font-bold sm:text-xl md:text-lg">{event.title}</h2>
        <p class="pt-2 text-sm font-medium">
          <span class="mr-1 underline">{event.location}</span> · <span class="mx-1">{event.year}</span>
        </p>
        <p class="pt-2 text-sm font-medium">{event.contact}</p>
        <a href={event.link} rel="external"> Visit Website</a>
    </div>
  </div>
