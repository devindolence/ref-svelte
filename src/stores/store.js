import { writable } from 'svelte/store';
import { getTest } from '$api/api.js';

const data = writable([]);

function subscribeData() {
  let result;
  data.subscribe((value) => {
    result = value;
  });
  return result;
}

function subscribeData2() {
  let result;
  data.subscribe((value) => {
    result = value;
  });
  return [result];
}

async function setData() {
  data.set(await getTest());
}

export const useData = {
  subscribeData,
  setData,
  subscribeData2
};
