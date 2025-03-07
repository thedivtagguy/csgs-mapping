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
          width: 10,
          x: groupIndex === 0 ? "-=100" : "+=100",
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.inOut",
        });
      } else {
        // Restore original state
        gsap.to(rects, {
          width: (i) => originalData[i]?.width || 30,
          x: (i) => originalData[i]?.x || 0,
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.inOut",
        });
      }
    });

    animationState = !animationState; // Toggle state
  }
  </script>

  <main>
    
    <button class="animate-button1" on:click={toggleAnimation}>Body</button>
    <button class="animate-button2" on:click={toggleAnimation}>Space</button>
    <svg class="queer-archive" preserveAspectRatio="none" viewBox="0 0 1200 800">
      <svg bind:this={svgElement} xmlns="http://www.w3.org/2000/svg">
        <!-- First group of rectangles (moves left) -->
        <g class="bar-group">
          {#each Array(20).fill(0) as _, i}
            <rect
              class="bar"
              x={250 + i * 40}
              y="150"
              width="30"
              height="600"
              rx="25"
              fill="#F67C87"
            />
          {/each}
        </g>
  
        <!-- Second group of rectangles (moves right) -->
        <g class="bar-group">
          {#each Array(20).fill(0) as _, i}
            <rect
              class="bar"
              x={650 + i * 40}
              y="150"
              width="30"
              height="600"
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
      background-color: #F3DF8C;
      color: #CC2F46;
      font-size: 24px;
      padding: 12px 24px;
      border: #F7B289;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s;
      position: absolute;
      top: 1015px;
      left: 300;
      transform: translateX(-50%);
      z-index: 10;
    }
  
    .animate-button1:hover {
      background-color: #f3d14a;
      transform: translateX(-50%) scale(1.05);
    }
  
    .animate-button1:active {
      transform: translateX(-50%) scale(0.95);
    }
  
    .animate-button2 {
      font-family: "Abril Fatface", cursive;
      background-color: #F3DF8C;
      color: #CC2F46;
      font-size: 24px;
      padding: 12px 24px;
      border: #F7B289;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s;
      position: absolute;
      top: 915px;
      left:600;
      transform: translateX(-50%);
      z-index: 10;
    }
  
    .animate-button2:hover {
      background-color: #f3d14a;
      transform: translateX(-50%) scale(1.05);
    }
  
    .animate-button2:active {
      transform: translateX(-50%) scale(0.95);
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