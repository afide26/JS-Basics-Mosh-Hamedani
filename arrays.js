//Lesson Joining Arrays

const numbers = [1, 2, 3];

//Joining
const joined = numbers.join(',') //returns a string, not an array
console.log(joined);

//Split
const message = 'This is my first message'
const parts = message.split(' ') //returns an array an not a string;
console.log(parts);
const joinedTwo = parts.join('-') //returns a string, not an array
console.log(joinedTwo)