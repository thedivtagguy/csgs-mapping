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

      <div class="background-Lines">
        <object class="background_lines" data="/assets/lines.svg" />
      </div>

      <div class="button button1">
        <object class="Punjab_Haryana1" data="/assets/Punjab_Haryana.svg" />
        <p class="leading-4 text-sm">Tirath Kaur vs Kirpal Singh</p>
      </div>

      <div class="button button2">
        <object class="SC1" data="/assets/SC.svg" />
        <p class="leading-4 text-sm">Tuka Ram And Anr vs State of Maharashtra</p>
      </div>

      <div class="button button3">
        <object class="SC2" data="/assets/SC.svg" />
        <p class="leading-4 text-sm">Fazal Rab Choudhary vs State of Bihar</p>
      </div>

      <div class="button button4">
        <object class="Punjab_Haryana2" data="/assets/Punjab_Haryana.svg" />
        <p class="leading-4 text-sm">Smt Harvinder Kaur vs Harmander Singh Choudhry</p>
      </div>
      <div class="button button5">
        <object class="APHC1" data="/assets/AP HC.svg" />
        <p class="leading-4 text-sm">T Sareetha vs Venkata Subbaiah</p>
      </div>
    </div>
  </section>
</main>

<style>
  .container {
    width: 5000px;
    height: 780px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(63, 80px);
    grid-template-rows: repeat(10, 78px);
  }
  .heading {
    grid-area: 1/ 1/ 2/ 50;
    z-index: 10;
  }

  svg {
    display: block;
    overflow: visible;
  }

  .button1 {
    padding-left: 15px;
    grid-area: 7/1/8/2;
  }
  .button2 {
    grid-area: 4/2/4/4;
  }

  .button3 {
    padding-right: 15px;
    padding-top: 20px;
    grid-area: 6/3/7/4;
  }

  .button4 {
    padding-top: 20px;
  padding-left: 25px;
    grid-area: 2/3/2/5;
  }

  .button5 {
    padding-top: 40px;
    padding-left: 20px;
    grid-area: 8/2/10/4;
  }

  .background-Lines {
    z-index: 1;
    grid-area: 2/ 1/ 10/ 63;
  }
  .button:hover {
    -ms-transform: scale(1.1em);
    -webkit-transform: scale(1.1);
    tansform: scale(1.1);
  }
  /*.button object:hover {
    filter: drop-shadow(-1px -1px 0px #3a3a3a) drop-shadow(1px -1px 0px #3a3a3a)
      drop-shadow(1px 1px 0px #3a3a3a) drop-shadow(-1px 1px 0px #3a3a3a);
  }*/

  .button {
    z-index: 13;
    color: #3a3a3a;
    text-align: center;
    font-family: Roboto;
    font-size: 9px;
    line-height: 0.6rem;
    font-weight: 400;
  }
  .button object {
    display: inline;
    vertical-align: middle;
  }
</style>
