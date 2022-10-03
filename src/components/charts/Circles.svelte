<script>

import * as d3 from 'd3';


import {
    onMount
} from 'svelte';

import digital from "$data/indices/digitalSpaces.csv.json";
import ModalOpen from "../modal/ModalOpen.svelte";
import { data } from './Tooltip.svelte';


    export let modalContent;
    let modal;
    let selected;
    let facet = "keyword";
    export let direction = "right";

    
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
            color: "#D08C87"
        },
        {
            genre: "Support Group",
            color: "#C0AAAF"
        },
        {
            genre: "Virtual Book Club",
            color: "#D1BB80"
        },
        
        {
            genre: "Other",
            color: "#3a3a3a"
        }
    ];

///////////////////////////////////////////////////////////////////////////////
//Blob generation function
///////////////////////////////////////////////////////////////////////////////

function pathGenerator(i, radius) {
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
            d.color = '#D08C87';
        } else if (d.genre == 'Support Group') {
            d.color = '#C0AAAF';
        } else if (d.genre == 'Virtual Book Club') {
            d.color = '#D1BB80';
        } else if (d.genre == 'Media') {
            d.color = '#D08C87';
        }
        else {
            d.color = '#3a3a3a';
        }
    });


onMount(async () => {

    // Check mobile device
    window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    // Check if mobile device

    let  width = 650;
    let height = 600;
    let dividedBy = 2;
    let avoidOverlapRadius = 28;
    let nodeRadius = 50;
    let defaultRange = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250];


    if (mobileCheck()) {
        width = window.innerWidth;
        height = window.innerHeight/1.4;
        dividedBy = 2.5;
        avoidOverlapRadius = 23;
        nodeRadius = 45;

        defaultRange = [0, 10, 30, 50, 70, 90, 110, 130, 150, 190, 210, 230, 250];
    }


    let svg;
    // Check if mobile device
    if (window.mobileCheck()) {
        svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
    } else {
        svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width)
        .attr("height", 650)
    }
    // append the svg object to the body of the page
   



const data = digital;
//keyword);
//console.log(droppingdown);
selected = {selected}
console.log(selected);

	



	// Convert that to an array of objects
	let data2 = Object.values(data);
console.log(data2);


