<script>
	import BaseButton from '$components/base/BaseButton.svelte';
	import BaseBreadcrumb from '$components/base/BaseBreadcrumb.svelte';

	const test = true;


</script>

<svelte:head>
	<title>Home</title>
	<meta name='description' content='Svelte demo app' />
</svelte:head>

<section>

	<BaseBreadcrumb
		items={[{content: 1, home: true}, {content: 2}, {content: 3}]}
	>

	</BaseBreadcrumb>

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
