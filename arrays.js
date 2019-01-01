//Lesson 1

const numbers = [3, 4]

// Methods/Properties
//Add Elements
//End
numbers.push(5, 6); //Changes the array's contents
console.log('Push', numbers);

//Start
numbers.unshift(1, 2);
console.log('Unshift', numbers)

//Middle
numbers.splice(2, 0, 'a', 'b');
console.log('Splice', numbers)