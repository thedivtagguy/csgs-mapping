<script>
  import ModalOpen from "../modal/ModalOpen.svelte";
  import judgements from "$data/indices/judgements.csv.json";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { gsap } from "gsap/dist/gsap.js";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

  let modal;

  export let title = "";
  export let id = ""; // ID prefix of the chart
  </script>

  <main>
    <!-- <img src = "./assets/Banner.svg" alt = "Queer Archive Banner">
   <img src = "./assets/Curtains.svg" alt = "Curtains">
    <img src = "./assets/Stage.svg" alt = "Stage"> -->

    <svg class="queer-archive" preserveAspectRatio="none" viewBox="0 0 1000 800">
      <!-- Lines, legend and styles -->
      <image href="./assets/Curtains.svg" alt = "Curtains" x="5" y="60"width = "99%"/>
      <image href="./assets/Banner.svg" x="0" y="0" width = "100%" />
            <image href="./assets/Stage.svg" alt = "Stage" x="0" y="700"width = "100%" />
      
</svg>
  </main>