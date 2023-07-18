/**
 * ECMAPScript 3+
 * reference https://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key
 * @param data
 */
// function test(data) {
//   for (let key in data) {
//     if (Object.prototype.hasOwnProperty.call(data, key)) {
//       console.log(key);
//       console.log(data[key]);
//     }
//   }
// }

function testForObject(data) {
  let keys = Object.keys(data);
  let result = {};
  Object.keys(data).map(key => {
    console.log(data[key]);
    result[key] = data[key];
  });
  let values = [result];

  return {
    keys,
    values
  };
}

export const someFunc = {
  test: testForObject
};
