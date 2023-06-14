<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	export let items = [];
</script>

<Breadcrumb>
	{#each items as item}
		<BreadcrumbItem>{item.content}</BreadcrumbItem>
	{/each}
</Breadcrumb>