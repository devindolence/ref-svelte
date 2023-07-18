<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	export let props = {
		solid: false,
		navClass: 'flex',
		solidClass: undefined,
		olClass: undefined
	};

	export let itemProps = {
		linkClass:	'ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white',
		spanClass:	'ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400',
		homeClass:	'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
	}

	export let items = undefined;
</script>

<Breadcrumb {...props}>
	{#each items as item}
		<BreadcrumbItem
			{...itemProps}
			{...item.itemProps}
		>
			{item.content}
		</BreadcrumbItem>
	{/each}
</Breadcrumb>