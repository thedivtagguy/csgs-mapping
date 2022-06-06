<script>
    export let event;
</script>
<a href="{event.link}" rel="external">
<div class="flex flex-col min-h-[300px] hover:shadow-lg bg-gray-100 p-8 items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
    <div class="bg-purple-500  items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
        <span>{event.type}</span>
    </div>
    <h2 class="text-lg font-bold sm:text-xl md:text-2xl">{event.title}</h2>
    <p class="pt-2 text-sm font-medium"><span class="mr-1 underline">{event.location}</span> · <span class="mx-1">{event.year}</span> </p>
    <p class="pt-2 text-sm font-medium">{event.contact} </p>
</div>
</a>