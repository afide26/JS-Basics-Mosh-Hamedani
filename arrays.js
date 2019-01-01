//Lesson Removing Elements

const numbers = [1, 2, 3, 4];
const spliceNumbers = [5, 6, 7, 8, 9]

//End
const last = numbers.pop();
console.log(numbers);
console.log(last);

//Start
const first = numbers.shift();
console.log(numbers);
console.log(first);

//Middle
spliceNumbers.splice(3, 2) //remove item from index 3 with 2 elements;
console.log(spliceNumbers)