<script>
  import { onMount } from 'svelte';
  import { useData } from '$store/store.js';
  import { someFunc } from '$mixins/stream-data.js';
  import BaseButton from '$components/base/BaseButton.svelte';
  import BaseTable from '$components/base/frame/BaseTable.svelte';

  // eslint-disable-next-line no-unused-vars
  let userData = [];
  let items;
  $: items = { keys: [], values: [] };

  function click() {
    items = someFunc.test(userData);
    // console.log(items.keys);
    // console.log(items.values);
    return items;
  }

  onMount(async () => {
    await useData.setData();
    userData = useData.subscribeData();
  });
</script>

<section>
  <BaseButton
    clickEvent={click}
  >
  </BaseButton>

  <BaseTable
    headers='{items.keys}'
    items='{items.values}'
  >

  </BaseTable>

  {items.keys}
  {items.values}
</section>
