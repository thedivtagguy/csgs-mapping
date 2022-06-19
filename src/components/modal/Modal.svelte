<script>
    import { closeModal } from 'svelte-modals'
      import { fly } from 'svelte/transition'
      
    export let isOpen;
    export let data;
    export let modalContent;
  </script>
  
  {#if isOpen}
      <!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
    <div role="dialog" class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
        <div class="w-1/3 ">
            <div class="c-card block bg-[color:var(--color-background)] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            <div class="relative pb-48 overflow-hidden">
              <img class="absolute inset-0 h-full w-full object-cover" src="/assets/placeholder.png" alt="">
            </div>
            <div class="p-4">
              <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">

               {data[modalContent.label]}

              </span>
              <h2 class="mt-2 mb-2 text-left  font-bold">{data.title}</h2>
              
             
              <div class="mt-3 flex items-center">
                <span class="font-bold text-xl">{data.author}</span>
              </div>
              <p class="text-lg font-semibold">
                    {data.year}
              </p>
            </div>
           
         
          </div>
          </div>    
    </div>
  {/if}
  
  <style>
    .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    z-index: 22;
      /* allow click-through to backdrop */
      pointer-events: none;
    }
  
    
  
    h2 {
      text-align: left;
      font-size: 24px;
    }
  
    p {
      text-align: left;
      margin-top: 16px;
    }
  
   
  
  </style>