<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
		background: none;
		border: none;
		border-bottom: 2px solid var(--color-background);
		border-radius: 0;
		margin: 0;
		color: rgb(172, 172, 172);
        padding: 20px;
	}
	
	.selected {
		border-bottom: 2px solid teal;
		color: #333;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>