<script>
    import { closeModal } from 'svelte-modals'
      import { fly } from 'svelte/transition'
      
    export let isOpen;
    export let data;
    export let modalContent;
    export let id = '';
  </script>
  
  {#if isOpen}
      <!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
    <div role="dialog" class="modal" transition:fly={{ y: 50 }} on:introstart on:outroend>
        <div class="contents relative md:w-1/3">
            <div class="c-card block pb-4 bg-[color:var(--color-background)] shadow-md hover:shadow-xl rounded overflow-hidden">
          
            <div class="p-4 bg-[color:var(--color-aqua)]">
              <div class="flex  justify-between gap-6 items-center">
               {#if data[modalContent.title]}
                {#if data[modalContent.link]}
                             
                <h3 class="text-lg text-gray-600 font-semibold"> <a href="{data[modalContent.link]}" target="_blank" rel="external" class ="hover:text-gray-400"> {data[modalContent.title]}</a></h3>
                {:else}
                <h3 class="text-lg text-gray-600 font-semibold">{data[modalContent.title]}</h3>
                {/if}
             {/if}
                <button class="text-gray-600 hover:text-gray-800" on:click={closeModal}>
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
            </div>
            <div class="py-4">
              <div class="px-4">
                {#if data[modalContent.label]}
                     <span class="inline-block px-2 py-1 leading-none bg-orange-300 text-gray-700 font-light uppercase tracking-wide text-xs">
                  {data[modalContent.label]}
                 </span>
                {/if}
                
              </div>
                <div class="my-2 px-4 py-1 grid grid-cols-1 gap-4">
                  {#if data.asset}
                  <img class=" h-48 place-self-center" src = {data.asset}>
                  {/if}
                  {#if data.author}
                  <p class="font-light text-gray-700 text-sm">Author: <span class="font-normal">{data.author}</span></p>
                  {/if}
                  {#if data.description}
                  <p class="font-light text-gray-700 text-sm"><span class="font-normal">{data.description}</span></p>
                  {/if}
                  {#if data.director}
                  <p class="font-light text-gray-700 text-sm">Director: <span class="font-normal">{data.director}</span></p>
                  {/if}
                  
                  {#if id == 'publications'}
                  <p class="font-light text-gray-700 text-sm">Year: <span class="font-normal"> {data.realYear}</span></p>
                  {:else}
                  {#if data.year}
                  <p class="font-light text-gray-700 text-sm">Year: <span class="font-normal"> {data[modalContent.year]}</span></p>
                  {/if}
                  {/if}
                  
               
                  {#if data.publisher}
                  <p class="font-light text-gray-700 text-sm">Publisher: <span class="font-normal">{data.publisher}</span></p>
                  {/if}
                  
                  
                  {#if data.producedBy}
                  <p class="font-light text-gray-700 text-sm">Produced By: <span class="font-normal">{data.producedBy}</span></p>
                  {/if}
                  {#if data.language}
                  <p class="font-light text-gray-700 text-sm">Language: <span class="font-normal">{data.language}</span></p>
                  {/if}
                  {#if data[modalContent.contact]}
                  <p class="font-light text-gray-700 text-sm">Contact:
                    <a href="mailto:{data[modalContent.contact]}" class="hover:underline font-normal">{data[modalContent.contact]}</a>
                  {/if}
                  
                  {#if data.name}
                  <p class="font-light text-gray-700 text-sm">Name: <span class="font-normal">{data.name}</span></p>
                  {/if}
                  {#if data.artform1}
                  <p class="font-light text-gray-700 text-sm">Artform: <span class="font-normal">{data.artform1}</span></p>
                  {/if}
                  {#if data.plot}
                  <p class="font-light text-gray-700 text-sm">Plot: <span class="font-normal">{data.plot}</span></p>
                  {/if}
                  {#if data.rationale}
                  <p class="font-light text-gray-700 text-sm">Political rationale: <span class="font-normal">{data.rationale}</span></p>
                  {/if}
                </div>
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
    z-index: 12;
    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 320px;
    border-radius: 6px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
  }





  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }

   
  
  </style>