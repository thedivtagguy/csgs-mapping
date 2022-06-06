<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
// set the dimensions and margins of the graph
const width = 500
const height = 450
onMount(async () => {
// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", 500)
    .attr("height", 450)

// create dummy data -> just one element per circle
const data = [{ "name": "A", "group": 1 }, { "name": "B", "group": 1 }, { "name": "C", "group": 1 }, { "name": "D", "group": 1 }, { "name": "E", "group": 1 }, { "name": "F", "group": 1 },
            { "name": "G", "group": 2 }, { "name": "H", "group": 2 }, { "name": "I", "group": 2 }, { "name": "J", "group": 2 }, { "name": "K", "group": 2 }, { "name": "L", "group": 2 },
            { "name": "M", "group": 3 }, { "name": "N", "group": 3 }, { "name": "O", "group": 3 }]


const blobs = ['"M51.7,-12.6C60.2,9.1,55.3,39.3,37.3,52.7C19.3,66,-11.8,62.6,-34.1,46.5C-56.3,30.4,-69.7,1.7,-62.5,-18.3C-55.4,-38.2,-27.7,-49.5,-3,-48.5C21.7,-47.5,43.3,-34.3,51.7,-12.6Z"',
               '"M45.7,-19.2C52.3,5.5,46,30,29.2,42.8C12.5,55.5,-14.6,56.5,-36.4,42.5C-58.1,28.5,-74.6,-0.5,-67.6,-25.7C-60.6,-50.9,-30.3,-72.2,-5.4,-70.4C19.5,-68.7,39.1,-43.9,45.7,-19.2Z"',
               '"M57.1,-19.7C65,5.8,56.2,35.5,35.3,51.4C14.3,67.3,-18.8,69.4,-40,54.1C-61.3,38.9,-70.7,6.5,-62.1,-20C-53.4,-46.5,-26.7,-67,-1,-66.6C24.6,-66.3,49.2,-45.1,57.1,-19.7Z"']



// A scale that gives a X target position for each group
const x = d3.scaleOrdinal()
  .domain([1, 2, 3])
  .range([50, 200, 340])

// A color scale
const color = d3.scaleOrdinal()
  .domain([1, 2, 3])
  .range([ "#F8766D", "#00BA38", "#619CFF"])

// Initialize the circle: all located at the center of the svg area


const node = svg.append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
    .attr("r", 29)
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .style("fill", d => color(d.group))
    .style("fill-opacity", 0.9)

    .call(d3.drag() // call specific function when circle is dragged
         .on("start", dragstarted)
         .on("drag", dragged)
         .on("end", dragended));

// Features of the forces applied to the nodes:
var simulation = d3.forceSimulation()
    .force("x", d3.forceX().strength(0.5).x(d => x(d.group)))
    .force("y", d3.forceY().strength(0.1).y( height/2 ))
    .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(.1).radius(32).iterations(1)) // Force that avoids circle overlapping

// Apply these forces to the nodes and update their positions.
// Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
simulation
    .nodes(data)
    .on("tick", function(d){
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
          <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Lorem ipsum dolor sit emet.</p>
         
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