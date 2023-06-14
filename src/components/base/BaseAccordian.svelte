<script>
	import { Accordion, AccordionItem } from 'flowbite-svelte';

	export let props = {
		autofocus: undefined,
		class: undefined,
		contextmenu: undefined,
		draggable: undefined,
		hidden: undefined,
		id: undefined,
		lang: undefined,
		part: undefined,
		placeholder: undefined,
		slot: undefined,
		style: undefined,
		title: undefined,
		translate: undefined,
		inert: undefined,
		tag: undefined,
		rounded: undefined,
		border: undefined,
		shadow: undefined,
		transition: undefined,
		params: undefined,
		node: undefined,
		use: undefined,
		options: undefined,
		multiple: undefined,
		flush: undefined,
		activeClasses: undefined,
		inactiveClasses: undefined,
		defaultClass: undefined
	};
	export let items = [];
</script>

<Accordion {...props}>
	{#each items as item}
		<AccordionItem>
			<span slot='header'>{item.header}</span>
			<p class='mb-2 text-gray-500 dark:text-gray-400'>
				{item.contents}
			</p>
		</AccordionItem>
	{/each}
</Accordion>