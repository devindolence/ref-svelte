<script>
	import BaseButton from '$components/base/BaseButton.svelte';
	import BasePagination from '$components/base/BasePagination.svelte';

	function click() {

	}

	const pages = [
		{ name: 1, href: '/?page=1' },
		{ name: 2, href: '/?page=2' },
		{ name: 3, href: '/?page=3' },
		{ name: 4, href: '/?page=4' },
		{ name: 5, href: '/?page=5' },
		{ name: 6, href: '/?page=6' },
		{ name: 7, href: '/?page=7' }
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name='description' content='Svelte demo app' />
</svelte:head>

<section>
	<BasePagination
		{pages}
	>

	</BasePagination>

	<BaseButton
		clickEvent={click}
	>
	</BaseButton>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
