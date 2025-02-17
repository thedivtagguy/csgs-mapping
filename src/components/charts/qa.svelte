<script>
  import ModalOpen from "../modal/ModalOpen.svelte";
  import judgements from "$data/indices/judgements.csv.json";
  
//import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';

  



  import { onMount } from "svelte";
  import * as d3 from "d3";

  let modal;
  let svg;
  let width = 650;
  let height = 700;
 

  export let title = "";
  export let id = ""; // ID prefix of the chart
  export let modalContent;
  export let dataset = [];
  let data2 = Object.values(judgements);

  let facet = "keyword";
  let selected;
  export let direction = "right";

  let facets = [];
  facets = dataset.map((d) => d[facet]).filter((v, i, a) => a.indexOf(v) === i);
  // Remove empty facets
  facets.forEach((d) => {
    if (d === "") {
      facets.splice(facets.indexOf(d), 1);
    }
  });

  facets.unshift(`All ${facet}s`);

  //  const node = d3.select(".button")
  //     .data(data2);
  //     console.log(node);

  //     d3.selectAll("#facets").on("change", function () {
  //     d3.selectAll(".node").style("filter", 'drop-shadow(0px 0px 0px rgba(30,30,30,0))').style("opacity", function(d){
  //       if (selected == "All keywords") {return 1} else {return 0.2}
  //     })
  //     .style("pointer-events", function(d) { if (selected === "All keywords") {return "all"} else {return "none"}});

  //     d3.selectAll("." + selected.replaceAll(" ", "_").replaceAll("'", "2").replaceAll("/", "3")).style("filter", 'drop-shadow(2px 2px 2px rgba(30,30,30,0.6))').style("opacity", 1).style("pointer-events", "all") ;
  // });
</script>

<main>
  <section>
    
    <div class="container">
      
        <div class="heading">
          <h1 class="text-4xl px-10 uppercase font-bold">{title}</h1>
          <p class="text-gray-700 py-2 px-10 text-sm font-medium">
            Click on {title} to know more
          </p>
        </div>
        <div >
          <img src = "static\assets\Banner.svg" alt="banner" style="width: 100%; height: 100%" />
          <!-- <lottie-player
                         id="firstLottie"
                         src="https://assets8.lottiefiles.com/private_files/lf30_tnblylie.json"
                         style="border-color: red; border-style: solid; border-width: 5px"
          >
          </lottie-player>  -->
        </div>


          <div
          id="facets"
          class="md:flex z-10 hidden {direction}-0 md:absolute flex-col gap-8 justify-start pb-8my-8"
        >
          <select bind:value={selected} class="rounded-none">
            {#each facets as facet}
              <option class="capitalize" value={facet}>
                {facet}
              </option>
            {/each}
          </select>
        </div>
      

        <div class="curtains">
          <object class="stage" data="/assets/stage.svg" />
        </div>


        
        <button
          class="button button1"
          on:click={() => {
            modal.handleOpen(data2[0], modalContent, id);
          }}
        >
          <img src="/assets/Punjab_Haryana.svg" />
          <p class="leading-3 text-xs py-1">Tirath Kaur vs Kirpal Singh</p>
        </button>

        
      </div>
    
  </section>
  <ModalOpen bind:this={modal} />
</main>

<style>
  .container {
    width: 4600px;
    height: 740px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(85, 50px);
    grid-template-rows: repeat(15, 50px);
    overflow-x: scroll;
  }
  .heading {
    grid-area: 1/ 1/ 2/ 152;
    z-index: 10;
  }

  svg {
    display: block;
    overflow: visible;
  }

  .button1 {
    grid-area: 10/1/13/3;
  }
  </style>
 