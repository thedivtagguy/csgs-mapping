<script>
    import { Modals, openModal, modals, closeModal } from 'svelte-modals'
      import Modal from './Modal.svelte'
      export const handleOpen = (data, modalContent, id) => {
          openModal(Modal, { 
              data, modalContent,id
          })
      }

  </script>
  

  <Modals>
    <div
      slot="backdrop"
      class="backdrop"
      on:click={closeModal}
    />
  </Modals>
  
  <style>
    .backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 12;
      left: 0;
      background: rgba(0,0,0,0.20);
    }
  </style>