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
 <p class="md:mt-2 px-6 py-2 font-serif text-sm font-normal leading-[1.25] text-gray-600">
  The CSGS compiled an urgently needed archive on gender and sexuality studies in India called Mapping Sexuality in India in 2019, under the aegis of The Andrew Mellon Grant. This archive is a curated collection of major institutions, organisations, performances, judgements and individuals in the country working in these fields. Through such data visualisation, we aim to map the trends in research, culture and socio-politics over the last five decades. The archive is crucial for all researchers, activists, artists, policy-makers and all other stakeholders  in the field, in India, as well as international scholars and organisations who would like to work in India. The larger goal of the project is to continue being a living, breathing resource on gender and sexuality that only becomes more comprehensive over time and ensures easy accessibility. The Mapping Sexuality Archive is a knowledge companion which transgresses the conventional modes of cartography, knowledge and meaning-making. It uses mapping as an exercise of radical inclusion by advocating for varied voices, spaces, texts and readings. In a world focused on creating borders, boundaries, and walls for maps, we aim to create a space that inhabits multiplicities.
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

