<script>
  import { Input, Label } from 'flowbite-svelte';
  import BaseButton from '$components/base/BaseButton.svelte';

  const componentMap = {
    'Input': Input,
    'Button': BaseButton
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

