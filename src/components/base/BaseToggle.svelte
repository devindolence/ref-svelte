<script>
	import { Toggle } from 'flowbite-svelte';

	export let toggleStyles = {
		size: 'default',
		group: undefined,
		checked: false
	};
	export let value = undefined;
	export let content = '';

	export let click = function() {

	};

	// to interface or js function with mixins or other
	export let change = function() {
		if (value !== undefined) {
			value = !value;
		}
	};
</script>

<Toggle
	{...toggleStyles}
	value={value}
	on:click={click}
	on:change={change}
>
	{content}
</Toggle>