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
// Example
const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
}

//Old way of cloning
const another = {}

for (let key in circle)
  another[key] = circle[key]

console.log(another);

//New method - assign

const clone = Object.assign({
  name: 'Alan'
}, circle);
console.log(clone)

//Spread Operator - take all the properties of the method

const circleSpread = {
  name: 'Cloned Circle',
  ...circle
}
console.log(circleSpread)