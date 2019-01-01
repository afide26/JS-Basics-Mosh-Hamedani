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
//12. String - built in Object

//String primitive
const message = 'This is my \n \'first message\''
console.log(message.length)
console.log(message.includes('This')) //case sensitive
console.log(message.startsWith('This'))
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'))
//String Object
const another = new String('hi, string')