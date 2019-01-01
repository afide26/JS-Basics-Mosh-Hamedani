//Lesson Iterating an Array

const numbers = [1, 2, 3];

//For of
for (let number of numbers)
  console.log(number);

//For each

numbers.forEach((number, i) => console.log(i, number))