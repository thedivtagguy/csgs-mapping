<script>

    let active = false;
    
    export let label = 'Example';
    export let link;
    let width, viewBoxWidth;
    // Get width of text bounding box
    //let textWidth = label.length * 8;
    let textWidth = 180;
    // Set width of viewBox based on text width
    viewBoxWidth = textWidth + 50;
    width = viewBoxWidth - 50;
  
    // If label is blank, set text to "Click me"
    if (label === "") {
      label = "Click me";
    }
  </script>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <a href="{link}">
    <button id="menu" on:mouseover="{() => active = true}" on:mouseleave="{() => active = false}">
      <svg viewBox="0 0 {viewBoxWidth} 100" width="{width + 100}" height="100" class="button press-effect">
  
        <line class:active-top={active} x1="0%" y1="20" x2="100%" y2="20" class="button__bar button__bar--top" />
        <line class:active-left={active} x1="0%" y1="20" x2="0" y2="80" class="button__bar button__bar--mid side-left" />
        <line class:active-right={active} x1="100%" y1="20" x2="100%" y2="80" class="button__bar button__bar--mid side-right" />
        <line class:active-bot={active} x1="0" y1="80" x2="100%" y2="80" class="button__bar button__bar--bot" />
        <text x="50%" y="57%" class="button__label">{label}</text>
      </svg>
    </button>
  </a>
  
    <style>
  
  .button__bar {
    transition-property: transform;
    transition-duration: 0.1s;
    transform-origin: center;
    stroke: #3a3a3a;
    stroke-width: 1px;
  }
  
  .button__label {
    transition-property: transform;
    transition-duration: 0.1s;
    transform-origin: center;
    fill: #3a3a3a;
    text-transform: uppercase;
    font-weight: 400;
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
  
  .press-effect {
   -webkit-transition: all 0.1s;
    transition: all 0.1s;
  }
  .press-effect:active {
    -webkit-transform: scale(0.88);
    transform: scale(0.88);
  }
    </style>