<script>
  import BButton from '$components/base/BaseButton.svelte';
  import { ButtonGroup } from 'flowbite-svelte';
  import BaseToggle from '$components/base/BaseToggle.svelte';
  import BaseAlert from '$components/base/BaseAlert.svelte';
  import BaseBadge from '$components/base/BaseBadge.svelte';
  import BaseBreadcrumb from '$components/base/BaseBreadcrumb.svelte';
  import BasePagination from '$components/base/BasePagination.svelte';

  const buttonStyle = {
		outline: true,
		color: 'dark'
	};

	let toggle = true;
	const click = () => console.log('test click event');

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

<!-- button sample -->
<BButton
	buttonStyle={buttonStyle}
	content='test'
	clickEvent={click}
>
	<div slot='prefix-icon'>
		<img alt='' src='/images/favicon.png'>
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

<!--Base Alert-->
<BaseAlert
	purpose='info'
	useIcon={false}
	dismissable={false}
/>

<!--Base Badge-->
<BaseBadge
	content='test'
	props={{dismissable: true}}
/>

<!--BaseBreadcrumb-->
<BaseBreadcrumb
	items={[{content: 1, itemProps:{home: true}}, {content: 2}, {content: 3}]}
>

</BaseBreadcrumb>


<!--BasePagination-->
<BasePagination
  {pages}
>
</BasePagination>
