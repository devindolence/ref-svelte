<Drawer
	transitionType='fly'
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width='w-64'
	class='overflow-scroll pb-32'
	id='sidebar'
>
	<div class='flex items-center'>
		<CloseButton on:click={() => (drawerHidden = true)} class='mb-4 dark:text-white lg:hidden' />
	</div>
	<Sidebar asideClass='w-54'>
		<SidebarWrapper divClass='overflow-y-auto py-4 px-3 rounded dark:bg-gray-800'>
			<SidebarGroup>
				<SidebarItem label='Home' href='/' on:click={toggleSide} active={activeUrl === `/`} />
				<!--{#each data.pages as { meta, path }}-->
				<!--	<SidebarItem-->
				<!--		label={meta.title}-->
				<!--		href={`/pages/${path}`}-->
				<!--		{spanClass}-->
				<!--		on:click={toggleSide}-->
				<!--		active={activeUrl === `/pages/${path}`}-->
				<!--	/>-->
				<!--{/each}-->
				<SidebarDropdownWrapper label='Articles'>
					<!--{#each data.articles as { meta, path }}-->
					<!--	<SidebarItem-->
					<!--		label={meta.title}-->
					<!--		href={`/blog/${path}`}-->
					<!--		{spanClass}-->
					<!--		on:click={toggleSide}-->
					<!--		active={activeUrl === `/blog/${path}`}-->
					<!--	/>-->
					<!--{/each}-->
				</SidebarDropdownWrapper>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>

<script lang='ts'>
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};

	let backdrop: boolean = false;
	export let activateClickOutside, drawerHidden, width, breakPoint, activeUrl;
</script>