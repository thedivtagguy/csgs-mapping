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
  let showExpandedLegend = false;
  let svgContainer;
  let showTitleCard = true;
  let svgElement;
  let hasAnimatedOnce = false;
  let animationState = false; // assume false means full size

  let width;
  let height;
  let widthMobile = 300;
  let yPosition;
let viewBoxHeight;
let barHeight;
let yPos;
  // Define categories and their colors
  const categoryColors = {
    "Bollywood Dance": "#F3DF8C",
    "Classical Dance": "#C2DF97",
    "Contemporary Dance": "#F67C87",
    "Dance as Political Discourse": "#A8DCC6",
    "Dance Theatre": "#4D5270",
    Drag: "#F3DF8C",
    "Experimental Dance": "#A9AEDB",
    "Feminist Theatre": "#C65C7F",
    Film: "#F3BEF1",
    "Folk Dance": "#F7B289",
    "Immersive Theatre": "#bdc1ae",
    "Mixed Media": "#D08C87",
    Multimedia: "#867888",
    Music: "#99ad77",
    Nautanki: "#C0AAAF",
    Poetry: "#79A5AE",
    Rap: "#79A5AE",
    "Spoken Word": "#79A5AE",
    Storytelling: "#55774d",
    Theatre: "#D1BB80"
  };
  let showLegend = true;

// Utility to determine text color (black or white) based on background
function getTextColor(bg) {
  const r = parseInt(bg.slice(1, 3), 16);
  const g = parseInt(bg.slice(3, 5), 16);
  const b = parseInt(bg.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);
  return luminance > 160 ? 'text-black' : 'text-white';
};
  // Group elements based on their category
  const body = data.filter((d) => d.category === "Body");
  const space = data.filter((d) => d.category === "Space");
  const language = data.filter((d) => d.category === "Language");
  const rewritings = data.filter((d) => d.category === "Rewritings");

  const allKeywords = [...new Set(data.map((d) => d.keyword1))];

  // Category-to-icon mapping
  const categoryIcons = {
    Theatre: "./assets/qa/Theatre.svg",
    "Contemporary Dance": "./assets/qa/Dance 1.svg",
    "Dance as Political Discourse": "./assets/qa/Political discourse.svg",
    "Experimental Dance": "./assets/qa/Experimental dance.svg",
    "Feminist Theatre": "./assets/qa/Feminist theatre.svg",
    Film: "./assets/qa/Film.svg",
    "Immersive Theatre": "./assets/qa/Immersive theatre.svg",
    "Performance Art/Strip Tease/Drag": "./assets/qa/Drag.svg",
    Nautanki: "./assets/qa/Nautanki.svg",
    Poetry: "./assets/qa/Spoken word.svg",
    "Immersive Theatre": "./assets/qa/Theatre.svg",
    "Experiential Installation": "./assets/qa/Film.svg",
    Drag: "./assets/qa/Drag.svg",
    "Bollywood Dance": "./assets/qa/Dance 1.svg",
    "Mixed Media": "./assets/qa/Mixed media.svg"
  };
let colsLanguage, colsBody, colsRewritings, cellSizeBody, cellSizeRewritings, cellSizeLanguage;
 
  

