<script>
import * as d3 from 'd3';

import {
    onMount
} from 'svelte';

import digital from "$data/indices/digitalSpaces.csv.json";
import ModalOpen from "../modal/ModalOpen.svelte";
    export let modalContent;
    let modal;
    // Create an object genres that contains the genre and the genre color
    const genres = [
        {
            genre: "Art Project",
            color: "#cadead"
        },
        {
            genre: "Blog",
            color: "#F67C87"
        },
        {
            genre: "Community",
            color: "#F3DF8C"
        },
        {
            genre: "Digital Advocacy",
            color: "#79A5AE"
        },
        {
            genre: "Digital Archive",
            color: "#F3BEF1"
        },
        {
            genre: "Magazine",
            color: "#F7B289"
        },
        {
            genre: "Media",
            color: "#A8DCC6"
        },
        {
            genre: "Photo Project",
            color: "#BEF3E0"
        },
        {
            genre: "Support Group",
            color: "#BED6F3"
        },
        {
            genre: "Virtual Book Club",
            color: "#D1BB80"
        },
        {
            genre: "Media",
            color: "#D08C87"
        },
        {
            genre: "Other",
            color: "#3a3a3a"
        }
    ];

///////////////////////////////////////////////////////////////////////////////
//Blob generation function
///////////////////////////////////////////////////////////////////////////////

function pathGenerator(i,radius = 50) {
        var a = radius; // a is sort of the radius of the blob

        //Generating 4 random numbers by which each vertex can vary.

        var c1 = 7 * Math.random();
        var c2 = 8 * Math.random();
        var c3 = 6 * Math.random();
        var c4 = 7* Math.random();

        var path1 = d3.path();
        path1.moveTo(c1, a / 2 - c1);
        path1.bezierCurveTo(c1, -a / 8 - c3, a - c2, -a / 8 + c4, a - c2, a / 2 - c2);
        path1.bezierCurveTo(a - c2, (9 * a) / 8 + c4,  c1,  (9 * a) / 8 - c3,  c1,  a / 2 - c1);

        // Closing the path
        path1.closePath();
        return path1;
    }
    
    console.log(digital);
    // Go through the data and create a new key for each genre with the value of the color
    digital.forEach(function(d) {
    d.color = "#cadead";
        if (d.genre == 'Art Project') {
            d.color = '#cadead';
        } else if (d.genre == 'Blog') {
            d.color = '#F67C87';
        } else if (d.genre == 'Community') {
            d.color = '#F3DF8C';
        } else if (d.genre == 'Digital Advocacy') {
            d.color = '#79A5AE';
        } else if (d.genre == 'Digital Archive') {
            d.color = '#F3BEF1';
        } else if (d.genre == 'Magazine') {
            d.color = '#F7B289';
        } else if (d.genre == 'Media') {
            d.color = '#A8DCC6';
        } else if (d.genre == 'Photo Project') {
            d.color = '#BEF3E0';
        } else if (d.genre == 'Support Group') {
            d.color = '#BED6F3';
        } else if (d.genre == 'Virtual Book Club') {
            d.color = '#D1BB80';
        } else if (d.genre == 'Media') {
            d.color = '#D08C87';
        }
        else {
            d.color = '#3a3a3a';
        }
    });


// set the dimensions and margins of the graph
const width = 800
const height = 600
onMount(async () => {
    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", 800)
        .attr("height", 700)


const data = digital;


///////////////////////////////////////////////////////////////////////////////
//Blob generation function
///////////////////////////////////////////////////////////////////////////////


    // A scale that gives a X target position for each group
    const x = d3.scaleOrdinal()
        .domain([1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range([50, 100, 150, 200, 250, 300, 350,400, 500])



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

 // Function to display details of a circle when hovered
 node.on("click", function(d, i) {
     
     modal.handleOpen(i, modalContent);
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

  
 
});
</script>
<main>
    <ModalOpen bind:this={modal} />
  
<!-- Section 1 -->
<section class="px-2 w-full py-32 md:px-0">
  <div class=" items-center max-w-7xl  mx-auto ">
    <div class="grid grid-cols-12 items-center sm:-mx-3">
      <div class="w-full col-span-4 ">
        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Digital Spaces</span>
          </h1>
          <div class="flex flex-col gap-2">
            <!-- Create a legend of formats and their colors -->
            {#each genres as genre}
            <div class="flex gap-2 justify-center items-center">
              <div class="mr-2">
                <svg height="30" width="30">
                    <path d={pathGenerator(genre.genre, 30)} fill={genre.color}/>
                  </svg> 
              </div>
              <div class=" flex-1 font-medium ">
                <p class="text-sm">{genre.genre}</p></div>
            </div>  
            {/each}
          </div>
         
          <h3 id="spaceName" class="text-xl font-bold tracking-tight text-gray-900 "> </h3>
          <h4 id="spaceGenre" class="text-base font-bold tracking-tight text-gray-900 "> </h4>
         
        </div>
      </div>
      <div class="w-full col-span-8 ">
        <div class="w-full h-auto ">
          <div id="my_dataviz"></div>

          </div>
      </div>
    
    </div>
  </div>
</section>

</main>