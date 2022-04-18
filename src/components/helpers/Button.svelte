<script>
    export let text;
    export let link;
    export let target;
</script>

<a href={link} target={target}>
    <button class="cta-pushable">
    <span class="cta-shadow"></span>
    <span class="cta-edge"></span>
    <div class="cta-front w-full text flex justify-items-center py-4 justify-around mx-auto items-center gap-4">
        <div class="font-mono font-bold">{text}</div>
    </div>
    </button>
</a>

<style>


    /* CSS */
    .cta-pushable {
      width: 100%;
      position: relative;
      border: none;
      background: transparent;
      padding: 0;
      cursor: pointer;
      outline-offset: 4px;
      transition: filter 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    
    .cta-shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: hsl(0deg 0% 0% / 0.25);
      will-change: transform;
      transform: translateY(2px);
      transition:
        transform
        600ms
        cubic-bezier(.3, .7, .4, 1);
    }
    
    .cta-edge {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: linear-gradient(
        to left,
        rgb(17, 17, 17) 0%,
        rgb(22, 22, 22) 8%,
        rgb(22, 22, 22) 8%,
        rgb(44, 44, 44) 100%
      );
    }
    
    .cta-front {
      border-radius: 8px;
      font-size: 1.1rem;
      color: white;
      background: #393942;
      will-change: transform;
      transform: translateY(-4px);
      transition:
        transform
        600ms
        cubic-bezier(.3, .7, .4, 1);
    }
    
    @media (min-width: 768px) {
      .cta-front {
        font-size: 1.25rem;
        padding: 12px 42px;
      }
    }
    
    .cta-pushable:hover {
      filter: brightness(110%);
    }
    
    .cta-pushable:hover .cta-front {
      transform: translateY(-6px);
      transition:
        transform
        250ms
        cubic-bezier(.3, .7, .4, 1.5);
    }
    
    .cta-pushable:active .cta-front {
      transform: translateY(-2px);
      transition: transform 34ms;
    }
    
    .cta-pushable:hover .cta-shadow {
      transform: translateY(4px);
      transition:
        transform
        250ms
        cubic-bezier(.3, .7, .4, 1.5);
    }
    
    .cta-pushable:active .cta-shadow {
      transform: translateY(1px);
      transition: transform 34ms;
    }
    
    .cta-pushable:focus:not(:focus-visible) {
      outline: none;
    }
    </style>