onMount(async () => {
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
    if (mobileCheck()){
      width = 300;
      height = 1100;
    barHeight = 1050;
    yPos = 0;
    yPosition = 1050;
    viewBoxHeight = 1280;
    colsLanguage = 3;
  colsBody = 5;
  colsRewritings = 4;
  cellSizeBody = (width)*3.5 / colsBody;
  cellSizeRewritings = width / 4;
  cellSizeLanguage = (width) / colsLanguage;
  } else {
    width = 1100;
    height = 570;
    barHeight = 550;
    yPos = -110;
    yPosition = 550;
    viewBoxHeight = 650;
    colsLanguage = 6;
  colsBody = 8;
  colsRewritings = 10;
  cellSizeBody = (width)*1.1 / colsBody;
  cellSizeRewritings = width / 9;
  cellSizeLanguage = (width) / colsLanguage;

  }
  
  });
  
  
  ///////////Body Visualization
  function launchBodyVisualization() {
    const tooltip = d3.select("#tooltip");
    d3.select(svgContainer).selectAll("*").remove();
    setTimeout(() => {
      const svg = d3.select(svgContainer);
      body.forEach((d) => {
        svg
          .selectAll(".data-shape")
          .data(body)
          .enter()
          .append("image")
          .attr("class", "data-shape")
          // .attr("style", "filter: drop-shadow(1px 1px 0px #000000) ;")

          .attr("href", (d) => categoryIcons[d.artform] || "./assets/qa/Theatre.svg")
          .attr("x", (d, i) => (i % colsBody) * cellSizeBody)
          .attr("y", (d, i) => height - cellSizeBody - Math.floor(i / colsBody) * cellSizeBody - 40)
          .attr("width", 170)
          .attr("height", 170)
          // .attr("href", (d) => categoryIcons[d.artform])
          .on("mouseover", function (event, d) {
            d3.select(this).attr("style", "filter: drop-shadow(1px 1px 0px #000000);");

            tooltip.style("opacity", 1).html(d.title || "No title");
          })
          .on("mousemove", function (event) {
            const svgRect = svgContainer.getBoundingClientRect();
            const x = event.clientX - svgRect.left;
            const y = event.clientY - svgRect.top;

            tooltip.style("left", x + 10 + "px").style("top", y + 10 + "px");
          })
          .on("mouseout", function () {
            d3.select(this).attr("style", "filter: none;");

            tooltip.style("opacity", 0);
          })
          .on("click", function (d, i) {
            modal.handleOpen(i, modalContent);
          });
      });
    }, 1000); // delay in milliseconds
  }
  ////////////Space Visualization

  function launchSpaceVisualization() {
    const tooltip = d3.select("#tooltip");

    console.log("Launching Space Visualization");

    d3.select(svgContainer).selectAll("*").remove();

    // Add a delay (if needed)
    setTimeout(() => {
      // Assign position and color
      space.forEach((d) => {
        d.x = Math.random() * width;
        d.y = Math.random() * height;
        d.color = categoryColors[d.artform];
      });

      // Create Voronoi structure
      const delaunay = d3.Delaunay.from(
        space,
        (d) => d.x,
        (d) => d.y
      );
      const voronoi = delaunay.voronoi([0, 0, width, height]);

      // Bind space data directly
      d3.select(svgContainer)
        .selectAll(".data-shape")
        .data(space)
        .enter()
        .append("path")
        .attr("class", "data-shape")
        .attr("d", (d, i) => {
          const polygon = voronoi.cellPolygon(i);
          return polygon ? "M" + polygon.join("L") + "Z" : null;
        })
        .attr("fill", (d) => d.color)
        .attr("stroke", "gray")
        .attr("stroke-width", 0.1)
        .attr("opacity", 0.9)
        .attr("transform", "translate(50, 40)")
        .on("mouseover", function (event, d) {
          d3.select(this).attr("stroke-width", 3).attr("stroke", "#000000");

          tooltip.style("opacity", 1).html(d.title || "No title");
        })
        .on("mousemove", function (event, d) {
          const svgRect = svgContainer.getBoundingClientRect();
          const x = event.clientX - svgRect.left;
          const y = event.clientY - svgRect.top;

          tooltip.style("left", x + 10 + "px").style("top", y + 10 + "px");
        })
        .on("mouseout", function (event, d) {
          d3.select(this).attr("stroke-width", 1).attr("stroke", "gray");
          tooltip.style("opacity", 0);
        })
        .on("click", function (d, i) {
          modal.handleOpen(i, modalContent);
        });
    }, 1000);
  }
  //////////Language Visualization
  function launchLanguageVisualization() {
    const tooltip = d3.select("#tooltip");

    // Clear previous SVG content if exists
    d3.select(svgContainer).selectAll("*").remove();
    setTimeout(() => {
      
      const iconPath1 = [
        { d: "M0 0 H200 V30 H0 Z" },
        { d: "M0 35 H200 V65 H0 Z" },
        { d: "M0 70 H200 V100 H0 Z" },
        { d: "M0 105 H140 V135 H0 Z" }
      ];

      const iconPath2 = [
        { d: "M0 0 H200 V30 H0 Z" },
        { d: "M0 35 H200 V65 H0 Z" },
        { d: "M0 70 H200 V100 H0 Z" },
        { d: "M0 105 H80 V135 H0 Z" }
      ];
      const iconPath3 = [
        { d: "M0 0 H200 V30 H0 Z" },
        { d: "M0 35 H200 V65 H0 Z" },
        { d: "M0 70 H200 V100 H0 Z" },
        { d: "M0 105 H40 V135 H0 Z" }
      ];
      const iconGroups = [iconPath1, iconPath2, iconPath3];
      const svg = d3.select(svgContainer);
      svg
        .selectAll(".data-shape")
        .data(language)
        .enter()
        .append("g")
        .attr("class", "data-shape")
        .attr("transform", (d, i) => {
          const x = (i % colsLanguage) * cellSizeLanguage/.9;
          const y = height - .7*cellSizeLanguage - Math.floor(i / colsLanguage) * cellSizeLanguage;
          return `translate(${x}, ${y}) scale(0.65)`;
        })
        .each(function (d) {
          const group = d3.select(this);
          const paths = iconGroups[Math.floor(Math.random() * iconGroups.length)];

          paths.forEach((pathData) => {
            group.append("path").attr("d", pathData.d).attr("fill", categoryColors[d.artform]);
          });
        })
        .on("mouseover", function (event, d) {
          d3.select(this).attr("stroke-width", 2).attr("stroke", "#000000");

          tooltip.style("opacity", 1).html(d.title || "No title");
        })
        .on("mousemove", function (event, d) {
          const svgRect = svgContainer.getBoundingClientRect();
          const x = event.clientX - svgRect.left;
          const y = event.clientY - svgRect.top;

          tooltip.style("left", x + 10 + "px").style("top", y + 10 + "px");
        })
        .on("mouseout", function (event, d) {
          d3.select(this).attr("stroke-width", 0);
          tooltip.style("opacity", 0);
        })
        .on("click", function (d, i) {
          modal.handleOpen(i, modalContent);
        });
    }, 1000); // delay in milliseconds
  }
  /////////////Rewritings Visualization
  function launchRewritingsVisualization() {
    const tooltip = d3.select("#tooltip");
    // Clear previous SVG content if exists

    d3.select(svgContainer).selectAll("*").remove();
    setTimeout(() => {
      const iconPath =
        "M176.61,333.2c46,7.88,100.27-35.87,100.27-87.48s-15.73-70.28-42.27-93.87S185.46,115.48,186,100.73,206,83,206,83s-8.89,12.2-3.29,20.64a25,25,0,0,0,33.91,7.87c11.9-7.19,22.61-26.54,13.27-52.1S219.37,21.11,187.92,27.5,111.25,64.86,90.61,112,54.73,219.8,77.83,261.45C101.09,303.39,122.06,323.86,176.61,333.2Z";

      const svg = d3.select(svgContainer);

      // Bind data and create paths
      svg
        .selectAll(".data-shape") // Use a specific class for selection
        .data(rewritings)
        .enter()
        .append("path")
        .attr("class", "data-shape") // Add a class to avoid reselecting all paths
        .attr("d", iconPath)
        .attr("transform", (d, i) => {
          const x = (i % colsRewritings) * cellSizeRewritings;
          const y = height -20 - cellSizeRewritings - Math.floor(i / colsRewritings) * cellSizeRewritings;
          return `translate(${x}, ${y}) scale(.3)`;
        })
        .attr("fill", (d) => categoryColors[d.artform])
        
        
        .on("mouseover", function (event, d) {
          d3.select(this).attr("stroke-width", 6).attr("stroke", "#000000");

          tooltip.style("opacity", 1).html(d.title || "No title");
        })
        .on("mousemove", function (event, d) {
          const svgRect = svgContainer.getBoundingClientRect();
          const x = event.clientX - svgRect.left;
          const y = event.clientY - svgRect.top;

          tooltip.style("left", x + 10 + "px").style("top", y + 10 + "px");
        })
        .on("mouseout", function (event, d) {
          d3.select(this).attr("stroke-width", 0);
          tooltip.style("opacity", 0);
        })
        .on("click", function (d, i) {
          modal.handleOpen(i, modalContent);
        });
    }, 1000); // delay in milliseconds
  }

  function toggleAnimation() {
    showTitleCard = false;
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

  let selectedKeywords = [];
  let currentView = "space"; // Default view; change as needed

  function toggleKeyword(keyword) {
    if (selectedKeywords.includes(keyword)) {
      selectedKeywords = selectedKeywords.filter((k) => k !== keyword); // Reassigns the array
    } else {
      selectedKeywords = [...selectedKeywords, keyword]; // Reassigns with new item
    }

    console.log("Selected keywords:", selectedKeywords);
    applyKeywordHighlight();
  }

  function applyKeywordHighlight() {
    // Use D3 to select all elements for the current view
    const container = d3.select(svgContainer);

    container.selectAll(".data-shape")
    .style("filter", function (d) {
      // If no keywords are selected, remove filters and reset opacity
      if (selectedKeywords.length === 0) {
        return "none";
      }
      // Apply highlight or dim based on match
      return selectedKeywords.includes(d.keyword1)
        ? "drop-shadow(2px 2px 2px rgba(0,0,0,.6))"
        : "opacity(0.5)";
    });
}

  function handleBodyClick() {
    currentView = "body";
    selectedKeywords = [];
    toggleAnimation();

    launchBodyVisualization();
  }

  function handleSpaceClick() {
    currentView = "space";
    selectedKeywords = [];
    toggleAnimation();

    launchSpaceVisualization();
  }
  function handleLanguageClick() {
    selectedKeywords = [];
    currentView = "language";
    toggleAnimation();

    launchLanguageVisualization();
  }
  function handleRewritingsClick() {
    selectedKeywords = [];
    currentView = "rewritings";
    toggleAnimation();

    launchRewritingsVisualization();
    // delay in milliseconds
  }
</script>

<ModalOpen bind:this={modal} />

<main>
  <div class="banner-container">
    <a href="/about qa" target="_blank" rel="noopener noreferrer">
      <img src="./assets/Banner.svg" alt="Banner" class="banner" />
    </a>
  </div>
  <div class="button-row">
    <button class="animate-button1 text-sm py-2 px-3 md:text-base md:py-3 md:px-6" on:click={handleBodyClick}>Body</button>
    <button class="animate-button1 spacebutton text-sm py-2 px-3 md:text-base md:py-3 md:px-6" on:click={handleSpaceClick}>Space</button>
    <button class="animate-button1 languagebutton text-sm py-2 px-3 md:text-base md:py-3 md:px-6" on:click={handleLanguageClick}>Language</button>
    <button class="animate-button1 rewritingsbutton text-sm py-2 px-3 md:text-base md:py-3 md:px-6" on:click={handleRewritingsClick}
      >Rewritings</button
    >
  </div>
  {#if showTitleCard}
    <div class="title-card">
      <p class="box-title">Click on the category buttons above to lift the curtain</p>
      <p class="description">
        <li>View visual representations of the performances in the archive </li>
        <li>Click on the representations to know more, and use the keywords at the bottom of the stage to filter performances </li>
        <li>There's a legend in the scroll on the right, that maps colours to artforms </li> 
        Happy exploring!
      
    </div>
  {/if}

  <div id="tooltip" class="tooltip" />
  <div class="legend-container absolute right-[1%] top-[29%] z-10 pointer-events-auto md:top-[30%]" >

    {#if showExpandedLegend}
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <img
        src="./assets/qa/expanded.svg"
        alt="Expanded Legend"
        class="w-[auto] h-[150px] cursor-pointer"
        tabindex="0"
        on:click={() => showExpandedLegend = false}
        on:keydown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            showExpandedLegend = false;
          }
        }}
      />
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="./assets/qa/Legend.svg"
        alt="Legend"
        class="w-[auto] h-[148px] cursor-pointer"
        on:click={() => showExpandedLegend = true}
      />
    {/if}
    
  </div>
  <!-- Queer Archive SVG underneath -->
  <svg
  class="queer-archive"
  viewBox={`0 0 1200 ${viewBoxHeight}`}
  preserveAspectRatio="true"
  transform={`translate(0, ${yPos})`}>
    
    <!-- Voronoi should come before bars so it renders underneath -->
    <g bind:this={svgContainer} class="voronoi" x="20" y="50">
      <!-- D3 will populate here -->
    </g>

    <g bind:this={svgElement} class="bars">
      <g class="bar-group">
        {#each Array(19).fill(0) as _, i}
          <rect class="bar" x={10 + i * 62} y="0" width="61"
          height={barHeight} rx="25" fill="#F67C87" />
        {/each}
      </g>
    </g>
    
    
    <!-- Static image background -->
    <rect
      class="bottom"
      x="2"
      y={yPosition}
      width="98%"
      height="15%"
      fill="#F3DF8C"
      opacity="1"
      stroke="#79A5AE"
      stroke-width="6"
      rx="2"
      ry="2"
    />

    
  </svg>
  
  
  <div class="keyword-buttons hidden md:flex">
    {#each allKeywords as keyword}
      <button
        class="keyword-button"
        class:active={selectedKeywords.includes(keyword)}
        on:click={() => {
          toggleKeyword(keyword);
        }}
      >
        {keyword}
      </button>
    {/each}
  </div>

  
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");

  .banner-container {
    position: relative;
    width: 100%;
    display: block;
    z-index: 10;
  }

  .banner {
    width: 100%;
    height: auto;
    display: block;

    margin-bottom: 0;
  }

  .button-row {
    display: flex;
    justify-content: center;
    gap: 6vw;
    flex-wrap: wrap;
    width: 100%;
    padding: 0; /* ← Remove vertical padding */
    margin: 0; /* ← Ensure no top margin */
    z-index: 10;
    align-items: flex-start;
  }

  /* Button styling */
  .animate-button1 {
    position: static;
    font-family: "Abril Fatface", cursive;
    background-color: #c2df97;
    color: #cc2f46;
    font-size: clamp(16px, 2.5vw, 24px);
    padding: 0.5em 1.5em;
    border: 2px solid #f3bef1;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    z-index: 11;
    top: 0;
  }

  .animate-button1:hover {
    background-color: #f3bef1;
    transform: scale(1.05);
  }

  .animate-button1:active {
    transform: scale(0.95);
  }

  /* Optional: stack buttons vertically on smaller screens */
  @media (max-width: 600px) {
    .button-row {
      flex-direction: row;
      align-items: center;
      gap: 0.2rem;
    }
    .legend-container {
    top: auto !important;
    bottom: -10% !important;
    transform: scale(0.8);
    right: 5%; /* optional: move it a bit inward from the right edge */
  }
    .title-card {
      position: absolute;
          top: 20% !important;
    padding: .2rem;
    width: 90%;
  }

  .title-card .box-title {
    font-size: clamp(16px, 5vw, 22px);
  }

  .title-card .description {
    font-size: clamp(13px, 4vw, 15px);
  }
  .keyword-buttons {display: none !important;}
  }

  main {
    position: relative;
  }

  .queer-archive {
    width: 100%;
   
    display: block;
    /* transform: translateY(-110px); Adjust this value to move the SVG up or down */
  }

  .voronoi {
    pointer-events: auto; /* interactive layer */
  }

  .bars {
    pointer-events: none; /* only for visuals */
    z-index:11;
  }

  .tooltip {
    position: absolute;
    pointer-events: none;
    background-color: #fae4b5; /* Fill color */
    color: rgb(53, 49, 49); /* Font color */

    padding: 10px;
    border-radius: 0px; /* Decorative border, rounded */
    border: 2px dashed darkcyan; /* Decorative border color */
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); /* Soft shadow for better visibility */
    font-size: 12px;
    max-width: 200px;
    text-align: center;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.2s ease;
    z-index: 1000;
  }
  .keyword-buttons {
    position: absolute;
    bottom: 15%; /* Adjust as needed to sit on rect */
    left: 5%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .7rem;
    z-index: 5; /* Above the SVG */
    pointer-events: auto;
  }

  .keyword-button {
    background-color: #f7b289;
    border: 1px dashed #ffffff;
    color: black;

    padding: 0.4em .4em;
    border-radius: 1px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.7rem;
  }

  .keyword-button:hover {
    background-color: #f67c87;
    color: white;
  }

  .keyword-button.active {
    background-color: #f67c87;
    filter: drop-shadow(0 0 6px #a8dcc6);
  }

  .title-card {
    position: absolute;
    top: 40%; /* adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    background-color: #d3eee3;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    max-width: 600px;
    color: #ffffff;
    

    border: 5px solid #f3bef1;
    border-radius: 8px;
  }
  .title-card .box-title {
    font-family: "Abril Fatface", cursive;

    color: #7F2B01;
    font-size: clamp(16px, 2vw, 28px);
text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
  }

  .title-card .description {
    color: #7F2B01;
    font-size: 0.9rem;
    line-height: 1.6;
    font-weight: 400;
  }
</style>
