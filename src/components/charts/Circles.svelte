<script>
import * as d3 from 'd3';
import {
    onMount
} from 'svelte';

import digital from "$data/indices/digitalSpaces.csv.json";




// set the dimensions and margins of the graph
const width = 500
const height = 450
onMount(async () => {
    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", 500)
        .attr("height", 450)

 // Get choose top 5 genres from the data based on the number of spaces  
const topGenres = digital.reduce((acc, curr) => {
    if (acc[curr.genre]) {
        acc[curr.genre] += 1;
    } else {
        acc[curr.genre] = 1;
    }
    return acc;
}, {});
// eep only the top 5 genres
const genres = Object.keys(topGenres).sort((a, b) => topGenres[b] - topGenres[a]).slice(0, 3);
const data = digital.filter(d => genres.includes(d.genre));



    // A scale that gives a X target position for each group
    const x = d3.scaleOrdinal()
        .domain([1, 2, 3])
        .range([50, 200, 340])

    // A color scale
    const color = d3.scaleOrdinal()
        .domain([1, 2, 3])
        .range(["#F8766D", "#00BA38", "#619CFF"])

    // Initialize the circle: all located at the center of the svg area


    const node = svg.append("g")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("r", 25)
        .attr("class", "cursor-pointer")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .style("fill", d => color(d.genre))
        .style("fill-opacity", 0.9)

        .call(d3.drag() // call specific function when circle is dragged
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

   let clickCount = 0;
 // Function to display details of a circle when hovered
    node.on("click", (e, d) => {
        clickCount++;
        console.log(d);
        if (clickCount % 2 === 0) {
            d3.select(".details").remove();
        } else {
            // Select id spaceName and add the text of the spaceName
            d3.select("#spaceName").text(d.name);
            d3.select("#spaceGenre").text(d.genre);
            clickCount = 0;
        }
    });
    

    // Features of the forces applied to the nodes:
    var simulation = d3.forceSimulation()
        .force("x", d3.forceX().strength(0.5).x(d => x(d.genre)))
        .force("y", d3.forceY().strength(0.1).y(height / 2))
        .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(8)) // Nodes are attracted one each other of value is > 0
        .force("collide", d3.forceCollide().strength(.1).radius(32).iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation
        .nodes(data)
        .on("tick", function(d) {
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
        });

    // What happens when a circle is dragged?
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(.03).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(.03);
        d.fx = null;
        d.fy = null;
    }


    /// On click, show the details of the space

});
</script>
<main>

  
<!-- Section 1 -->
<section class="px-2 w-full py-32 bg-white md:px-0">
  <div class=" items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div class="grid grid-cols-12 items-center sm:-mx-3">
      <div class="w-full col-span-6 md:w-1/2 md:px-3">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Digital Spaces</span>
          </h1>
         
          <h3 id="spaceName" class="text-xl font-bold tracking-tight text-gray-900 "> </h3>
          <h4 id="spaceGenre" class="text-base font-bold tracking-tight text-gray-900 "> </h4>
         
        </div>
      </div>
      <div class="w-full col-span-6 md:w-1/2">
        <div class="w-full h-auto ">
          <div id="my_dataviz"></div>

          </div>
      </div>
    </div>
  </div>
</section>

</main>