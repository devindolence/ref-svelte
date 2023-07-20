<script>
  import { Button, Input, Label } from 'flowbite-svelte';

  const componentMap = {
    'Input': Input,
    'Button': Button
  };

  export let items;
</script>

{#each Object.keys(items) as key}
  <Label
    class='bg-black'
    for='{key}'
  >
    {key}
  </Label>
  <svelte:component
    this={componentMap[items[key].fieldType.name]}
    id={key}
    value={items[key].dataType.name}
  >
  </svelte:component>
{/each}

