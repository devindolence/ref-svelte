<script>
  import { onMount } from 'svelte';
  import { useData } from '$store/store.js';
  import { someFunc } from '$mixins/stream-data.js';
  import BaseButton from '$components/base/BaseButton.svelte';
  import BaseTable from '$components/base/frame/BaseTable.svelte';

  // eslint-disable-next-line no-unused-vars
  let userData = [];
  let userData2 = [];
  let items;
  $: items = { keys: [], values: [] };

  function click() {
    items = someFunc.test(userData);
    return items;
  }

  function click2() {
    items = someFunc.testForList(userData2);
    return items;
  }

  onMount(async () => {
    await useData.setData();
    userData = useData.subscribeData();
    userData2 = useData.subscribeData2();
  });
</script>

<section>
  <BaseButton
    clickEvent={click}
    content='click1'
  >
    click1
  </BaseButton>
  <BaseButton
    clickEvent={click2}
    content='click2'
  >
  </BaseButton>

  <BaseTable
    headers='{items.keys}'
    items='{items.values}'
  >

  </BaseTable>
</section>
