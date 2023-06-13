<script>
	import { Tooltip, Button } from 'flowbite-svelte';
	let type = 'dark';
</script>

<Button id="type-light">Light tooltip</Button>
<Button id="type-auto">Default tooltip</Button>
<Button id="type-dark">Dark tooltip</Button>
<Tooltip {type} triggeredBy="[id^='type-']" on:show={ev => type = ev.target.id.split('-')[1]}>Tooltip content</Tooltip>