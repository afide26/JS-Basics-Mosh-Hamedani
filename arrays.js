//Lesson Combining and Slicing Arrays

const first = [1, 2, 3, 4];
const second = [5, 6, 7]
const third = [8, 9, 10]
//Use the concat method. This returns a new array, the previous arrays are not affected

const combined = first.concat(second);
console.log(combined);

//Use the spread operator method

const combinedTwo = [...first, ...third];
console.log(combinedTwo);

//Slice - includes the first argument which is the index
const slice1 = combinedTwo.slice(3); //remove all items before the index
console.log(slice1)
console.log(`----------`)
const slice2 = combinedTwo.slice(3, 6); //remove all items before the index and after the second argument
console.log(slice2)