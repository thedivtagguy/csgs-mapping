<script>
    import { Modals, closeModal, openModal, modals } from 'svelte-modals'
      import { fade } from 'svelte/transition'
      import Modal from './Modal.svelte'
      export let which;
      export const handleOpen = (data) => {
          openModal(Modal, { 
              data, which
          })
      }

  </script>
  
  <Modals>
    <div
      slot="backdrop"
      class="backdrop"
          transition:fade
          on:click={closeModal}

    />
  </Modals>
  
  <style>
    .backdrop {
      position: fixed;
      z-index: 19;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0,0,0,0.20);
    }
  </style>