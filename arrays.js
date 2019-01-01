//Lesson Reducing an Array

const numbers = [2, -1, 3, 1, 21];


//Use Long method

let sum = 0;

for (let num of numbers)
  sum += num;
console.log(sum);

//More elegant => Reduce method 2 arguments, function, and initial value;

const reducedSum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(reducedSum);