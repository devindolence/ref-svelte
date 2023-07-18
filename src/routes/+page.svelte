<script>
  import BaseButton from '$components/base/BaseButton.svelte';
  import BasePagination from '$components/base/BasePagination.svelte';
  import { onMount } from 'svelte';
  import { data } from '../stores/store.js';
  import { getTest } from '$api/api.js';

  // eslint-disable-next-line no-unused-vars
  let getData = [];

  function click() {

  }

  const pages = [
    { name: 1, href: '/?page=1' },
    { name: 2, href: '/?page=2' },
    { name: 3, href: '/?page=3' },
    { name: 4, href: '/?page=4' },
    { name: 5, href: '/?page=5' },
    { name: 6, href: '/?page=6' },
    { name: 7, href: '/?page=7' }
  ];

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
  <BasePagination
    {pages}
  >
  </BasePagination>

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
