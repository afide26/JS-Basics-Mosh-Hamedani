//Exercise Moving Elements
const numbers = [1, 1, 2, 3, 4, 5, 5]

function countOccurences(arr, searchElement) {
  //My Solution
  // let count = 0;
  // for (let item of arr) {
  //   if (item === searchElement) {
  //     count++;
  //   }
  // }
  // return count;

  //Using reduce method

  return arr.reduce((acc, curr) => {
    const occurence = (curr === searchElement) ? 1 : 0;
    return acc + occurence;
  }, 0)
}

const count = countOccurences(numbers, 5);
console.log(count);