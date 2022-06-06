<script>

  let active = false;
  export let label = 'Example';
  let width, viewBoxWidth;
  // Get width of text bounding box
  let textWidth = label.length * 8;
  // Set width of viewBox based on text width
  viewBoxWidth = textWidth + 150;
  width = viewBoxWidth - 50;

  // If label is blank, set text to "Click me"
  if (label === "") {
    label = "Click me";
  }
</script>
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button id="menu" on:mouseover="{() => active = true}" on:mouseleave="{() => active = false}">
  <svg viewBox="0 0 {viewBoxWidth} 100" width="{width + 100}" height="100" class="button">
    <line class:active-top={active} x1="10%" y1="20" x2="90%" y2="20" class="button__bar button__bar--top" />
    <line class:active-left={active} x1="10%" y1="20" x2="20" y2="80" class="button__bar button__bar--mid side-left" />
    <line class:active-right={active} x1="90%" y1="20" x2="100%" y2="80" class="button__bar button__bar--mid side-right" />
    <line class:active-bot={active} x1="20" y1="80" x2="100%" y2="80" class="button__bar button__bar--bot" />
    <text x="50%" y="55%" class="button__label">{label}</text>
  </svg>
</button>

  <style>
      

.button__bar {
  transition-property: transform;
  transition-duration: 0.1s;
  transform-origin: center;
  stroke: black;
}

.button__label {
  transition-property: transform;
  transition-duration: 0.1s;
  transform-origin: center;
  fill: black;
  font-weight: 700;
  text-anchor: middle;
}
.active-top  {
  transform: translateY(-10px);
}

.active-bot {
  transform: rotate(-1deg);
}

.active-left {
   transform: rotate(-2deg);
  transform: translateX(-20px);
  
}

.active-right {
    transform: rotate(5deg);
  transform: translateX(20px);


}

  </style>