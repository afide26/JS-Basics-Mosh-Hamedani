//Lesson Testing the Elements

const numbers = [2, -1, 3, 1, 21];


//Use filter method - need to pass a callback function

const positiveNumbers = numbers.filter((number) => number >= 0);
console.log(positiveNumbers);

// Filtering an array of Objects - normal use case