<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	export let pageList;
</script>

<Breadcrumb aria-label='Default breadcrumb example'>
	{#each pageList as { link, name }}
		<BreadcrumbItem href={link} home>{name}</BreadcrumbItem>
	{/each}
</Breadcrumb>