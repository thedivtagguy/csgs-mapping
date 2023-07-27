<script>
  import ModalOpen from "../modal/ModalOpen.svelte";
  export let title = "";
  let modal;
  export let dataset = [];
  export let id = ""; // ID prefix of the chart
  export let sortBy = "year"; // What do we want to sort by?
  export let modalContent;
</script>

<main>
  <section>
    <div class="container">
      <div class="heading">
        <h1 class="text-4xl px-10 uppercase font-bold">{title}</h1>
        <p class="text-gray-700 py-4 px-10 text-sm font-medium">
          Click on {title} to know more
        </p>
      </div>
      <!--
          <div class = "timelines">
            <svg>
          <line
            
            x1="8"
            y1="734"
            x2="8"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            
            x1="71"
            y1="734"
            x2="71"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            
            x1="141"
            y1="734"
            x2="141"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            
            x1="358"
            y1="734"
            x2="358"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            
            x1="782"
            y1="734"
            x2="782"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            
            x1="1499"
            y1="734"
            x2="1499"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            
            x1="3102"
            y1="734"
            x2="3102"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
        </svg>
        
      </div> -->
      <div class = "background-Lines">
        <object class ="background_lines" data="/assets/lines.svg"/>
      </div>

      

      
      <div class="button button1">
        <!-- svelte-ignore a11y-missing-attribute -->

        <object class ="Punjab_Haryana1" data="/assets/Punjab_Haryana.svg" />
        <p class="leading-4 text-sm">Tirath Kaur vs Kirpal Singh</p>
      </div>
      <div class="button button2">
        <!-- svelte-ignore a11y-missing-attribute -->

        <object class="SC1" data="/assets/SC.svg" />
        <p class="leading-4 text-sm">Tuka Ram And Anr vs State of Maharashtra</p>
      </div>

      
    </div>
  </section>
</main>


<style>
  
  
  .container {
    
    width: 5000px;
    height: 750px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(63, 80px);
    grid-template-rows: repeat(10, 75px);
    overflow-y: scroll;
  }
  .heading{
    grid-area: 1/ 1/ 3/ 50;
    z-index: 10;
  }
  
  svg {
    display: block;
    overflow: visible;
  }

.button1{
  grid-area: 4/1/4/1;
  }
  .button2{
  grid-area: 4/3/5/4;
  }
  .background-Lines {
    
    z-index: 1;
    grid-area: 1/ 1/ 10/ 63;
  }
  .button:hover {
    -ms-transform: scale(1.1em);
    -webkit-transform: scale(1.1);
    tansform: scale(1.1);
  }
  .button object:hover {
    filter: drop-shadow(-1px -1px 0px #3a3a3a) drop-shadow(1px -1px 0px #3a3a3a)
      drop-shadow(1px 1px 0px #3a3a3a) drop-shadow(-1px 1px 0px #3a3a3a);
  }
  
  .button {
    z-index: 13;
    color: #3a3a3a;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    line-height: 0.6rem;
    font-weight: 400;
  }
  .button object{
    display: inline;
    vertical-align: middle;
  }
</style>
