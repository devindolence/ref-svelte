<script>
  import { page } from '$app/stores';
  import { Pagination } from 'flowbite-svelte';
  import { goto } from '$app/navigation';

  $: activeUrl = $page.url.searchParams.get('page');
  export let pages = [];
  let totalPages = 5;
  let startPage;
  let endPage;
  let current;

  $:{
    pages.forEach((page) => {
      let splitUrl = page.href.split('?');
      let queryString = splitUrl.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
        current = Number(page.name);
      } else {
        page.active = false;
      }
    });
    let middleStandard = Math.round(totalPages / 2);
    let interval = totalPages - middleStandard;

    if (pages.length >= current + Number(totalPages) - 1 && current < middleStandard) {
      startPage = 1;
      endPage = totalPages;
    } else {
      startPage = current - interval;
      endPage = current + interval;
    }

    let showPageNum = pages.slice(startPage - 1, endPage).length;
    if (showPageNum !== totalPages && pages.length >= totalPages) {
      startPage = startPage - (totalPages - showPageNum);
    }

    pages = pages;
  }

  const previous = () => {
    if (current === 1) return;
    let query = `?page=${current-1}`;
    goto(`${query}`)
  };
  const next = () => {
    if (current === pages.length) return;
    let query = `?page=${Number(current)+1}`;
    goto(`${query}`)
  };
</script>

<Pagination pages='{pages.slice(startPage-1, endPage)}' on:previous={previous} on:next={next} />
