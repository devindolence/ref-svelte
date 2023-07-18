<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';

  export let headers = [], items = [];
</script>

<Table>
  <TableHead>
    {#each headers as head}
      <TableHeadCell>{head}</TableHeadCell>
    {/each}
  </TableHead>

  <TableBody class='divide-y'>
    {#each items as item}
      <TableBodyRow>
        {#each headers as key}
          <TableBodyCell>{item[key]}</TableBodyCell>
        {/each}
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
