//Section 5
// 1. Objects
// 2. Factory Function - naming convention (camelNotation)
// 3. Constructor Function - naming convention (PascalNotation)
// 4. Dynamic Nature of Object - you can always add or remove objects
// 5. Constructor Property
// 6. Functions are Objects
// 7. Value vs Reference Types
// 8. Enumerating Properties of an Object
// Example
const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
}

for (let key in circle) {
  console.log(key, circle[key])
}

for (let key of Object.keys(circle))
  console.log(key)

for (let entry of Object.entries(circle))
  console.log(entry)

if ('color' in circle) console.log('yes');