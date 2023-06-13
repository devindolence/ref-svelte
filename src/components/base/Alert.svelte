<script>
	import { Alert } from 'flowbite-svelte';

	export let color;
</script>

<Alert color={color}>
	<span class='font-medium'>
		Default alert!
	</span>
	Change a few things up and try submitting again.
</Alert>