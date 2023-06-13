<script>
	import { Badge } from 'flowbite-svelte';

	export let color, content;
</script>

<Badge {$color}>{$content}</Badge>
<!--<Badge color="dark">Dark</Badge>-->
<!--<Badge color="red">Red</Badge>-->
<!--<Badge color="green">Green</Badge>-->
<!--<Badge color="yellow">Yellow</Badge>-->
<!--<Badge color="indigo">Indigo</Badge>-->
<!--<Badge color="purple">Purple</Badge>-->
<!--<Badge color="pink">Pink</Badge>-->