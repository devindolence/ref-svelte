import { useApi } from '$store/apiStore.js';

// eslint-disable-next-line no-unused-vars
let url = 'https://jsonplaceholder.typicode.com/todos/1';

function responseToList(items) {
  let keys = Object.keys(items[0]);
  let values = items;

  return {
    keys,
    values
  };
}

async function callGetMethod() {
  let data = await useApi.getApiData(url.toString());
  return responseToList([data]);
}

function setDefault(inputURL) {
  url = inputURL;
  useApi.setUrl(url);
}

export const customFunc = {
  callGetMethod,
  setDefault
};
