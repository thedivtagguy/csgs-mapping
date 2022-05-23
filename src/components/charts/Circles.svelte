<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
// set the dimensions and margins of the graph
const width = 1000
const height = 450
onMount(async () => {
// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", 1000)
    .attr("height", 450)

// create dummy data -> just one element per circle
const data = [{ "name": "A", "group": 1 }, { "name": "B", "group": 1 }, { "name": "C", "group": 1 }, { "name": "D", "group": 1 }, { "name": "E", "group": 1 }, { "name": "F", "group": 1 },
            { "name": "G", "group": 2 }, { "name": "H", "group": 2 }, { "name": "I", "group": 2 }, { "name": "J", "group": 2 }, { "name": "K", "group": 2 }, { "name": "L", "group": 2 },
            { "name": "M", "group": 3 }, { "name": "N", "group": 3 }, { "name": "O", "group": 3 }]

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
<main><div id="my_dataviz"></div></main>