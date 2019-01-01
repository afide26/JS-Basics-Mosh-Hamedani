//Lesson Finding Elements

//Primitives
const numbers = [1, 2, 3, 1, 4]

//IndexOf
console.log('Index of', numbers.indexOf(1)) //Will return -1 if the index of the element is not in the array;
console.log('Index of', numbers.indexOf('a'));

//Last index of - Finding the last index of a repeated item
console.log('Last index of', numbers.lastIndexOf(1));

//Check if element is in the array 
//Old method
console.log('Long method', numbers.indexOf(1) !== -1);
//New method
console.log('Includes method', numbers.includes(1));