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

  
  let svgElement;
  let animationState = false; // Track animation state

  let originalData = [];

  onMount(() => {
    if (!svgElement) {
      console.error("SVG element not found!");
      return;
    }

    let rects = svgElement.querySelectorAll(".bar");

    // Store original positions and widths
    originalData = Array.from(rects).map(rect => ({
      x: parseFloat(rect.getAttribute("x")),
      width: parseFloat(rect.getAttribute("width")),
    }));
  });

  function toggleAnimation() {
    let groups = svgElement.querySelectorAll(".bar-group");

    groups.forEach((group, groupIndex) => {
      let rects = group.querySelectorAll(".bar");

      if (!rects.length) {
        console.error("No rectangles found in a group!");
        return;
      }

      if (!animationState) {
        // Shrink and move
        gsap.to(rects, {
          height: 0,
          // width: 10,
          // x: groupIndex === 0 ? "-=550" : "+=550",
          duration: 1,
          //stagger: 0.1,
          
        });
      } else {
        // Restore original state
        gsap.to(rects, {
          height: 550,
          // width: 30,
          // x: 0,
          duration: 2,
          //stagger: 0.1,
          ease: "bounce.out",
        });
      }
    });

    animationState = !animationState; // Toggle state
  }
  </script>

  <main>
    
    <button class="animate-button1" on:click={toggleAnimation}>Body</button>
    <button class="animate-button1 spacebutton" on:click={toggleAnimation}>Space</button>
    <button class="animate-button1 languagebutton" on:click={toggleAnimation}>Language</button>
    <button class="animate-button1 rewritingsbutton" on:click={toggleAnimation}>Rewritings</button>
    <svg class="queer-archive" preserveAspectRatio="none" viewBox="0 0 1200 800">
      <svg bind:this={svgElement} xmlns="http://www.w3.org/2000/svg">
        <!-- First group of rectangles (moves left) -->
        <g class="bar-group">
          {#each Array(19).fill(0) as _, i}
            <rect
              class="bar"
              x={10 + i * 62}
              y="150"
              width="61"
              height="550"
              rx="25"
              fill="#F67C87"
            />
          {/each}
        </g>
  
        
      </svg>
      <image href="./assets/Banner.svg" x="0" y="0" width="100%" />
      
      <image href="./assets/Stage.svg" alt="Stage" x="0" y="700" width="100%" />
    </svg>

  </main>

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
  
    /* Button styling */
    .animate-button1 {
      font-family: "Abril Fatface", cursive;
      background-color: #c2df97;
      color: #CC2F46;
      font-size: 24px;
      padding: 12px 24px;
      border: #f3bef1;
      border-width: 2px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s;
      position: relative;
      top: 350px;
      left: 140px;
      transform: translateX(-50%);
      z-index: 10;
    }
  
    .animate-button1:hover {
      background-color: #f3bef1;
      transform: translateX(-50%) scale(1.05);
    }
  
    .animate-button1:active {
      transform: translateX(-50%) scale(0.95);
    }
  .spacebutton{
    position: relative;
      top: 270px;
      left:300px;
  }
    .languagebutton{
      position: relative;
      top: 270px;
      left:600px;
    }
    .rewritingsbutton{
      position: relative;
      top: 350px;
      left:760px;
    }
    /* Center SVG container */
    .svg-container {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 80px; /* Space for the button */
    }
  </style>