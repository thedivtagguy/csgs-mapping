<script>

  let active = false;
  let label = "Example Label";
  let x = "40"
  let y = "55"
</script>
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button id="menu" on:mouseover="{() => active = true}" on:mouseleave="{() => active = false}">
  <svg viewBox="0 0 500 100" width="500" height="100" class="hamburger">
    <line class:active-top={active} x1="10%" y1="20" x2="90%" y2="20" class="hamburger__bar hamburger__bar--top" />
    <line class:active-left={active} x1="10%" y1="20" x2="20" y2="80" class="hamburger__bar hamburger__bar--mid side-left" />
    <line class:active-right={active} x1="90%" y1="20" x2="100%" y2="80" class="hamburger__bar hamburger__bar--mid side-right" />
    <line class:active-bot={active} x1="20" y1="80" x2="100%" y2="80" class="hamburger__bar hamburger__bar--bot" />
    <text x="{x}%" y="{y}%" class="hamburger__label">{label}</text>
  </svg>
</button>

  <style>
      

.hamburger__bar {
  transition-property: transform;
  transition-duration: 0.1s;
  transform-origin: center;
  stroke: black;
}

.hamburger__label {
  transition-property: transform;
  transition-duration: 0.1s;
  transform-origin: center;
  fill: black;
  font-weight: 700;
}
.active-top  {
  transform: translateY(-10px);
}

.active-bot {
  transform: rotate(-1deg);
}

.active-left {
   transform: rotate(-2deg);
  transform: translateX(-25px);
  
}

.active-right {
    transform: rotate(5deg);
  transform: translateX(20px);


}

  </style>