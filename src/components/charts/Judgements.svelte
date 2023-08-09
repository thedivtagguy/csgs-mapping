<script>
  import ModalOpen from "../modal/ModalOpen.svelte";
  import judgements from "$data/indices/judgements.csv.json";

  let modal;

  export let title = "";
  export let id = ""; // ID prefix of the chart
  export let modalContent;
  export let dataset = [];
  let data2 = Object.values(judgements);
  let facet = "keyword1";
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
        modal.handleOpen(data2[31], modalContent, id);
      }}>
        <img src="/assets/Delhi HC.svg" />
        <p class="leading-3 text-xs py-1">Prof Bidyug Chakraborty vs Delhi University & Ors</p>
      </button>
      <button class="button button33" on:click={()=> {
        modal.handleOpen(data2[32], modalContent, id);
      }}>
        <img src="/assets/Delhi HC.svg" />
        <p class="leading-3 text-xs py-1">Naz Foundation vs Government Of Nct Of Delhi</p>
      </button>

      <button class="button button34" on:click={()=> {
        modal.handleOpen(data2[33], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Arun Kumar Agrawal and Anr v National Insurance Company and Ors</p>
      </button>

      <button class="button button35" on:click={()=> {
        modal.handleOpen(data2[34], modalContent, id);
      }}>
        <img src="/assets/Calcutta HC.svg" />
        <p class="leading-3 text-xs py-1">Chand Mohan Sammader vs The State Of West Bengal </p>
      </button>

      <button class="button button36" on:click={()=> {
        modal.handleOpen(data2[35], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Arumugam Servai vs State Of T.Nadu </p>
      </button>

      <button class="button button37" on:click={()=> {
        modal.handleOpen(data2[36], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Bhagwan Das vs State of Delhi </p>
      </button>

      <button class="button button38" on:click={()=> {
        modal.handleOpen(data2[37], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Suresh Kumar Koushal & Anr vs Naz Foundation & Ors</p>
      </button>
      <button class="button button39" on:click={()=> {
        modal.handleOpen(data2[38], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">National Legal Ser.Auth vs Union Of India & Ors</p>
      </button>

      <button class="button button40" on:click={()=> {
        modal.handleOpen(data2[39], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">Jackuline Mary vs Superintendent of Police </p>
      </button>

      <button class="button button41" on:click={()=> {
        modal.handleOpen(data2[40], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">S Swapna (Transgender) vs The State Of Tamil Nadu</p>
      </button>

      <button class="button button42" on:click={()=> {
        modal.handleOpen(data2[41], modalContent, id);
      }}>
        <img src="/assets/Calcutta HC.svg" />
        <p class="leading-3 text-xs py-1">Pinky Pramanik vs State of West Bengal</p>
      </button>

      <button class="button button43" on:click={()=> {
        modal.handleOpen(data2[42], modalContent, id);
      }}>
        <img src="/assets/Allahabad HC.svg" />
        <p class="leading-3 text-xs py-1">Smt Noor Jahan Begum @ Anjali vs State of UP </p>
      </button>

      <button class="button button44" on:click={()=> {
        modal.handleOpen(data2[43], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Dhannulal & Ors vs Ganeshram And Anr</p>
      </button>
      <button class="button button45" on:click={()=> {
        modal.handleOpen(data2[44], modalContent, id);
      }}>
        <img src="/assets/Delhi HC.svg" />
        <p class="leading-3 text-xs py-1">Shivani Bhat vs State Of Nct Of Delhi & Ors</p>
      </button>

      <button class="button button46" on:click={()=> {
        modal.handleOpen(data2[45], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">K Prithika Yashini & Ors vs The Chairman</p>
      </button>

      <button class="button button47" on:click={()=> {
        modal.handleOpen(data2[46], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Vikas Yadav vs State of UP</p>
      </button>

      <button class="button button48" on:click={()=> {
        modal.handleOpen(data2[47], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Narendra vs K Meena</p>
      </button>

      <button class="button button49" on:click={()=> {
        modal.handleOpen(data2[48], modalContent, id);
      }}>
        <img src="/assets/Gujarat HC.svg" />
        <p class="leading-3 text-xs py-1">Vinod @ Vijay Bhagubhai Patel vs State Of Gujarat</p>
      </button>

      <button class="button button50" on:click={()=> {
        modal.handleOpen(data2[49], modalContent, id);
      }}>
        <img src="/assets/Kerala HC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Shafin Jahan vs Asokan K M </p>
      </button>
      <button class="button button51" on:click={()=> {
        modal.handleOpen(data2[50], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Shayara Bano vs Union of India & others </p>
      </button>

      <button class="button button52" on:click={()=> {
        modal.handleOpen(data2[51], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Justice K S Puttaswamy (Retd) & Ors vs Union Of India & Ors</p>
      </button>
      <button class="button button53" on:click={()=> {
        modal.handleOpen(data2[52], modalContent, id);
      }}>
        <img src="/assets/Kerala HC.svg" />
        <p class="leading-3 text-xs py-1">Anees Hameed vs State of Kerala </p>
      </button>
      <button class="button button54" on:click={()=> {
        modal.handleOpen(data2[53], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Independent Thought vs Union of India & Anr</p>
      </button>

      <button class="button button55" on:click={()=> {
        modal.handleOpen(data2[54], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Soni Gerry vs Gerry Douglas </p>
      </button>

      <button class="button button56" on:click={()=> {
        modal.handleOpen(data2[55], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Shafin Jahan vs Asokan K M </p>
      </button>

      <button class="button button57" on:click={()=> {
        modal.handleOpen(data2[56], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Shakti Vahini vs Union of India </p>
      </button>
      
      <button class="button button58" on:click={()=> {
        modal.handleOpen(data2[57], modalContent, id);
      }}>
        <img src="/assets/Uttarakhand HC.svg" />
        <p class="leading-3 text-xs py-1">Girish Kumar Sharma vs State of Uttarakhand</p>
      </button>

      <button class="button button59" on:click={()=> {
        modal.handleOpen(data2[58], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Joseph Shine v Union of India</p>
      </button>

      <button class="button button60" on:click={()=> {
        modal.handleOpen(data2[59], modalContent, id);
      }}>
        <img src="/assets/Punjab_Haryana.svg" />
        <p class="leading-3 text-xs py-1">A And Anr vs State of Haryana and Ors </p>
      </button>

      <button class="button button61" on:click={()=> {
        modal.handleOpen(data2[60], modalContent, id);
      }}>
        <img src="/assets/Maharashtra HC.svg" />
        <p class="leading-3 text-xs py-1">The State of Maharashtra vs Vijay Dhondiram Shinde</p>
      </button>

      <button class="button button62" on:click={()=> {
        modal.handleOpen(data2[61], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Navtej Singh Johar vs Union Of India</p>
      </button>

      <button class="button button63" on:click={()=> {
        modal.handleOpen(data2[62], modalContent, id);
      }}>
        <img src="/assets/Kerala HC.svg" />
        <p class="leading-3 text-xs py-1">Sreeja S vs The Commissioner of Police </p>
      </button>

      <button class="button button64" on:click={()=> {
        modal.handleOpen(data2[63], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Justice Puttuswamy vs Union of India</p>
      </button>

      <button class="button button65" on:click={()=> {
        modal.handleOpen(data2[64], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Indian Young Lawyers Association vs The State Of Kerala</p>
      </button>

      <button class="button button66" on:click={()=> {
        modal.handleOpen(data2[65], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Lalita Toppo vs The State Of Jharkhand</p>
      </button>

      <button class="button button67" on:click={()=> {
        modal.handleOpen(data2[66], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1">Arunkumar vs The Inspector General Of Registration</p>
      </button>

      <button class="button button68" on:click={()=> {
        modal.handleOpen(data2[67], modalContent, id);
      }}>
        <img src="/assets/Kerala HC.svg" />
        <p class="leading-3 text-xs py-1">Arun vs State Of Kerala </p>
      </button>

      <button class="button button69" on:click={()=> {
        modal.handleOpen(data2[68], modalContent, id);
      }}>
        <img src="/assets/Uttarakhand HC.svg" />
        <p class="leading-3 text-xs py-1">Ms X vs State of Uttarakhand</p>
      </button>

      <button class="button button70" on:click={()=> {
        modal.handleOpen(data2[69], modalContent, id);
      }}>
        <img src="/assets/Gujarat HC.svg" />
        <p class="leading-3 text-xs py-1">State of Gujarat vs Rameshchandra Rambhai Panchal</p>
      </button>

      <button class="button button71" on:click={()=> {
        modal.handleOpen(data2[70], modalContent, id);
      }}>
        <img src="/assets/Rajasthan HC.svg" />
        <p class="leading-3 text-xs py-1">State Of Rajasthan vs S</p>
      </button>

      <button class="button button72" on:click={()=> {
        modal.handleOpen(data2[71], modalContent, id);
      }}>
        <img src="/assets/Delhi HC.svg" />
        <p class="leading-3 text-xs py-1">Vishal Singh vs Priya @ Pihu & Anr</p>
      </button>

      <button class="button button73" on:click={()=> {
        modal.handleOpen(data2[72], modalContent, id);
      }}>
        <img src="/assets/Uttarakhand HC.svg" />
        <p class="leading-3 text-xs py-1">Madhu Bala vs State of Uttarakhand </p>
      </button>

      <button class="button button74" on:click={()=> {
        modal.handleOpen(data2[73], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1">Vineeta Sharma vs Rakesh Sharma </p>
      </button>

      <button class="button button75" on:click={()=> {
        modal.handleOpen(data2[74], modalContent, id);
      }}>
        <img src="/assets/Maharashtra HC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Kajal Mukesh Singh And Ors vs The State Of Maharashtra</p>
      </button>

      <button class="button button76" on:click={()=> {
        modal.handleOpen(data2[75], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 ">Kirti vs Oriental Insurance Company</p>
      </button>
      <button class="button button77" on:click={()=> {
        modal.handleOpen(data2[76], modalContent, id);
      }}>
        <img src="/assets/Allahabad HC.svg" />
        <p class="leading-3 text-xs py-1 ">Safiya Sultana vs State of UP </p>
      </button>
      <button class="button button78" on:click={()=> {
        modal.handleOpen(data2[77], modalContent, id);
      }}>
        
        <p class="leading-3 text-xs py-1 ">Mobashar Jawed Akbar vs Priya Ramani</p>
      </button>
      <button class="button button79" on:click={()=> {
        modal.handleOpen(data2[78], modalContent, id);
      }}>
        <img src="/assets/Kerala HC.svg" />
        <p class="leading-3 text-xs py-1 ">Hina Haneefa vs State of Kerala</p>
      </button>

      <button class="button button80" on:click={()=> {
        modal.handleOpen(data2[79], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1 ">S Sushma & Anr versus Commissioner of Police & Ors </p>
      </button>

      <button class="button button81" on:click={()=> {
        modal.handleOpen(data2[80], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 ">Nandini Praveen vs. Union of India </p>
      </button>

      <button class="button button82" on:click={()=> {
        modal.handleOpen(data2[81], modalContent, id);
      }}>
        <img src="/assets/Kerala HC.svg" />
        <p class="leading-3 text-xs py-1 ">Queerythm vs National Medical Commission </p>
      </button>

      <button class="button button83" on:click={()=> {
        modal.handleOpen(data2[82], modalContent, id);
      }}>
        <img src="/assets/Kerala HC.svg" />
        <p class="leading-3 text-xs py-1 ">Kabeer C vs State Of Kerala</p>
      </button>

      <button class="button button84" on:click={()=> {
        modal.handleOpen(data2[83], modalContent, id);
      }}>
        <img src="/assets/AP HC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Matam Gangabhavani, vs State Of Andhra Pradesh</p>
      </button>

      <button class="button button85" on:click={()=> {
        modal.handleOpen(data2[84], modalContent, id);
      }}>
        <img src="/assets/Karnataka HC.svg" />
        <p class="leading-3 text-xs py-1 font-bold ">Hrishikesh Sahoo v State of Karntaka</p>
      </button>

      <button class="button button86" on:click={()=> {
        modal.handleOpen(data2[85], modalContent, id);
      }}>
        <img src="/assets/Delhi HC.svg" />
        <p class="leading-3 text-xs py-1 font-bold ">Farhan vs State & Anr</p>
      </button>

      <button class="button button87" on:click={()=> {
        modal.handleOpen(data2[86], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 font-bold">Budhadev Karmaskar vs The State Of West Bengal</p>
      </button>

      <button class="button button88" on:click={()=> {
        modal.handleOpen(data2[87], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 ">Akella Lalitha vs Konda Hanumantha Rao </p>
      </button>

      <button class="button button89" on:click={()=> {
        modal.handleOpen(data2[88], modalContent, id);
      }}>
        <img src="/assets/Patna HC.svg" />
        <p class="leading-3 text-xs py-1 ">Veera Yadav vs The Chief Secretary, Government</p>
      </button>

      <button class="button button90" on:click={()=> {
        modal.handleOpen(data2[89], modalContent, id);
      }}>
        <img src="/assets/SC.svg" />
        <p class="leading-3 text-xs py-1 ">X vs The Principal Secretary Health</p>
      </button>

      <button class="button button91" on:click={()=> {
        modal.handleOpen(data2[90], modalContent, id);
      }}>
        <img src="/assets/J&KHC.svg" />
        <p class="leading-3 text-xs py-1 ">State Of Jammu & Kashmir, Dr ... vs Dr Susheela Sawhney </p>
      </button>

      <button class="button button92" on:click={()=> {
        modal.handleOpen(data2[91], modalContent, id);
      }}>
        <img src="/assets/Madras HC.svg" />
        <p class="leading-3 text-xs py-1 ">S Tamilselvi vs The Secretary To Government </p>
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

 .button34 {
    padding-top: 20px;
        grid-area: 4/30/7/32;
 }
 .button35 {
    padding-top: 20px;
    padding-right: 15px;
        grid-area: 2/32/4/35;
 }

 .button36 {
    padding-top: 20px;
    padding-right: 15px;
        grid-area: 9/31/11/34;
 }

 .button37 {
    padding-top: 20px;
    padding-right: 15px;
        grid-area: 11/32/13/35;
 }
 .button38 {
    grid-area: 6/36/9/38;
 }
 .button39 {
  padding-left: 5px;
    grid-area: 2/38/4/40;
 }
 .button40 {
  
    grid-area: 4/37/6/39;
 }
 .button41 {
    grid-area: 4/39/7/41;
 }
 .button42 {
  padding-left: 10px;
    grid-area: 10/37/11/39;
 }
 .button43 {
  padding-left: 5px;
    grid-area: 12/38/13/40;
 }
 .button44 {
  padding-left: 25px;
  grid-area: 2/40/4/43;
 }
 .button45 {
  padding-left: 5px;
  padding-top: 20px;
    grid-area: 7/41/10/44;
 }
 .button46 {
  padding-left: 35px;
    grid-area: 10/40/13/43;
 }
 .button47 {
  
    grid-area: 5/43/6/46;
 }

 .button48 {
  
    grid-area: 9/43/10/46;
 }

 .button49 {
  padding-left: 5px;
  grid-area: 2/46/4/48;
}

.button50 {
  padding-top: 20px;
    grid-area: 3/47/6/49;
}
.button51 {
  padding-top: 10px;
  padding-left: 30px;
    grid-area: 6/46/9/49;
}
.button52 {
  
    grid-area: 10/45/13/47;
}
.button53 {
  padding-left: 15px;
    grid-area: 11/47/13/49;
}
.button54 {
  padding-top: 15px;
  padding-left: 10px;
    grid-area: 12/45/14/49;
}

.button55 {
 padding-left: 25px;
    grid-area: 2/52/3/55;
}
.button56 {
  padding-left: 30px;
  padding-bottom: 20px;
    grid-area: 2/50/5/53;
}
.button57 {
  padding-top: 20px;
    grid-area: 2/55/4/57;
}

.button58 {
  
    grid-area: 4/55/6/57;
}
.button59 {
  padding-top: 30px;
    grid-area: 4/51/6/54;
}
.button60 {
  
    grid-area: 5/55/8/58;
}
.button61 {
  padding-top: 20px;
  grid-area: 6/49/9/52;
}
.button62 {
  padding-left: 20px;
  padding-top: 15px;
  grid-area: 8/54/10/57;
}
.button63 {
    grid-area: 9/50/11/53;
}
.button64 {
  padding-top: 10px;
    grid-area: 11/51/12/53;
}
.button65 {
  padding-bottom: 10px;
    grid-area: 10/53/11/56;
}
.button66 {
  padding-left: 25px;
  padding-top: 20px;
    grid-area: 12/52/13/55;
}
.button67 {
  padding-left: 10px;
    grid-area: 3/58/4/60;
}
.button68 {
  padding-top: 30px;
  paddng-left: 10px;
    grid-area: 10/57/12/59;
}
.button69 {
  padding-left: 10px;
    grid-area: 12/58/14/60;
}

.button70 {
  padding-left: 10px;
    grid-area: 2/61/4/64;
}
.button71 {
  padding-left: 20px;
    grid-area: 4/60/6/62;
}
.button72 {
  padding-right: 30px;
  padding-bottom: 10px;
    grid-area: 7/63/9/65;
}
.button73 {
      grid-area: 9/60/11/62;
}
.button74 {
  padding-top: 25px;
    grid-area: 10/62/12/65;
}
.button75 {
  padding-left: 15px;
    grid-area: 12/61/13/64;
}
.button76 {
  
    grid-area: 2/67/3/70;
}
.button77 {
  padding-top: 15px;
  
    grid-area: 3/68/5/71;
}
.button78 {
  padding-left: 15px;
    grid-area: 3/66/6/68;
}
.button79 {
  
  padding-bottom: 15px;
    grid-area: 5/69/7/71;
}

.button80 {
  
  padding-top: 10px;
    grid-area: 5/66/8/69;
}
.button81 {
  
  padding-top: 15px;
  padding-left: 10px;
    grid-area: 8/66/11/68;
}
.button82 {
  
    grid-area: 10/66/13/69;
    
}
.button83 {
      grid-area: 12/67/14/70;
}

.button84 {
  padding-top: 20px;
      grid-area: 2/71/3/75;
}

.button85 {
  padding-top: 20px;
      grid-area: 3/72/6/75;
}

.button86 {
  padding-bottom: 20px;
      grid-area: 6/73/8/76;
}

.button87 {
  padding-top: 20px;
      grid-area: 7/71/9/73;
}

.button88 {
  
      grid-area: 9/73/10/76;
}

.button89 {
  
      grid-area: 10/70/11/73;
}

.button90 {
  
      grid-area: 11/73/12/76;
}

.button91 {
  padding-top: 20px;
      grid-area: 11/70/13/73;
}

.button92 {
  padding-left: 20px;
padding-top: 15px;
      grid-area: 12/71/14/75;
}

  .background-Lines {
    z-index: 1;
    grid-area: 2/ 1/ 11/ 63;
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