///////////////////////////////////////////////////////////////////////////////
//Blob generation function
///////////////////////////////////////////////////////////////////////////////


    // A scale that gives a Y target position for each group
    const ordering = d3.scaleOrdinal()
        .domain([1, 2, 3, 4, 5, 6, 7, 8, 9])
        .range(defaultRange)



    const node = svg.append("g")
            .selectAll("g")
            .data(data)
            .enter()
            .append("path")
            .attr("d", function(d,i) {return pathGenerator(i, nodeRadius)})
            .attr("transform", 'translate (' + width / 2 + ',' + height / 2+ ')')
            .attr("class", "cursor-pointer")
            .style("fill", d => d.color)
            .style("fill-opacity", 1)
            .on('mouseover', function (d) {
                this.parentNode.parentNode.appendChild(this.parentNode);      	    
                    this.parentNode.parentNode.parentNode.appendChild(this.parentNode.parentNode);
                        d3.select(this).style('stroke', '#3a3a3a').style('stroke-width', '2px') ;
                })
            .on('mouseout', function (d) {
                        d3.select(this).style('stroke-width', '0px') ;
                })
            

        .call(d3.drag() // call specific function when circle is dragged
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

 
 
 node.on("click", function(d, i) {
     
     modal.handleOpen(i, modalContent);
 });
 
 node.on("mouseenter", function(d, i) {
    tooltip(i);
     });
 node.on("mouseleave", function(d, i) {
    nameVar = null;
      
 });







// Features of the forces applied to the nodes:
var simulation = d3.forceSimulation()
    .force("x", d3.forceX().strength(0.1).x(width))
    .force("y", d3.forceY().strength(0.3).y( d => ordering(d.genre) ))
    .force("center", d3.forceCenter().x(width / dividedBy).y(height /2)) // Attraction to the center of the svg area
    .force("charge", d3.forceManyBody().strength(2)) // Nodes are attracted one each other of value is > 0
    .force("collide", d3.forceCollide().strength(.5).radius(avoidOverlapRadius).iterations(1)) // Force that avoids circle overlapping

    // Apply these forces to the nodes and update their positions.
    // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.

    // Start simulation only when section is in view
    simulation
        .nodes(data)
        .on("tick", function(d) {
            node
          .attr("transform", function(d) {return 'translate (' + d.x + ',' + d.y +')' });
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
let facets = [];
    facets = digital.map(d => d[facet]).filter((v, i, a) => a.indexOf(v) === i);
	// Remove empty facets
	facets.forEach(d => {
		if (d === '') {
			facets.splice(facets.indexOf(d), 1);
		}
	});
    

	
    facets.unshift(`All ${facet}s`);
	


let m = { x: 0, y: 0, offsetX: 0, offsetY: 0 };

	function handleMousemove(event) {
		m.x = event.clientX - 200;
		m.y = event.clientY;
		m.offsetX = event.offsetX;
		m.offsetY = event.offsetY;
	}
	
	let nameVar = null;

	let positionX, positionY = [10, 10]
	// Function tooltip to display the data of the selected bar
	function tooltip(d) {
		nameVar = d.name;
		// Position it right next to the bar
		positionX = 800 - m.offsetX - 80;
		positionY = m.offsetY - 70;
        }
</script>
<main>
    <ModalOpen bind:this={modal} />
  
<!-- Section 1 -->
<section class="md:px-8 w-full md:py-8 md:px-0">
  <div class=" items-center max-w-7xl  mx-auto ">
    <div class="grid md:grid-cols-12 items-center sm:-mx-3">
      <div class="w-full col-span-7 md:col-span-3 ">
        <div class="px-8 w-full pb-6 space-y-2 sm:max-w-md lg:max-w-lg md:space-y-2 lg:space-y-8 xl:space-y-2 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 class="text-4xl uppercase font-bold">
            <span class="block xl:inline">Digital Spaces</span>
          </h1>
          <div class="flex md:flex-col w-full flex-wrap gap-2">
            <p class="text-gray-700 text-sm font-medium py-2" >
				This chart shows digital spaces by genre. Use the dropdown to filter by keyword or click on a blob to read more
			</p>
            <!-- Create a legend of formats and their colors -->
            {#each genres as genre}
            <div class="flex flex-wrap gap-1 justify-center items-center">
              <div class=" hidden md:block">
                <svg height="30" width="30">
                    <path d={pathGenerator(genre.genre, 30)} fill={genre.color}/>
                </svg> 
              </div>
              <div class=" hidden md:block flex-1 font-regular ">
                <p class=" text-gray-700 text-sm">{genre.genre}</p>
              </div>
            
                <div class="flex flex-wrap md:hidden">
                    <div style="background-color: {genre.color}; width: 100%;" class="py-1 px-2">{genre.genre}</div>
                </div>
            </div>  
            {/each}
          </div>
       
        </div>
      </div>
      
      <div   on:mousemove={handleMousemove} class="w-full max-w-6xl relative col-span-9 ">
        <div class="w-full h-auto ">
            
				<div 
				id="infobox"
				style="
                visibility: {nameVar || positionX == 710 ? 'visible' : 'hidden'};
                top: {positionY}px;
				right: {positionX}px;
				background-color: var(--color-background);
				z-index: 3;"
				class="border-[1px] px-4 py-2 w-1/3 shadow-lg border-gray-400 border-dashed absolute">
					<div class="flex flex-col w-full justify-start items-start">
						<div class="text-gray-600 text-sm">
							<p class="font-bold text-sm">
								{#if nameVar}
									{nameVar}
								{:else}
								Hover the chart to begin
								{/if}
							</p>
						</div>
						
					</div>
				</div>
                <div class="chart relative" >
                    <div id="facets" class="md:flex z-10 hidden {direction}-0 md:absolute flex-col gap-8 justify-start pb-8my-8">
                        <select bind:value={selected} class="rounded-none" >
                            {#each facets as facet}
                                <option class="capitalize" value={facet}>
                                    {facet}
                                </option>
                            {/each}
                        </select>
                    
                    </div>
    
                    <div>
          <div id="my_dataviz">
            <g class='bars'>
                {#each data as point, i}
                    {#each {length: point[0].totalCount} as book, j}
                    
                    <path 
                        style="opacity:{
                            // If selected is equal to null, opacity if full. If selected is not null and not equal to the facet, opacity is 0.1
                            selected === `All ${facet}s` ? 1 : selected !== point[j][facet] ? 0.2 : 1								
                            };
                            pointer-events: {
                                // If selected is equal to null, pointer events are all. If selected is not null and not equal to the facet, pointer events are none.
                                selected === `All ${facet}s` ? 'all' : selected !== point[j][facet] ? 'none' : 'all'
                            };
                            -webkit-filter: {
                                // If selected is equal to null, filter is none. If selected is not null and not equal to the facet, filter is blur.
                                selected === `All ${facet}s` ? 'none' : selected !== point[j][facet] ? 'none' : 'drop-shadow(0px 0px 2px rgba(40,40,40,0.6))'
                            };
                        ">
                    </path>
						

                    {/each}
                {/each}
                </g>
                        
          </div>

          </div>
      </div>
    
    </div>
  </div>
</section>

</main>
<style>
    .cursor-pointer:hover{
  cursor: pointer;
  stroke: #3a3a3a;
  stroke-width: 0.1em;
}
   select::-ms-expand {
  display: none;
}
select {
    display: inline-block;
    box-sizing: border-box;
    padding: 0.5em 1em 0.5em 0.5em;
    border: 0px solid #f1cfe2;
    font: inherit;
    line-height: inherit;
    color:#3a3a3a;
    font-weight: 500;
    background-color: var(--color-orange);
    text-transform: capitalize;
  
  }
  option {
		text-transform: capitalize;
	}


</style>