<script>
  export let event;
</script>

  <div
   
    class="flex rounded-md flex-col  h-full hover:shadow-lg items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"  style="
    background-color: var(--color-{event.color});
"
  >
  <div class="p-6 flex justify-around flex-col">
        <h2 class="text-lg font-extrabold ">{event.title}</h2>
        <p class="pt-2 text-sm">
          <span class="mr-1 ">{event.location}</span> · <span class="mx-1">{event.year}</span>
        </p>
        <p class="pt-2 text-sm ">{event.contact}</p>
        <a href={event.link} class="text-sm font-bold hover:underline py-2" rel="external"> Visit Website</a>
    </div>
  </div>
