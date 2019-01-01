//Section 5
// 1. Objects
// 2. Factory Function - naming convention (camelNotation)
// 3. Constructor Function - naming convention (PascalNotation)
// 4. Dynamic Nature of Object - you can always add or remove objects
// 5. Constructor Property
// 6. Functions are Objects
// 7. Value vs Reference Types

// Take aways 
// Primitives are copied by value
let x = 10;
let y = x; // the initial value of x is stored in y
x = 20; // the value of x is changed but does not affect the value of y as the first value of x was copied

// Objects are copied by their reference

let obj1 = {
  name: 'Alan'
}

let obj2 = obj1; // obj2 copied obj1 which is a reference to the object

obj1.name = 'Carlos'; //when the property of the object changes, obj2's properties also change.