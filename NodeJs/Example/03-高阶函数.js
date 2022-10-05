let arr = [1, 5, 6, 8, 10, 20, 3, 2, 1]
arr.sort((a, b) => {
  return a - b
});
console.log(arr); // [ 1, 1,  2,  3, 5, 6, 8, 10, 20 ]
let newFilterArr = arr.filter((Element, index, array) => {
  return Element > 5;
})
console.log(newFilterArr); // [ 6, 8, 10, 20 ]