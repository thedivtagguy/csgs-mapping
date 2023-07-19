<script>
    import ModalOpen from '../modal/ModalOpen.svelte';
    let modal;
    export let modalContent;
    export let title = "";
    export let height = 800;	// Height of the chart
	export let width = 1900;
</script>

<main>
    <ModalOpen bind:this={modal}/>
	
	<section class="grid grid-cols-1 px-8 w-full md:py-32 md:grid-cols-12 gap-6 ">
		<div class="md:col-span-3 col-span-12 md:py-3">
			<h1 class="text-4xl uppercase font-bold">{title}</h1>
			<p class="text-gray-700 py-4 text-sm font-medium">
				Click on {title} to know more
			</p>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="4094" height="226" viewBox="0 0 4094 226" fill="none">
            <path d="M7.50036 142C19.0002 132 -15.9996 98.0003 19.0004 89.0003C54.0004 80.0003 66.5004 179 26.5004 147C-13.4996 115 246.282 74.0412 446 84.3019C530.982 88.668 511.5 110 562 104C612.5 98.0002 575.691 26.1023 627.5 9.00019C679.309 -8.10195 729 12.5001 756.5 36C772.022 49.2644 834.5 107.802 1003 70.302C1171.5 32.802 1245 42.8019 1453 84.3019C1661 125.802 1688.5 155 1826.5 163.5C1964.5 172 1918 70.302 2051 70.302C2184 70.302 2204.5 203 2281 203C2412 203 2388.98 21.5 2479.5 21.5C2640.5 21.5 2711.05 137.057 2874.5 146.5C3125.5 161 3128.5 225.302 3237.5 223.302C3324.7 221.702 3427.17 166.969 3467.5 139.802C3492 119.535 3565.2 80.5 3662 86.5C3783 94 3903.5 166.667 4014.5 139.802C4072 125.886 4080 115.333 4092.5 108" stroke="#D9D7CB" stroke-width="4"/>
          </svg>
    </div>
<div class = "button">
    <!-- svelte-ignore a11y-missing-attribute -->
    
    <object id = "SC" data = "/assets/SC.svg">
        </object>
        
</div>


</main>

<style> 
object:hover {
    -ms-transform: scale(1.1em);
    -webkit-transform: scale(1.1);
    tansform: scale(1.1);
}
</style>
    