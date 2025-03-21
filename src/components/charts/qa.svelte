<script>
  import ModalOpen from "../modal/ModalOpen.svelte";
  import space from "$data/space.csv";
  import body from "$data/body.csv";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { gsap } from "gsap/dist/gsap.js";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import rewritings from "$data/rewritings.csv";
  import language from "$data/language.csv";

  let modal;
  let selected;
  export let direction = "right";
  export let modalContent;
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
    // originalData = Array.from(rects).map(rect => ({
    //   x: parseFloat(rect.getAttribute("x")),
    //   width: parseFloat(rect.getAttribute("width")),
    // }));
    const data = space;
    const data2 = body;
    const data3 = rewritings;
    const data4 = language;
    const width = 1280,
      height = 500;

    // Define categories and their colors
    const categoryColors = {
      "Theatre": "#F3DF8C",
      "Dance": "#C2DF97",
      "Bollywood": "#F67C87",
      "Launda naach": "#f3bef1",
      "Drag": "#F3DF8C",
      "Spoken Word Poetry": "#F7B289",  
      "Nautanki": "#D1BB80",
      "Experiential Installation": "#D08C87",
      "Contemporary Dance Movement": "#A8DCC",
      "Immersive Multimedia Performance": "#C0AAAF",
      "Fusion": "#79A5AE",
      "Documentary/Film": "#F8CAB0",
    };

    
    // Load data from CSV
    // d3.csv("data.csv").then(data => {
    //     // Assign random positions to each object
    data.forEach((d) => {
      d.x = Math.random() * width;
      d.y = Math.random() * height;
      d.color = categoryColors[d.artform];
    });

    // Create Voronoi diagram
    const voronoi = d3.Delaunay.from(data.map((d) => [d.x, d.y])).voronoi([0, 0, width, height]);
    const svg = d3.select("svg.svg1").attr("width", width).attr("height", height);

    // Draw cells
    svg
      .selectAll("path")
      .data(
        data.map((d, i) => ({
          polygon: voronoi.cellPolygon(i),
          color: d.color,
          name: d.name,
          category: d.category
        }))
      )
      .enter()
      .append("path")
      .attr("d", (d) => "M" + d.polygon.join("L") + "Z")
      .attr("fill", (d) => d.color)
      .attr("stroke", "gray")
      .on("click", (event, d) => alert(`Clicked: ${d.name} (Artform ${d.artform})`));

console.log(data2);

      // Category-to-icon mapping (replace with your actual SVG icon paths)
const categoryIcons = {
      "Theatre": "./assets/qa/Theatre.svg", // Example icon for Category A
      "Dance": "./assets/qa/Dance 2.svg",
      "Documentary/Film": "./assets/qa/Film.svg",
      "Performance Art/Strip Tease/Drag": "./assets/qa/Drag.svg",
      "Nautanki": "./assets/qa/Nautanki.svg",
      "Spoken Word Poetry": "./assets/qa/Spoken word.svg",
      "Immersive Multimedia Performance": "./assets/qa/Dance 1.svg",
      "Experiential Installation": "./assets/qa/Film.svg",
      "Contemporary Dance Movement": "./assets/qa/Dance 2.svg",
    };

    const rows = 4,
      cols = 9;
    const cellSize = width / cols;
const cellSize2 = width / 9;
const cellSize3 = width - 20;
    const svg3 = d3.select("#gridSvg");
    data2.forEach((d) => {
      //  // Only take the first 25 items to fit the grid
      // const items = data2.slice(0, 25);

      svg3
        .selectAll("image")
        .data(data2)
        .enter()
        .append("image")
        .attr("x", (d, i) => (i % cols) * cellSize)
        .attr("y", (d, i) => (height - cellSize) - Math.floor(i / cols) * cellSize-50)
        .attr("width", 180)
        .attr("height", 180)
        .attr("href", (d) => categoryIcons[d.artform])
        .on("click", (event, d) => alert(`Clicked: ${d.name} (Artform ${d.artform})`));
    });

const iconPath = "M176.61,333.2c46,7.88,100.27-35.87,100.27-87.48s-15.73-70.28-42.27-93.87S185.46,115.48,186,100.73,206,83,206,83s-8.89,12.2-3.29,20.64a25,25,0,0,0,33.91,7.87c11.9-7.19,22.61-26.54,13.27-52.1S219.37,21.11,187.92,27.5,111.25,64.86,90.61,112,54.73,219.8,77.83,261.45C101.09,303.39,122.06,323.86,176.61,333.2Z";

const svg4 = d3.select("#gridSvg2");

    data3.forEach((d, i) => {
      
        d.x = (i % cols) * cellSize2;  // Columns left to right
        d.y = (height - cellSize2) - Math.floor(i / cols) * cellSize2; // Rows bottom to top
        d.color = categoryColors[d.artform]; // Assign color based on category
  


     
      svg4.selectAll("path")
      .data(data3)
        .enter()
        .append("path")
        .attr("d", iconPath)
        .attr("transform", d => `translate(${d.x}, ${d.y}) scale(.3)`) // Adjust size
        .attr("fill", d => d.color)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .on("click", (event, d) => alert(`Clicked: ${d.name} (Artform ${d.artform})`));
 

    });



    
    data4.forEach((d, i) => {
      
      d.x = 0;  // Columns left to right
        d.y = i*20 + 10; // Rows bottom to top
        d.color = categoryColors[d.artform]; // Assign color based on category
  });

  const svg5 = d3.select("svg.svg5").attr("width", width).attr("height", height);

  svg5
      .selectAll("rect")
      .data(
        data4.map((d, i) => ({
          
          color: d.color,
          x: d.x,
          y: d.y,
          name: d.name,
          artform: d.artform
        }))
      )
      .enter()
        .append("rect")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("width", cellSize3 )  // Adjust width for spacing
        .attr("height", 10) // Adjust height for spacing
        .attr("fill", d => d.color)
        .on("click", (event, d) => alert(`Clicked: ${d.name} (Artform ${d.artform})`));;










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

          duration: 1
        });
      } else {
        // Restore original state
        gsap.to(rects, {
          height: 550,

          duration: 2,

          ease: "bounce.out"
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
  <svg class="queer-archive" preserveAspectRatio="none" viewBox="0 0 1200 830">
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

    <image href="./assets/Stage.svg" alt="Stage" x="20" y="700" width="97%" />
  </svg>

  <svg class="svg1" />
  
  

  <div class="grid-container">
    <svg id="gridSvg" width="1280" height="500" />
  </div>
  <div class="grid-container">
    <svg id="gridSvg2" width="1280" height="500" />
  </div>
  <svg class="svg5" />
  
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");

  /* Button styling */
  .animate-button1 {
    font-family: "Abril Fatface", cursive;
    background-color: #c2df97;
    color: #cc2f46;
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
  .spacebutton {
    position: relative;
    top: 270px;
    left: 300px;
  }
  .languagebutton {
    position: relative;
    top: 270px;
    left: 600px;
  }
  .rewritingsbutton {
    position: relative;
    top: 350px;
    left: 760px;
  }
  /* Center SVG container */
  .svg-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px; /* Space for the button */
  }
  .svg1 {
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
  }

  .grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  svg {
    border: 1px solid #ddd;
  }
  .icon {
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  .icon:hover {
    transform: scale(1.2);
  }
</style>
