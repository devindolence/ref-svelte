<script lang='ts'>
	import './app.postcss';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		DarkMode,
	} from 'flowbite-svelte';

	import Header from '$components/layout/Navbar.svelte';
	import Sidebar from '$components/layout/Sidebar.svelte';

	let breakPoint: number = 1024;
	let width: number;

	let activateClickOutside = true;
	let drawerHidden: boolean = false;
	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});

	const toggleDrawer = () => {
		drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;
	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50';
	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';
</script>

<svelte:window bind:innerWidth={width} />

<Header
	toggleDrawer={toggleDrawer}
	divClass={divClass}
	ulClass={ulClass}
/>

<DarkMode btnClass={darkmodebtn} />

<Sidebar
	activateClickOutside={activateClickOutside}
	drawerHidden={drawerHidden}
	width={width}
	breakPoint={breakPoint}
/>

<div class='flex px-4 mx-auto w-full'>
	<main class='lg:ml-72 w-full mx-auto'>
		<slot />
	</main>
</div>