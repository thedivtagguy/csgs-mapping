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
  export let modalContent;
  export let dataset = [];
  let data2 = Object.values(judgements);

  let facet1 = "keyword";
  let selected2;
  export let direction = "left";

  let facets2 = [];
  facets2 = dataset.map((d) => d[facet1]).filter((v, i, a) => a.indexOf(v) === i);
  // Remove empty facets
  facets2.forEach((d) => {
    if (d === "") {
      facets2.splice(facets2.indexOf(d), 1);
    }
  });
  facets2.unshift(`All ${facet1}s`);

  ////text wrap function////////////////////////////////////////////////////////////////////////////////

  function wrap(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        x = text.attr("x"),
        y = text.attr("y"),
        dy = 5.5,
        //parseFloat(text.attr("dy")),
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em");
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }
  /////////////////////////////////////////////////////////////////////////
  onMount(async () => {
    // Check mobile device
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

    let width = 4400;
    let widthMobile = 3300;
    let height = 680;

    let amountToScroll = width - window.innerWidth+100;
    let amountToScrollMobile = 0;
    
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline;
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 800px)", () => {

    gsap.to("#timeline", {
      x: -amountToScroll,
      duration: 15,

      scrollTrigger: {
        trigger: ".judgementscontainer",

        start: "100 20%",

        end: "+=" + amountToScroll,
        pin: true,
        pinSpacing: true,
        scrub: true,
        markers: false,

        
      }
    });
  })

    
    // Check if mobile device

    if (mobileCheck()) {
      width = widthMobile;
      height = window.innerHeight / 1.5;
    
    }

    let svg;
    // Check if mobile device
    if (window.mobileCheck()) {
      svg = d3
        .select("#judgementsblock")
        .append("svg")
        .attr("width", widthMobile)
        .attr("height", height);
    } else {
      svg = d3.select("#judgementsblock").append("svg").attr("width", width).attr("height", height);
    }
    const data = data2;

    const node2 = svg.selectAll("g").data(data).enter().append("g");

    node2
      .append("svg:image")
      .attr("class", "drawing")
      .attr("xlink:href", (d) => d.asset)
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y);

    node2
      .append("text")
      .attr("class", "words")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("transform", "translate(20, 0)")
      .attr("fill", "#3a3a3a")
      .attr("font-family", "Roboto")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")

      .text((d) => d.judgement)
      .call(wrap, 120);

    node2
      .attr("class", function (d) {
        return "blob2 " + d.keyword.replaceAll(" ", "_").replaceAll("'", "2").replaceAll("/", "3");
      })
      .on("mouseover", function (d) {
        this.parentNode.parentNode.appendChild(this.parentNode);
        this.parentNode.parentNode.parentNode.appendChild(this.parentNode.parentNode);
        d3.select(this).selectAll(".words").style("font-weight", "500");

        d3.select(this)
          .selectAll(".drawing")
          .attr("style", "filter: drop-shadow(0px 0px 1px rgba(30,30,30,1))");
      })
      .on("mouseout", function (d) {
        d3.select(this).style("cursor", "pointer").selectAll(".words").style("font-weight", "400");
        d3.select(this)
          .selectAll(".drawing")
          .attr("style", "filter: drop-shadow(0px 0px 0px rgba(30,30,30,0.0))");
      });

    d3.selectAll("#facets2").on("change", function () {
      d3.selectAll(".blob2")

        .style("opacity", function (d) {
          if (selected2 == "All keywords") {
            return 1;
          } else {
            return 0.1;
          }
        })
        .style("pointer-events", function (d) {
          if (selected2 === "All keywords") {
            return "all";
          } else {
            return "none";
          }
        });

      d3.selectAll("." + selected2.replaceAll(" ", "_").replaceAll("'", "2").replaceAll("/", "3"))

        .style("opacity", 1)
        .style("pointer-events", "all");
    });

    node2.on("click", function (d, i) {
      modal.handleOpen(i, modalContent);
    });
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<ModalOpen bind:this={modal} />
<main>
 
  <section>
    <div class="judgementscontainer">
      
      <div class="heading">
        <h1 class="text-4xl px-10 uppercase font-bold">{title}</h1>
        <p class="text-gray-700 py-2 px-10 text-sm font-medium">
          Click on {title} to know more
        </p>
      </div>

      <div class="chart relative md:flex">
        <div
          id="facets2"
          class="md:flex z-10 hidden {direction}-4 md:absolute flex-col gap-8 justify-start pb-8 my-1"
        >
          <select bind:value={selected2} class="rounded-none">
            {#each facets2 as facet1}
              <option class="capitalize" value={facet1}>
                {facet1}
              </option>
            {/each}
          </select>
        </div>
      </div>

      <div id="timelinewrapper">
        
        <div id="timeline">
          
          <object class="background_lines" data="/assets/lines.svg" />
          <div id="judgementsblock" />
          
        </div>
        
      </div>
      
    </div>
    
  </section>
  
</main>

<style>
  .judgementscontainer {
    
    display: grid;
    grid-template-columns: repeat(85, 50px);
    grid-template-rows: repeat(15, 50px);
    

    
  }
  #timelinewrapper{
    width: 100vw;
    height: 700px;
    position: relative;
    overflow-x: auto;
  }
  #timeline {
    grid-column-start: 1;
    grid-row-start: 1;
    position: absolute;
    
  }

  #timeline .background_lines {
    position: absolute;

    z-index: -1;
  }
  #timeline #judgementsblock svg {
    position: absolute;
    z-index: 4;
  }
  .chart {
    grid-area: 1/14/2/19;
  }
  .heading {
    grid-area: 1/ 1/ 2/ 152;
    z-index: 10;
  }
  .background_lines {
    position: relative;
    z-index: -1;
  }

  

  .label-text {
    font-size: 5px;
    color: #3a3a3a;
  }

  select {
    display: flex;
    box-sizing: border-box;
    padding: 0.5em 1em 0.5em 0.5em;
    border: 0px solid #f1cfe2;
    font: inherit;
    font-size: 95%;
    line-height: inherit;
    color: #3a3a3a;
    font-weight: 500;
    background-color: var(--color-orange);
    text-transform: capitalize;
  }
</style>
