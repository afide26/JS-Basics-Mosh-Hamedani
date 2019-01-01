//Lesson Testing the Elements

const numbers = [2, -1, 3, 1, 21];


//Use every method
// const allPositive = numbers.every((value) => value >= 0);
// console.log('All Positive', allPositive)


//Use some
const atLeastOnePositive = numbers.some((value) => value >= 0);
console.log('At least One Positive', atLeastOnePositive)