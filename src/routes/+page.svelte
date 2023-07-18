<script>
  import BaseButton from '$components/base/BaseButton.svelte';
  import { onMount } from 'svelte';
  import { data } from '../stores/store.js';
  import { getTest } from '$api/api.js';

  // eslint-disable-next-line no-unused-vars
  let getData = [];

  function click() {

  }


  onMount(async () => {
    data.set(await getTest());
    data.subscribe((value) => {
      getData = value;
    });
    console.log(data);
    console.log(getData);
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name='description' content='Svelte demo app' />
</svelte:head>

<section>
  <div>
    {getData.userId} {getData.id} {getData.title} {getData.completed}
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
