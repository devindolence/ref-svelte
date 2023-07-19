<script>
  import { Button, Input, Label } from 'flowbite-svelte';

  export let items;
</script>

{#each Object.keys(items) as key}
  <Label
    class='bg-black'
    for='{key}'
  >
    {key}
  </Label>
  {#if items[key].fieldType.name === 'Input'}
    <Input
      id='{key}'
      value='{items[key].dataType.name}'
    />
  {:else }
    <Button
      id='{key}'
      value='{items[key].dataType.name}'
    />
  {/if}
{/each}

