<script context="module">
    
    export let text;
    export let maxWidth = 1100;
    export let data = [];
    let m = {
        x: 0,
        y: 0,
        offsetX: 0,
        offsetY: 0
    }

	
	let nameVar;

	let positionX, positionY = [10, 10]
	// Function tooltip to display the data of the selected bar
	
    
    export function handleMousemove(event) {
		m.x = event.clientX - 200;
		m.y = event.clientY;
		m.offsetX = event.offsetX;
		m.offsetY = event.offsetY;
	}

   export  function tooltip(data) {
		nameVar = data.title;
		// Position it right next to the bar
		positionX = maxWidth -  m.offsetX - 350;
		positionY = m.offsetY - 70;

	}
</script>


<div 
id="infobox"
style="top: {positionY}px;
right: {positionX }px;
visibility: {nameVar ? 'visible' : 'hidden'};
background-color: var(--color-background);
z-index: 3;"
class="border-[1px] px-4 py-2 w-1/3 shadow-lg border-gray-400 border-dashed absolute">
    <div class="flex flex-col w-full justify-start items-start">
        <div class="text-gray-600 text-sm">
            <p class="font-bold text-sm">
                {#if nameVar}
                    {nameVar}
                {:else}
                Hover over the chart to begin
                {/if}
            </p>
        </div>
        
    </div>
</div>
