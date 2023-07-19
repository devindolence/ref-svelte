import { get, writable } from 'svelte/store';
import { getApi } from '$api/api';

const api = writable('');

function subscribeUrl() {
}

function setUrl(url) {
  console.log(url);
  api.set(url);
}

async function getApiData() {
  let data = await getApi(get(api));

  return data;
}

function postApi() {

}

function deleteApi() {

}

function getListApi() {

}

function updateApi() {

}

export const useApi = {
  subscribeUrl,
  setUrl,
  getApiData,
  postApi,
  deleteApi,
  updateApi,
  getListApi
};
