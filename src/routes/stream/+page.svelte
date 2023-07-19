<script>
  import { onMount } from 'svelte';
  import { useData } from '$store/store.js';
  import { someFunc } from '$mixins/stream-data.js';
  import { useApi } from '$store/apiStore.js';
  import BaseButton from '$components/base/BaseButton.svelte';
  import BaseTable from '$components/base/frame/BaseTable.svelte';
  import { Input, Label } from 'flowbite-svelte';

  // eslint-disable-next-line no-unused-vars
  let items;
  $: items = { keys: [], values: [] };

  let url = 'https://jsonplaceholder.typicode.com/todos/1';

  async function click3() {
    // 'https://jsonplaceholder.typicode.com/todos/1'
    console.log(url);
    useApi.setUrl(url);
    let data = await useApi.getApiData(url.toString());
    console.log(`get data : ${data}`);
    items = someFunc.testForList([data]);
  }

  onMount(async () => {
    await useData.setData();
  });
</script>

<section>
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

  <div>
    <BaseButton
      clickEvent={click3}
      content='apiCall'
    />

    <BaseTable
      headers='{items.keys}'
      items='{items.values}'
    >
    </BaseTable>
  </div>

</section>
