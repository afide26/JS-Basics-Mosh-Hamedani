//Exercise Array from Range
//My Solution
function arrayFromRangeMine(min, max) {
  let arr = [];
  for (let number of arr) {
    if (number <= min && number >= max) {
      arr.push(number)
    }
  }
  console.log(arr)
}

//Instructor's solution
function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i)
  return output;
}

const numbers = arrayFromRange(-10, -4);
console.log(numbers);