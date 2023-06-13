<script>
	import Counter from '$components/Counter.svelte';
	import Button from '$components/base/Button.svelte';

	const click = () => console.log('test event');
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<img src='/images/favicon.png'>

<section>
	<Button
		name='test'
		gradient=false
		outline=true
		color='dark'
		clickEvent={click}
	>
		<div slot='icon'>
			<img src='/images/favicon.png'>
		</div>
	</Button>

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
