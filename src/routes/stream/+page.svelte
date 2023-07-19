<script lang='ts'>
  import { onMount } from 'svelte';
  import { customFunc } from '$mixins/stream-data-function';
  import { entities } from '$mixins/modelType';

  import BaseButton from '$components/base/BaseButton.svelte';
  import BaseTable from '$components/base/frame/BaseTable.svelte';
  import { Input, Label, Select, Textarea } from 'flowbite-svelte';


  // eslint-disable-next-line no-unused-vars
  let items = { keys: [], values: [] };
  let url = 'https://jsonplaceholder.typicode.com/todos/1';
  let selected = '';
  let entity;

  $: {
    customFunc.setDefault(url);
    let count = 0;
    entity = Object.keys(selected).map(key => {
      console.log(key);
      if (count === 0) {
        count++;
        return `${key}: {${selected[key].fieldType.name} : ${selected[key].dataType.name}}`;
      }
      return `\n${key}: {${selected[key].fieldType.name} : ${selected[key].dataType.name}}`;
    });
  }

  async function callGet() {
    items = await customFunc.callGetMethod();
  }

  onMount(async () => {
  });
</script>

<main>
  <div class='dark -mx-1.5 -space-x-3 bg-[#1da1f2] '>
    <BaseButton
      clickEvent={callGet}
      content='GET METHOD'
    />
    <BaseButton
      clickEvent={customFunc.callGetMethod}
      content='POST METHOD'
    />
    <BaseButton
      clickEvent={customFunc.callGetMethod}
      content='UPDATE METHOD'
    />
    <BaseButton
      clickEvent={customFunc.callGetMethod}
      content='DELETE METHOD'
    />
  </div>
  <br>
  <br>
  <Select
    bind:value='{selected}'
    items='{entities}'
  />
  <br>
  <br>
  {selected}
  <Textarea
    bind:value='{entity}'
    rows='10'
  />
  <br>
  <br>
  <div style='background: black'>
    <Label
      for='url'
    >
      API URL
    </Label>
    <Input
      bind:value='{url}'
      id='url'
    >
    </Input>
  </div>
  <br>
  <br>
  <div>
    <BaseTable
      headers='{items.keys}'
      items='{items.values}'
    >
    </BaseTable>
  </div>

</main>
