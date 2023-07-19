<script>
  import BaseButton from '$components/base/BaseButton.svelte';
  import { onMount } from 'svelte';
  import { useData } from '../stores/store.js';
  import { someFunc } from '$mixins/sample.js';

  // eslint-disable-next-line no-unused-vars
  let userData = [];

  function click() {
    someFunc.test(userData);
  }

  onMount(async () => {
    await useData.setData();
    userData = useData.subscribeData();
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name='description' content='Svelte demo app' />
</svelte:head>

<section>
  <div>
    {userData.userId} {userData.id} {userData.title} {userData.completed}
  </div>

  <BaseButton
    clickEvent={click}
  >
  </BaseButton>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }
</style>
