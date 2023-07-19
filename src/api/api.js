import axios from 'axios';

export async function getTest() {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    responseType: 'json'
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}

export async function getApi(url) {
  console.log(`call api : ${url}`);
  return axios({
    method: 'get',
    url: url,
    responseType: 'json'
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}
