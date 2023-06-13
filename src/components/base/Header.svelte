<script>
	import {
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import headers from '$routes/route.js';
	export let hidden, divClass, ulClass;
</script>

<NavUl {hidden} {divClass} {ulClass}>
	{#each headers as { name, link }}
		<NavLi href={link}>{name}</NavLi>
	{/each}
</NavUl>