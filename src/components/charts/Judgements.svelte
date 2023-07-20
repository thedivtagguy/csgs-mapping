<script>
  
  export let title = "";
  export let height = 900; // Height of the chart
  export let width = 5000;
</script>

<main>


  <section>
    <div class="container">
      <h1 class="text-4xl uppercase font-bold">{title}</h1>
      <p class="text-gray-700 py-4 text-sm font-medium">
        Click on {title} to know more
      </p>
      <div class="time_Line">
        <svg
          width="4094"
          height="734"
          viewBox="0 0 4094 734"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            id="Line 1"
            x1="3"
            y1="734"
            x2="3"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            id="Line 2"
            x1="71"
            y1="734"
            x2="71"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            id="Line 3"
            x1="141"
            y1="734"
            x2="141"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            id="Line 4"
            x1="358"
            y1="734"
            x2="358"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            id="Line 5"
            x1="782"
            y1="734"
            x2="782"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            id="Line 6"
            x1="1499"
            y1="734"
            x2="1499"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
          <line
            id="Line 7"
            x1="3102"
            y1="734"
            x2="3102"
            y2="1.31134e-07"
            stroke="#F7B289"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
        </svg>
      </div>
      <div class="curvy_Line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4094"
          height="226"
          viewBox="0 0 4094 226"
          fill="none"
        >
          <path
            d="M7.50036 142C19.0002 132 -15.9996 98.0003 19.0004 89.0003C54.0004 80.0003 66.5004 179 26.5004 147C-13.4996 115 246.282 74.0412 446 84.3019C530.982 88.668 511.5 110 562 104C612.5 98.0002 575.691 26.1023 627.5 9.00019C679.309 -8.10195 729 12.5001 756.5 36C772.022 49.2644 834.5 107.802 1003 70.302C1171.5 32.802 1245 42.8019 1453 84.3019C1661 125.802 1688.5 155 1826.5 163.5C1964.5 172 1918 70.302 2051 70.302C2184 70.302 2204.5 203 2281 203C2412 203 2388.98 21.5 2479.5 21.5C2640.5 21.5 2711.05 137.057 2874.5 146.5C3125.5 161 3128.5 225.302 3237.5 223.302C3324.7 221.702 3427.17 166.969 3467.5 139.802C3492 119.535 3565.2 80.5 3662 86.5C3783 94 3903.5 166.667 4014.5 139.802C4072 125.886 4080 115.333 4092.5 108"
            stroke="#D9D7CB"
            stroke-width="4"
          />
        </svg>
      </div>

      <div class="button">
        <!-- svelte-ignore a11y-missing-attribute -->

        <object id="SC" data="/assets/SC.svg" />
        <p>Tuka Ram And Anr Vs State of Maharashtra</p>
      </div>

      
    </div>
  </section>
</main>

<style>
  main {
    overflow-x: auto;
  }
  body {
    display: grid;
  }
  .container {
    width: 5000px;
    height: 800px;
    position: relative;
  }
  svg {
    display: block;
    overflow: visible;
  }
  section {
    width: 100rem;
    display: flex;
  }
  .curvy_Line {
    z-index: 1;
  }
  .button:hover {
    -ms-transform: scale(1.1em);
    -webkit-transform: scale(1.1);
    tansform: scale(1.1);
  }
  .time_Line {
    position: absolute;
    z-index: -1;
  }
  .button {
    z-index: 13;
    width: 5.9375rem;
    height: 1.4375rem;
    flex-shrink: 0;
    color: #3a3a3a;
    text-align: center;
    font-family: Roboto;
    font-size: 13px;
    line-height: 0.8rem;
    font-weight: 400;
  }
</style>
