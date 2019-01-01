//Section 5
// 1. Objects
// 2. Factory Function - naming convention (camelNotation)
// 3. Constructor Function - naming convention (PascalNotation)
// 4. Dynamic Nature of Object - you can always add or remove objects

const circle = {
  radius: 1
}

circle.color = 'yellow'
circle.draw = function () {
  console.log('Draw')
}

delete(circle.color)
delete circle.draw
console.log(circle);