import axios from 'axios';

export async function getTest() {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    responseType: 'json'
  })
  .then((response) => {
    console.log(response);
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}

