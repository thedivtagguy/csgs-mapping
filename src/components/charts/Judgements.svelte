<script>
  
  export let title = "";
  
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
            x1="8"
            y1="734"
            x2="8"
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
          viewBox="0 -300 4194 226"
          fill="none"
        >
          <path
            d="M7.50036 142C19.0002 132 -15.9996 98.0003 19.0004 89.0003C54.0004 80.0003 66.5004 179 26.5004 147C-13.4996 115 246.282 74.0412 446 84.3019C530.982 88.668 511.5 110 562 104C612.5 98.0002 575.691 26.1023 627.5 9.00019C679.309 -8.10195 729 12.5001 756.5 36C772.022 49.2644 834.5 107.802 1003 70.302C1171.5 32.802 1245 42.8019 1453 84.3019C1661 125.802 1688.5 155 1826.5 163.5C1964.5 172 1918 70.302 2051 70.302C2184 70.302 2204.5 203 2281 203C2412 203 2388.98 21.5 2479.5 21.5C2640.5 21.5 2711.05 137.057 2874.5 146.5C3125.5 161 3128.5 225.302 3237.5 223.302C3324.7 221.702 3427.17 166.969 3467.5 139.802C3492 119.535 3565.2 80.5 3662 86.5C3783 94 3903.5 166.667 4014.5 139.802C4072 125.886 4080 115.333 4092.5 108"
            stroke="#D9D7CB"
            stroke-width="4"
          />
        </svg>
      </div>
      <div class = "blobs">
        <svg width="2" height="71" viewBox="-162 -88 2 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.999744 0L1 71" stroke="black" stroke-opacity="0.8"/>
          </svg>
        <svg width="8" height="8" viewBox="-159 -88 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.95707 2.99209C5.95707 4.6418 4.57092 6.22526 2.9143 5.9735C1.96766 5.82774 0 4.72131 0 3.07159C0 1.42188 1.23739 -0.0886942 2.9143 0.00406065C6.59944 0.216072 5.95707 2.3163 5.95707 2.99209Z" fill="#F67C87"/>
          </svg>
          
            
          
      </div>
      <div class="button">
        <!-- svelte-ignore a11y-missing-attribute -->

        <object id="SC" data="/assets/SC.svg" />
        <p class = "leading-4 text-sm">Tuka Ram And Anr vs State of Maharashtra</p>
      </div>

      
    </div>
  </section>
</main>

<style>
  main {
    overflow-x: auto;
    overflow-y: auto;
  }
  body {
    display: grid;
  }
  .container {
    width: 5000px;
    height: 900px;
    position: relative;
  }
  .blobs{
    z-index: 4;
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
    -ms-transform: scale(1.05em);
    -webkit-transform: scale(1.05);
    tansform: scale(1.05);
  }
  .button object:hover{
    filter: 
    drop-shadow(-1px -1px 0px #3a3a3a) 
    drop-shadow(1px -1px 0px #3a3a3a) 
    drop-shadow(1px 1px 0px #3a3a3a)
    drop-shadow(-1px 1px 0px #3a3a3a)
  }
  .time_Line {
    position: absolute;
    z-index: -1;
  }
  .button {
    position: absolute;
    
  left: 55px;
  top: 315px;
    display:inline-flex;
    flex-direction: column;
    
    
    z-index: 13;
    
    width: 13.9375rem;
    height: 5.4375rem;
    flex-shrink: 1;
    color: #3a3a3a;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    line-height: 0.6rem;
    font-weight: 400;
  }
</style>
