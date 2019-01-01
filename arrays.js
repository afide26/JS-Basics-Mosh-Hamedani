//Exercise Excep
const numbers = [1, 2, 3, 4, 1, 1]

const output = except(numbers, [1, 2]);
console.log(output)

function exceptMine(array, excluded) {
  for (let a = 0; a < array.length; a++) {
    let newArray = []
    for (let b = 0; b < excluded.length; b++) {
      if (a !== b) {
        newArray.push(a);
      }
    }
    return newArray;
  }
}

//Instructor's solution

function except(array, excluded) {
  let output = [];
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element)
  return output;
}