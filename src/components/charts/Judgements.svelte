<script>
  import ModalOpen from "../modal/ModalOpen.svelte";
  import judgements from "$data/indices/judgements.csv.json";

  let modal;

  export let title = "";
  export let id = ""; // ID prefix of the chart
  export let modalContent;
  export let dataset = [];
  let data2 = Object.values(judgements);

</script>

<main>
  <section>
    <div class="container">
      <div class="heading">
        <h1 class="text-4xl px-10 uppercase font-bold">{title}</h1>
        <p class="text-gray-700 py-2 px-10 text-sm font-medium">
          Click on {title} to know more
        </p>
      </div>

      <div class="background-Lines">
        <object class="background_lines" data="/assets/lines.svg" />
      </div>
     
      <button class="button button1"  on:click={()=> {
        modal.handleOpen(data2[0], modalContent, id);
      }}>
        <img class="Punjab_Haryana1" src="/assets/Punjab_Haryana.svg" />
        <p class="leading-3 text-xs py-1">Tirath Kaur vs Kirpal Singh</p>
      </button>

      <button class="button button2" on:click={()=> {
        modal.handleOpen(data2[1], modalContent, id);
      }}>
        <img class="SC1" src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Tuka Ram And Anr vs State of Maharashtra</p>
      </button>

      <button class="button button3" on:click={()=> {
        modal.handleOpen(data2[2], modalContent, id);
      }}>
        <img class="SC2" src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Fazal Rab Choudhary vs State of Bihar</p>
      </button>

      <button class="button button4" on:click={()=> {
        modal.handleOpen(data2[4], modalContent, id);
      }}>
        <img class="Delhi1" src="/assets/Delhi HC.svg" />
        <p class="text-xs font-bold leading-3 py-1">Smt Harvinder Kaur vs Harmander Singh Choudhry</p>
      </button>

      <button class="button button5" on:click={()=> {
        modal.handleOpen(data2[3], modalContent, id);
      }}>
        <img class="APHC1" src="/assets/AP HC.svg" />
        <p class="leading-3 text-xs py-1">T Sareetha vs Venkata Subbaiah</p>
      </button>

      <button class="button button6" on:click={()=> {
        modal.handleOpen(data2[5], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Smt Saroj Rani vs Sudarshan Kumar Chadha</p>
      </button>

      <button class="button button7" on:click={()=> {
        modal.handleOpen(data2[6], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Shobha Rani vs Madhukar Reddi</p>
      </button>

      <button class="button button8" on:click={()=> {
        modal.handleOpen(data2[7], modalContent, id);
      }}>
        <img src="/assets/AP HC.svg" />
        <p class="leading-3 text-xs font-bold py-1">Rajam v Manikya Reddy</p>
      </button>

      <button class="button button9" on:click={()=> {
        modal.handleOpen(data2[8], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">Brother John Antony vs The State </p>
      </button>

      <button class="button button10" on:click={()=> {
        modal.handleOpen(data2[9], modalContent, id);
      }}>
        <img src="/assets/MPHC.svg" />
        <p class="leading-3 text-xs py-1">Vibha Shrivastava vs Dinesh Kumar Shrivastava </p>
      </button>

      <button class="button button11" on:click={()=> {
        modal.handleOpen(data2[10], modalContent, id);
      }}>
        <img src="/assets/Odisha.svg" />
        <p class="leading-3 text-xs py-1">Calvin Francis vs State Of Orissa </p>
      </button>

      <button class="button button12" on:click={()=> {
        modal.handleOpen(data2[11], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">SPS Balasubramanyam vs Suruttayan </p>
      </button>

      <button class="button button13" on:click={()=> {
        modal.handleOpen(data2[12], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs font-bold py-1">V Bhagat vs D Bhagat </p>
      </button>
      <button class="button button14" on:click={()=> {
        modal.handleOpen(data2[13], modalContent, id);
      }}>
        <img src="/assets/Punjab_Haryana.svg" />
        <p class="leading-3 text-xs py-1">Mrs Rupan Deol Bajaj & Anr vs Kanwar Pal Singh Gill & Anr </p>
      </button>

      <button class="button button15" on:click={()=> {
        modal.handleOpen(data2[14], modalContent, id);
      }}>
      <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Gaurav Jain vs Union Of India & Ors</p>
      </button>

      <button class="button button16" on:click={()=> {
        modal.handleOpen(data2[15], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Vishaka & Ors vs State Of Rajasthan & Ors</p>
      </button>
      <button class="button button17" on:click={()=> {
        modal.handleOpen(data2[16], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Apparel Export Promotion Council vs AK Chopra </p>
      </button>
      <button class="button button18" on:click={()=> {
        modal.handleOpen(data2[17], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Ms Githa Hariharan & Anr vs Reserve Bank Of India & Anr </p>
      </button>
      <button class="button button19" on:click={()=> {
        modal.handleOpen(data2[18], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Kans Raj vs State Of Punjab & Ors</p>
      </button>
      <button class="button button20" on:click={()=> {
        modal.handleOpen(data2[19], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Lata Wadhwa & others vs State of Bihar</p>
      </button>
      <button class="button button21" on:click={()=> {
        modal.handleOpen(data2[20], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Mohd Hoshan, AP & Anr vs State Of AP</p>
      </button>

      <button class="button button22" on:click={()=> {
        modal.handleOpen(data2[21], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Uday vs State Of Karnataka </p>
      </button>
      <button class="button button23" on:click={()=> {
        modal.handleOpen(data2[22], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Sakshi vs Union Of India</p>
      </button>
      <button class="button button24" on:click={()=> {
        modal.handleOpen(data2[23], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Deelip Singh @ Dilip Kumar vs State Of Bihar </p>
      </button>
      <button class="button button25" on:click={()=> {
        modal.handleOpen(data2[24], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Naveen Kohli vs Neelu Kohli</p>
      </button>
      <button class="button button26" on:click={()=> {
        modal.handleOpen(data2[25], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Lata Singh vs State of Uttar Pradesh </p>
      </button>
      <button class="button button27" on:click={()=> {
        modal.handleOpen(data2[26], modalContent, id);
      }}>
        <img src="/assets/Gauhati HC.svg" />
        <p class="leading-3 text-xs py-1">Bipul Medhi vs State Of Assam </p>
      </button>
      <button class="button button28" on:click={()=> {
        modal.handleOpen(data2[27], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">Jayalakshmi vs The State Of Tamil Nadu </p>
      </button>
      <button class="button button29" on:click={()=> {
        modal.handleOpen(data2[28], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Anuj Garg & Ors vs Hotel Association Of India & Ors</p>
      </button>
      <button class="button button30" on:click={()=> {
        modal.handleOpen(data2[29], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">S.Khusboo vs Kanniammal </p>
      </button>
      <button class="button button31" on:click={()=> {
        modal.handleOpen(data2[30], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">National Insurance Co Ltd v Minor Deepika </p>
      </button>
      <button class="button button32" on:click={()=> {
        modal.handleOpen(data2[30], modalContent, id);
      }}>
        <img src="/assets/Delhi HC.svg" />
        <p class="leading-3 text-xs py-1">Prof Bidyug Chakraborty vs Delhi University & Ors</p>
      </button>
      <button class="button button33" on:click={()=> {
        modal.handleOpen(data2[31], modalContent, id);
      }}>
        <img src="/assets/Delhi HC.svg" />
        <p class="leading-3 text-xs py-1">Naz Foundation vs Government Of Nct Of Delhi</p>
      </button>

    </div>
  </section>
  <ModalOpen bind:this={modal} />
</main>

<style>
  .container {
    width: 4600px;
    height: 740px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(85, 50px);
    grid-template-rows: repeat(15, 50px);
    overflow-x: scroll;
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
    
    grid-area: 10/1/13/3;
  }
  .button2 {
    padding-left: 15px;
    grid-area: 5/3/7/5;
  }

  .button3 {
    
    grid-area: 9/4/11/6;
  }

  .button4 {
    padding-top:30px;
    padding-left: 10px;
    grid-area: 2/5/4/7;
  }

  .button5 {
    padding-left: 25px;
    padding-top: 10px;;
        grid-area: 12/3/14/5;
  }
  .button6 {
     
    grid-area: 12/5/16/7;
  }

  .button7 {
    
        grid-area: 5/6/8/9;
  }

  .button8 {
    padding-top: 20px;
    padding-right: 30px;
    grid-area: 9/7/10/10;
  }
  .button9 {
    
    grid-area: 3/8/6/10;
  }
  .button10 {
    padding-left:15px;
    grid-area: 8/8/9/11;
  }
  .button11 {
    padding-left:35px;
    grid-area: 5/9/7/11;
  }
  .button12 {
    padding-left:10px;
    grid-area: 12/10/13/12;
  }
  .button13 {
    padding-left:10px;
    grid-area: 2/10/4/12;
  }
  .button14 {
    padding-left:10px;
    grid-area: 9/11/11/14;
  }
  .button15 {
    grid-area: 11/13/12/15;
  }
  .button16 {
    padding-top: 15px;
    grid-area: 2/13/3/15;
  }
  .button17 {
    padding-top: 15px;
    grid-area: 3/15/5/17;
  }
  .button18 {
    padding-top: 15px;
    grid-area: 12/15/14/17;
  }
  .button19 {
    padding-top: 15px;
    padding-left: 5px;
    grid-area: 10/16/11/18;
  }
  .button20 {
    padding-left: 25px;
  grid-area: 5/17/7/19;
  }
  .button21 {
    padding-top: 15px;
    padding-left: 27px;
  grid-area: 8/18/10/21;
  }
  .button22 {
   
    padding-left: 10px;
  grid-area: 2/20/5/22;
  }

  .button23 {
   
   padding-left: 10px;
 grid-area: 5/21/6/24;
 }
 .button24 {
    grid-area: 11/20/13/23;
 }
 .button25 {
    grid-area: 4/24/7/26;
 }
 .button26 {
  padding-top: 20px;
    grid-area: 9/23/11/25;
 }
 .button27 {
  padding-top: 10px;
    grid-area: 11/23/14/25;
 }
 .button28 {
  padding-left: 15px;
padding-top: 15px;
    grid-area: 2/25/4/28;
 }
 .button29 {
  padding-left: 15px;
    grid-area: 9/25/12/28;
 }
 .button30 {
  padding-left: 35px;
  padding-top: 25px;
    grid-area: 4/26/7/29;
 }
 .button31 {
  
    grid-area: 2/28/4/31;
 }
 .button32 {
  padding-top: 20px;
  padding-right: 40px;
    grid-area: 11/27/14/30;
 }
 .button33 {
  padding-right: 10px;
  padding-top: 20px;
        grid-area: 13/28/15/31;
 }

  .background-Lines {
    z-index: 1;
    grid-area: 2/ 1/ 10/ 63;
  }
  .button:hover {
    -ms-transform: scale(1.1em);
    -webkit-transform: scale(1.1);
    tansform: scale(1.1);
    font-weight: 500;
  }
  .button img:hover {
    filter: drop-shadow(1px 1px 0px #3a3a3a) drop-shadow(-1px 1px 0px #3a3a3a) drop-shadow(1px -1px 0px #3a3a3a) drop-shadow(-1px -1px 0px #3a3a3a);
  }

  .button {
    z-index: 9;
    color: #3a3a3a;
    text-align: center;
    font-family: Roboto;
    font-size: 6px;
    line-height: 0.6rem;
    font-weight: 400;
  }
  .button img {
    display: inline;
    vertical-align: middle;
  }
</style>
