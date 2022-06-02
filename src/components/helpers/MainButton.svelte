<script>
    import { onMount } from "svelte";

    // Onmount, do this
    onMount(async () => {
        const hamburger = document.querySelector("button");
function toggleMenu() {
 hamburger.classList.toggle("is-opened");

}

// Export the function to use it in the menu.svelte
    });




</script>

<!-- A button with four SVG lines for edges. When user hovers on the button, the lives move away -->
<button id="menu" on:click="{toggleMenu()}">
    <svg  viewBox="0 0 500 200" width="400" stroke="red" class="hamburger">
      <line x1="0" y1="100%" x2="100%" y2="100%" class="hamburger__bar hamburger__bar--top" />
      <line x1="0" y1="0" x2="0" y2="100%" class="hamburger__bar hamburger__bar--mid side-left" />
      <line x1="100%" y1="0" x2="100%" y2="100%" class="hamburger__bar hamburger__bar--mid" />
      <line x1="0" y1="0" x2="100%" y2="0" class="hamburger__bar hamburger__bar--bot" />
    </svg>
  </button>

  <style>
      

.hamburger__bar {
  transition-property: transform;
  transition-duration: 0.1s;
  transform-origin: center;
}

:global(.is-opened .hamburger__bar--top) {
  transform: translateY(-106px);
}

:global(.is-opened .hamburger__bar--mid) {
  transform: rotate(10deg);
}

:global(.is-opened .hamburger__bar--bot) {
  transform: rotate(-1deg);
}

:global(.is-opened .side-left) {
   transform: rotate(-2deg);
  transform: translateX(-50px);
  
}

:global(.is-opened .side-right) {
    transform: rotate(5deg);
  transform: translateX(60px);


}

  </style>