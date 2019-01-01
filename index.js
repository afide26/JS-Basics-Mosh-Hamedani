//Section 5
// 1. Objects
// 2. Factory Function - naming convention (camelNotation)
// 3. Constructor Function - naming convention (PascalNotation)
// 4. Dynamic Nature of Object - you can always add or remove objects
// 5. Constructor Property
// 6. Functions are Objects
// 7. Value vs Reference Types
// 8. Enumerating Properties of an Object
// 9. Cloning an Object
// 10. Garbage collection
//Memory allocations and dealloactions happen automatically. Memories not used are deallocated automatically.
//11. Math - built in properties
//E.g. methods
console.log(Math.random()) //returns a random number
console.log(Math.round(1.6)) //returns the highest rounded number
console.log(Math.max(1, 2, 59, 39, 99)) //returns the highest value of a collection
console.log(Math.max.apply(null, [1, 2, 59, 39, 109])) //use apply to use it for arrays
let numbers = [1, 2, 3, 5, 6, 77]

//Simpler way using spread
console.log(Math.max(...numbers)) //Using spread operator for an array