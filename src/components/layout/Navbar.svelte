<script>
	import {
		NavLi,
		NavUl,
		Navbar,
		NavBrand,
		NavHamburger
	} from 'flowbite-svelte';
	import { Cog } from 'svelte-heros-v2';
	import headers from '$routes/route.js';

	export let toggleDrawer, divClass, ulClass;
</script>

<Navbar let:hidden let:toggle>
	<NavHamburger on:click={toggleDrawer} btnClass='ml-3 lg:hidden' />
	<NavBrand href='/' class='lg:ml-64'>
		<Cog />
		<span class='self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4'>
			My Website
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {divClass} {ulClass}>
		{#each headers as { name, link }}
			<NavLi href={link}>{name}</NavLi>
		{/each}
	</NavUl>
</Navbar>