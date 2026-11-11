<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">

<script>
  import MainButton from "./helpers/MainButton.svelte";
  import MainButton2 from "./helpers/MainButton2.svelte";
  import MainButton3 from "./helpers/MainButton3.svelte";

  let pages = [
    {
      title: "Institutions",
      url: "#map",
    },
    {
      title: "Publications",
      url: "#publications",
    },
    {
      title: "Events",
      url: "#events",
    },
    {
      title: "Judgments",
      url: "#judgements",
    },
    {
      title: "Queer Performance Archive",
      url: "#qa",
    },

    {
      title: "Resources",
      url: "#map",
    },
  
  ];
  </script>

<div class="container" style="z-index: 50;">
  <section class="flex flex-col md:flex-row justify-between items-center gap-2 md:px-20">

    <!-- Left: Introductory text -->
    <div class="w-full md:w-1/2 text-left">
      <div class="max-w-7xl">
        <p class="md:mt-2 px-6 py-2 font-serif text-4xl font-normal leading-[1.25] text-gray-600">
  A <span class="bg-yellow-300 text-gray-800 px-1">one-stop resource directory</span> on all things gender and sexuality in India
</p>
      </div>
    </div>

    <!-- Right: Stacked buttons -->
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 px-6 py-2">

      <div class="relative">
        <MainButton label={pages[3].title} link={pages[3].url} />
      </div>

      <div class="relative">
        <MainButton2 label={pages[4].title} link={pages[4].url} />
      </div>

      <div class="relative">
        <MainButton3 label={pages[5].title} link={pages[5].url} />
      </div>

    </div>

  </section>
</div>

<style>
.container {
  overflow-y:  visible;
}
</style>

