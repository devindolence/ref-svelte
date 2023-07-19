<script>
  import { onMount } from 'svelte';
  import { customFunc } from '$mixins/stream-data-function';

  import BaseButton from '$components/base/BaseButton.svelte';
  import BaseTable from '$components/base/frame/BaseTable.svelte';
  import { Input, Label } from 'flowbite-svelte';

  // eslint-disable-next-line no-unused-vars
  let items = { keys: [], values: [] };
  let url = 'https://jsonplaceholder.typicode.com/todos/1';

  $: {
    customFunc.setDefault(url);
  }

  async function callGet() {
    items = await customFunc.callGetMethod();
  }

  onMount(async () => {
  });
</script>

<main>
  <div>
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
