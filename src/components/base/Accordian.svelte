<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	export let multiple: Boolean;
	export let items: Array<Object>;
</script>

<slot name='button'>
	<!--<Button on:click={open_all}>Open all</Button>-->
</slot>

<Accordion {$multiple}>
	{#each items as item}
		<AccordionItem bind:open={item}>
			<span slot='header'>{item.header}</span>
			<p class='mb-2 text-gray-500 dark:text-gray-400'>
				{item.contents}
			</p>
		</AccordionItem>
	{/each}
</Accordion>