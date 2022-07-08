<script>
import * as d3 from 'd3';

import {
    onMount
} from 'svelte';

import digital from "$data/indices/digitalSpaces.csv.json";
import { append } from 'svelte/internal';


    // A color scale 
    // If genre = 'Digital Spaces' then color = '#cadead'
    // If genre = 'Media' then color = '#F67C87'
    // If genre = 'Art Project' then color = '#F3DF8C'
    // If genre = 'Magazine' then color = '#79A5AE'
    // If genre = 'Blog' then color = '#F3BEF1'
    // If genre = 'Community' then color = '#F7B289'
    // If genre = 'Radio Show' then color = '#F3BEF1'
    console.log(digital);
    // Go through the data and create a new key for each genre with the value of the color
    digital.forEach(function(d) {
    d.color = "#cadead";
        if (d.genre == 'Digital Spaces') {
            d.color = '#cadead';
        } else if (d.genre == 'Media') {
            d.color = '#F67C87';
        } else if (d.genre == 'Art Project') {
            d.color = '#F3DF8C';
        } else if (d.genre == 'Magazine') {
            d.color = '#79A5AE';
        } else if (d.genre == 'Blog') {
            d.color = '#F3BEF1';
        } else if (d.genre == 'Community') {
            d.color = '#F7B289';
        } else if (d.genre == 'Radio Show') {
            d.color = '#F3BEF1';
        }
    });


// set the dimensions and margins of the graph
const width = 700
const height = 600
onMount(async () => {
    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", 800)
        .attr("height", 700)

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
const data = digital;

///////////////////////////////////////////////////////////////////////////////
//Blob generation function
///////////////////////////////////////////////////////////////////////////////

function pathGenerator(i) {
var a = 60; // a is sort of the radius of the blob

//Generating 4 random numbers by which each vertex can vary.

var c1 = 7 * Math.random();
var c2 = 8 * Math.random();
var c3 = 6 * Math.random();
var c4 = 7* Math.random();

var path1 = d3.path();
path1.moveTo(c1, a / 2 - c1);
path1.bezierCurveTo(c1, -a / 8 - c3, a - c2, -a / 8 + c4, a - c2, a / 2 - c2);
path1.bezierCurveTo(a - c2, (9 * a) / 8 - c4,  c1,  (9 * a) / 8 + c3,  c1,  a / 2 - c1);

// Closing the path
path1.closePath();


return path1;
}
///////////////////////////////////////////////////////////////////////////////
//Blob generation function
///////////////////////////////////////////////////////////////////////////////


    // A scale that gives a X target position for each group
    const x = d3.scaleOrdinal()
        .domain([1, 2, 3])
        .range([50, 300, 550])



    const node = svg.append("g")
            .selectAll("g")
            .data(data)
            .enter()
            .append("path")
            .attr("d", function(d,i) {return pathGenerator(i)})
            .attr("transform", 'translate (' + width / 2 + ',' + height / 2+ ')')
            .attr("class", "cursor-pointer")
            .style("fill", d => d.color)
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
    .force("y", d3.forceY().strength(0.1).y( height/2 ))
    .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(3)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(.1).radius(35).iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
    simulation
        .nodes(data)
        .on("tick", function(d) {
            node
          .attr("transform", function(d) {return 'translate (' + d.x + ',' + d.y +')' })
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

    /// Limit how far the circles can be dragged
    function drag_handler(d) {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).attr("cx", d.x = Math.max(50, Math.min(width - 50, d3.event.x))).attr("cy", d.y = Math.max(50, Math.min(height - 50, d3.event.y)));
    }
 
});
</script>
<main>

  
<!-- Section 1 -->
<section class="px-2 w-full py-32 md:px-0">
  <div class=" items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div class="grid grid-cols-12 items-center sm:-mx-3">
      <div class="w-full col-span-2 md:w-1/3 md:px-3">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Digital Spaces</span>
          </h1>
         
          <h3 id="spaceName" class="text-xl font-bold tracking-tight text-gray-900 "> </h3>
          <h4 id="spaceGenre" class="text-base font-bold tracking-tight text-gray-900 "> </h4>
         
        </div>
      </div>
      <div class="w-full col-span-10 md:w-2/3">
        <div class="w-full h-auto ">
          <div id="my_dataviz"></div>

          </div>
      </div>
    </div>
  </div>
</section>

</main>