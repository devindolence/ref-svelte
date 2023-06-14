<script>
	import BButton from '$components/base/BaseButton.svelte';
	import { ButtonGroup } from 'flowbite-svelte';
	import BaseToggle from '$components/base/BaseToggle.svelte';

	const buttonStyle = {
		outline: true,
		color: 'dark'
	};

	let toggle = true;
	const click = () => console.log('test click event');
</script>

<!-- button sample -->
<BButton
	buttonStyle={buttonStyle}
	name='test'
	clickEvent={click}
>
	<div slot='prefix-icon'>
		<img src='/images/favicon.png'>
	</div>
</BButton>
<br>
<ButtonGroup>
	<BButton
		buttonStyle="{{color: 'blue'}}"
		name='group1'
	/>
	<BButton
		buttonStyle="{{color: 'red'}}"
		name='group2'
	/>
	<BButton
		buttonStyle="{{color: 'green'}}"
		name='group3'
	/>
</ButtonGroup>

<!-- Base Toggle -->
<BaseToggle
	toggleStyles="{{size:'large'}}"
	bind:value={toggle}
	content='test'
>
</BaseToggle>