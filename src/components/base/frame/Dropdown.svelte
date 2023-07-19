<script>
  import { Button, Chevron, Dropdown, DropdownItem } from 'flowbite-svelte';

  export let items;
</script>

<Button>
  <Chevron>Dropdown button</Chevron>
</Button>

<Dropdown>
  {#each items as item}
    <DropdownItem>{item.name}</DropdownItem>
  {/each}
</Dropdown>
