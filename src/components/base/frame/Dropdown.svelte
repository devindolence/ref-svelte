<script>
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
</script>

<Button><Chevron>Dropdown button</Chevron></Button>
<Dropdown >
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownItem>Earnings</DropdownItem>
	<DropdownItem>Sign out</DropdownItem>
</Dropdown>