<script>
	import { Badge } from 'flowbite-svelte';

	export let props = {
		color: undefined,
		large: undefined,
		border: undefined,
		rounded: undefined,
		index: undefined,
		dismissable: false
	};
	export let content = 'default badge';
	export let click = function() {
	};
	export let dismiss = function() {};
</script>

<Badge
	{...props}
	on:click={click}
	on:dismiss={dismiss}
>
	{content}
</Badge>