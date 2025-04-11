<script>
  import ModalOpen from "../modal/ModalOpen.svelte";

  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { gsap } from "gsap/dist/gsap.js";
  //import data from "$data/qa.csv";
  import data from "$data/indices/qa.csv.json";
  let modal;
  let selected;
  export let direction = "right";
  export let modalContent;
  export let title = "";
  export let id = ""; // ID prefix of the chart
  // let body = [];
  // let space = [];
  // let language = [];
  // let rewritings = [];

  let svgContainer;

  let svgElement;
  let hasAnimatedOnce = false;
  let animationState = false; // assume false means full size

  let width = 1170;
  let height = 720;
  let widthMobile = 300;

  // Define categories and their colors
  const categoryColors = {
    Theatre: "#F3DF8C",
    Dance: "#C2DF97",
    Bollywood: "#F67C87",
    "Launda naach": "#f3bef1",
    Drag: "#F3DF8C",
    "Spoken Word Poetry": "#F7B289",
    Nautanki: "#D1BB80",
    "Experiential Installation": "#D08C87",
    "Contemporary Dance Movement": "#A8DCC",
    "Immersive Multimedia Performance": "#C0AAAF",
    Fusion: "#79A5AE",
    "Documentary/Film": "#F8CAB0"
  };

  // Group elements based on their category
  const body = data.filter((d) => d.category === "Body");
  const space = data.filter((d) => d.category === "Space");
  const language = data.filter((d) => d.category === "Language");
  const rewritings = data.filter((d) => d.category === "Rewritings");

  // Category-to-icon mapping
  const categoryIcons = {
    Theatre: "./assets/qa/Theatre.svg",
    Dance: "./assets/qa/Dance 2.svg",
    "Documentary/Film": "./assets/qa/Film.svg",
    "Performance Art/Strip Tease/Drag": "./assets/qa/Drag.svg",
    Nautanki: "./assets/qa/Nautanki.svg",
    "Spoken Word Poetry": "./assets/qa/Spoken word.svg",
    "Immersive Multimedia Performance": "./assets/qa/Dance 1.svg",
    "Experiential Installation": "./assets/qa/Film.svg",
    "Contemporary Dance Movement": "./assets/qa/Dance 2.svg"
  };

  const rows = 4,
    cols = 9;
  const cellSize = width / cols;
  const cellSize2 = width / 9;
  const cellSize3 = width - 20;

  onMount(() => {
    window.mobileCheck = function () {
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };

    if (!svgElement) {
      console.error("SVG element not found!");
      return;
    }

    let rects = svgElement.querySelectorAll(".bar");
    let groups = svgElement.querySelectorAll(".bar-group");
    if (!rects.length) {
      console.error("No rectangles found in the SVG element!");
      return;
    }
  });

  function launchBodyVisualization() {
    d3.select(svgContainer).selectAll("*").remove();
    setTimeout(() => {
      const svg = d3.select(svgContainer);
      body.forEach((d) => {
        svg
          .selectAll("image")
          .data(body)
          .enter()
          .append("image")
          .attr("x", (d, i) => (i % cols) * cellSize)
          .attr("y", (d, i) => height - cellSize - Math.floor(i / cols) * cellSize - 50)
          .attr("width", 180)
          .attr("height", 180)
          .attr("href", (d) => categoryIcons[d.artform])
          .on("click", function (d, i) {
            modal.handleOpen(i, modalContent);
          });
      });
    }, 1000); // delay in milliseconds
  }

  function launchSpaceVisualization() {
    console.log("Launching Visualization");
    // Clear previous SVG content if exists
    d3.select(svgContainer).selectAll("*").remove();
    setTimeout(() => {
      space.forEach((d) => {
        d.x = Math.random() * width;
        d.y = Math.random() * height;
        d.color = categoryColors[d.artform];
      });

      // Create Voronoi diagram
      const voronoi = d3.Delaunay.from(space.map((d) => [d.x, d.y])).voronoi([0, 0, width, height]);
      d3.select(svgContainer)
        .attr("width", width)
        .attr("height", height)
        .selectAll("path")
        .data(
          space.map((d, i) => ({
            polygon: voronoi.cellPolygon(i).map(([x, y]) => [x, y + 100]),
            color: d.color,
            name: d.name,
            category: d.artform
          }))
        )
        .enter()
        .append("path")
        .attr("d", (d) => "M" + d.polygon.join("L") + "Z")
        .attr("fill", (d) => d.color)
        .attr("stroke", "gray")
        .attr("transform", "translate(0, 200)") // 👈 Moves the Voronoi layer down by 100px
        .on("click", function (d, i) {
          modal.handleOpen(i, modalContent);
        });
      console.log("Visualization created");
    }, 1000); // delay in milliseconds
  }

  function launchLanguageVisualization() {
    console.log("Launching Visualization");
    // Clear previous SVG content if exists
    d3.select(svgContainer).selectAll("*").remove();
    setTimeout(() => {
      language.forEach((d, i) => {
        d.x = 0; // Columns left to right
        d.y = i * 20 + 10; // Rows bottom to top
        d.color = categoryColors[d.artform]; // Assign color based on category
      });
      const iconPath = "./assets/qa/language1.svg";
      const svg = d3.select(svgContainer);

      svg
        .selectAll("image") // Use a specific class for selection
        .data(language)
        .enter()
        .append("image")

        .attr("href", iconPath)
        .attr("transform", (d, i) => {
          const x = (i % cols) * cellSize2;
          const y = height - cellSize2 - Math.floor(i / cols) * cellSize2;
          return `translate(${x}, ${y}) scale(.3)`;
        })
        .attr("fill", (d) => categoryColors[d.artform])
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .on("click", function (d, i) {
          modal.handleOpen(i, modalContent);
        });
    }, 1000); // delay in milliseconds
  }

  function launchRewritingsVisualization() {
    console.log("Launching Visualization");
    // Clear previous SVG content if exists

    d3.select(svgContainer).selectAll("*").remove();
    setTimeout(() => {
      const iconPath =
        "M176.61,333.2c46,7.88,100.27-35.87,100.27-87.48s-15.73-70.28-42.27-93.87S185.46,115.48,186,100.73,206,83,206,83s-8.89,12.2-3.29,20.64a25,25,0,0,0,33.91,7.87c11.9-7.19,22.61-26.54,13.27-52.1S219.37,21.11,187.92,27.5,111.25,64.86,90.61,112,54.73,219.8,77.83,261.45C101.09,303.39,122.06,323.86,176.61,333.2Z";

      const svg = d3.select(svgContainer);

      // Bind data and create paths
      svg
        .selectAll(".grid-icon") // Use a specific class for selection
        .data(rewritings)
        .enter()
        .append("path")
        .attr("class", "grid-icon") // Add a class to avoid reselecting all paths
        .attr("d", iconPath)
        .attr("transform", (d, i) => {
          const x = (i % cols) * cellSize2;
          const y = height - cellSize2 - Math.floor(i / cols) * cellSize2;
          return `translate(${x}, ${y}) scale(.3)`;
        })
        .attr("fill", (d) => categoryColors[d.artform])
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .on("click", function (d, i) {
          modal.handleOpen(i, modalContent);
        });
    }, 1000); // delay in milliseconds
  }

  function toggleAnimation() {
    let groups = svgElement.querySelectorAll(".bar-group");

    const animate = (toHeight, duration, ease = "none") => {
      groups.forEach((group) => {
        let rects = group.querySelectorAll(".bar");

        if (!rects.length) {
          console.error("No rectangles found in a group!");
          return;
        }

        gsap.to(rects, {
          height: toHeight,
          duration: duration,
          ease: ease
        });
      });
    };

    if (!hasAnimatedOnce) {
      // First time: regular toggle
      if (!animationState) {
        animate(0, 1); // shrink
      } else {
        animate(550, 2, "bounce.out"); // bounce back
      }
      animationState = !animationState;
      hasAnimatedOnce = true;
    } else {
      // Every other time: shrink then bounce back
      animate(550, 1.5, "bounce.out"); // bounce back

      // Then bounce back after a short delay
      setTimeout(() => {
        animate(0, 1); //shrink
      }, 1500); // delay matches the shrink duration

      // Make sure the state is always "full size" after this
      animationState = true;
    }

    console.log("Animation toggled. State now:", animationState);
  }

  function handleBodyClick() {
    toggleAnimation();

    launchBodyVisualization();
  }

  function handleSpaceClick() {
    toggleAnimation();

    launchSpaceVisualization();
  }
  function handleLanguageClick() {
    toggleAnimation();

    launchLanguageVisualization();
  }
  function handleRewritingsClick() {
    toggleAnimation();

    launchRewritingsVisualization();
    // delay in milliseconds
  }
