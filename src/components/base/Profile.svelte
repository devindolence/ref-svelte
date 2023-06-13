<script>
	import {
		Avatar,
		// Dropdown,
		// DropdownHeader,
		// DropdownItem,
		// DropdownDivider
	} from 'flowbite-svelte';
</script>

<Avatar id='user-drop'
				src='/images/profile-picture-3.webp'
				class='cursor-pointer'
				dot={{color:'green'}} />

<slot name='drop-down'>
	<!--	<Dropdown triggeredBy='#user-drop'>-->
	<!--		<DropdownHeader>-->
	<!--			<span class='block text-sm'> Bonnie Green </span>-->
	<!--			<span class='block truncate text-sm font-medium'> name@flowbite.com </span>-->
	<!--		</DropdownHeader>-->
	<!--		<DropdownItem>Dashboard</DropdownItem>-->
	<!--		<DropdownItem>Settings</DropdownItem>-->
	<!--		<DropdownItem>Earnings</DropdownItem>-->
	<!--		<DropdownDivider />-->
	<!--		<DropdownItem>Sign out</DropdownItem>-->
	<!--	</Dropdown>-->
</slot>
