<script>
	import { Alert, Button } from 'flowbite-svelte';

	// todo: svelte component use
	const purposeToColor = {
		warn: 'yellow',
		success: 'green',
		fail: 'red',
		info: 'dark'
	};

	function getColor(x) {
		return purposeToColor[x];
	}

	export let purpose = 'info';
	export let useIcon = false;
	export let alertStyles = {
		download: undefined,
		target: undefined,
		type: undefined,
		draggable: undefined,
		id: undefined,
		slot: undefined,
		placeholder: undefined
	};

	export let content = 'default message';
	export let title = undefined;
	export let subListStyles = {};

	export let dismissable = false;
	export let dismissableButton = {};
	export let close = function() {
	};
</script>

<Alert
	{...alertStyles}
	{title}
	{dismissable}
	color={getColor(purpose)}
>
	<span slot='icon'
				style={!useIcon ? 'display: none' : ''}>
	{#if useIcon}
		<svg
			aria-hidden='true'
			class='w-5 h-5'
			fill='currentColor'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'>
			<path fill-rule='evenodd'
						d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
						clip-rule='evenodd'></path>
		</svg>
		<span class='sr-only'>Info</span>
	{/if}
	</span>
	<span class='font-medium'>
		{content}
	</span>
	{#if $$slots.subList}
		<div class={subListStyles}>
			<slot name='subList'></slot>
		</div>
	{/if}
	<span slot='close-button'>
		{#if dismissable}
			<Button
				size='xs'
				let:close
				on:click={close}
				class='ml-auto'
			>
				{dismissableButton.content}
			</Button>
		{/if}
	</span>
</Alert>