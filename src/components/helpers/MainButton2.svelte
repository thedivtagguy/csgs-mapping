<script>

    let active = false;
    
    export let label = 'Example';
    export let link;
    let width, viewBoxWidth;
    // Get width of text bounding box
    //let textWidth = label.length * 8;
    let textWidth = 160;
    // Set width of viewBox based on text width
    viewBoxWidth = textWidth + 100;
    width = viewBoxWidth - 50;
  
    // If label is blank, set text to "Click me"
    if (label === "") {
      label = "Click me";
    }
  </script>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <a href="{link}">
    <button id="menu" on:mouseover="{() => active = true}" on:mouseleave="{() => active = false}" >
      <svg viewBox="0 0 {viewBoxWidth} 100" width="{width + 100}" height="100" class="button press-effect">
  
        <line class:active-top={active} x1="0%" y1="20" x2="100%" y2="20" class="button__bar button__bar--top" />
        <line class:active-left={active} x1="0%" y1="20" x2="0" y2="80" class="button__bar button__bar--mid side-left" />
        <line class:active-right={active} x1="100%" y1="20" x2="100%" y2="80" class="button__bar button__bar--mid side-right" />
        <line class:active-bot={active} x1="0" y1="80" x2="100%" y2="80" class="button__bar button__bar--bot" />
        <text x="50%" y="57%" class:text-active={active} class="button__label">{label}</text>
      </svg>
    </button>
  </a>
  
    <style>
  
  .button__bar {
  transition-property: transform;
  transition-duration: 0.1s;
  transform-origin: center;
  stroke: #F3BEF1;
  stroke-width: 3px;
  stroke-dashoffset: 10%;
  stroke-dasharray: 4; /* 👈 makes it dashed */
}

.button__label {
  font-family: 'Abril Fatface', serif;
  transition-property: transform;
  transition-duration: 0.1s;
  transform-origin: center;
  fill: #6d6d6d;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.2rem; /* 👈 increase font size here */
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
    transform: translateX(-10px);
    }
  
  .active-right {
      transform: rotate(5deg);
    transform: translateX(15px);
  }
  .text-active {
    transform:scale(1.1);
    
    text-shadow: 1px 1px 5px #F3BEF1;
  }
  .press-effect {
   -webkit-transition: all 0.1s;
    transition: all 0.1s;
  }
  .press-effect:active {
    -webkit-transform: scale(0.88);
    transform: scale(0.88);
  }
  
    </style>