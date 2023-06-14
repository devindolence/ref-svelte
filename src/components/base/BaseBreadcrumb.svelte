<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	export let props = {};
	export let items = undefined;
</script>

<Breadcrumb {...props}>
	{#each items as item}
		<BreadcrumbItem home={item.home}>
			{item.content}
		</BreadcrumbItem>
	{/each}
</Breadcrumb>