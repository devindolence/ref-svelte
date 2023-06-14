<script>
	import { Badge } from 'flowbite-svelte';

	export let color, content;
</script>

<Badge {$color}>{$content}</Badge>