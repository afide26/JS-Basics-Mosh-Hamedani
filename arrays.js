//Exercise Get Max
const numbers = [1, 1, 2, 3, 4, 5, 55]

function getMaxMine(array) {
  return Math.max(...array)
}

//Instructor's solution
function getMax(array) {
  //Simple solution
  // if (array.length === 0) return undefined;

  // let max = array[0];
  // for (let i = 1; i < array.length; i++)
  //   max = array[i];
  // return max;

  if (array.length === 0) return undefined;

  return array.reduce((a, b) => {
    return a > b ? a : b;
  })


}

console.log(getMax([]));
// Solution from https://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/