</script>

<ModalOpen bind:this={modal} />

<main>
  <button class="animate-button1" on:click={handleBodyClick}>Body</button>
  <button class="animate-button1 spacebutton" on:click={handleSpaceClick}>Space</button>
  <button class="animate-button1 languagebutton" on:click={handleLanguageClick}>Language</button>
  <button class="animate-button1 rewritingsbutton" on:click={handleRewritingsClick}
    >Rewritings</button
  >

  <!-- Voronoi SVG on top -->
  <svg bind:this={svgContainer} class="voronoi" preserveAspectRatio="true" />

  <!-- Queer Archive SVG underneath -->
  <svg class="queer-archive" preserveAspectRatio="true" viewBox="0 0 1200 830">
    <svg bind:this={svgElement} class="bars" xmlns="http://www.w3.org/2000/svg">
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
</main>

<style>
  svg {
    border: none !important; /* Removes any CSS border */
    outline: none; /* Removes any outline if applied */
  }
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
  /* .svg-container {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px; /* Space for the button */
  /* } */
  /* .queer-archive {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Behind the buttons */
  /* } */

  main {
    position: relative;
  }

  .queer-archive {
    position: relative;
    z-index: 1; /* base layer */
    width: 100%;
    height: auto;
  }

  .voronoi {
    position: absolute;
    top: 20;
    left: 10;
    z-index: 2; /* on top of archive, below bars */
    transform: translate(50px, 5px); /* → right 50px, ↑ up 30px */
    pointer-events: auto; /* ensure interactivity */
    justify-content: center;
  }

  .bars {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3; /* above voronoi */
    width: 100%;
    height: 100%;
    pointer-events: none; /* only visual — not interactive */
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
