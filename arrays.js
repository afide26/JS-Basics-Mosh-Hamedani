//Exercise Write a Function that returns like includes
//My Solution
const numbers = [1, 2, 3, 4]

console.log(numbers.includes(1));

function includesNumber(arr, searchElement) {
  return arr.indexOf(searchElement) === -1 ? false : true;
}
console.log(includesNumber(numbers, 4));

//Instructor's solution

function includes(arr, searchElement) {
  for (let element of arr) {
    if (element === searchElement)
      return true
  }
  return false;
}
console.log(includes(numbers, 4));