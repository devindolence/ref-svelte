<script>
	import BaseButton from '$components/base/BaseButton.svelte';

	const test = true;


</script>

<svelte:head>
	<title>Home</title>
	<meta name='description' content='Svelte demo app' />
</svelte:head>

<section>

	<BaseButton
		clickEvent='{() => console.log(test)}'
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
