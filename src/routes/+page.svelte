<script>
	import Counter from '$components/Counter.svelte';
	import BButton from '$components/base/BaseButton.svelte';

	const buttonStyle = {
		outline: true,
		color: 'dark'
	}
	const click = () => console.log('test click event');
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<BButton
		buttonStyle={buttonStyle}
		name='test'
		clickEvent={click}
	>
		<div slot='icon'>
			<img src='/images/favicon.png'>
		</div>
	</BButton>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
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
