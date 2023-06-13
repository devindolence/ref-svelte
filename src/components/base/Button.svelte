<script>
	import { Button, GradientButton, Indicator } from 'flowbite-svelte';

	export let color, size, outline, gradient, shadow;

	export let name, icon;

	export let clickEvent, disabled;
</script>

{#if gradient === true}
	<GradientButton
		{color}
		{size}
		{outline}
		{shadow}
		{disabled}
		on:click={clickEvent}
	>
		{name}
		<slot name='icon'>
		</slot>
		<slot name='indicator'>
			<Indicator>

			</Indicator>
		</slot>
	</GradientButton>
{:else}
	<Button
		{color}
		{size}
		{outline}
		{shadow}
		{disabled}
		on:click={clickEvent}
	>
		{name}
		<slot name='icon'>
		</slot>
<!--		<img src='/images/favicon.png'>-->
	</Button>
{/if}

<!--<Button color="alternative">Alternative</Button>-->
<!--<Button color="dark">Dark</Button>-->
<!--<Button color="light">Light</Button>-->
<!--<Button color="blue">Blue</Button>-->
<!--<Button color="green">Green</Button>-->
<!--<Button color="red">Red</Button>-->
<!--<Button color="yellow">Yellow</Button>-->
<!--<Button color="purple">Purple</Button>-->