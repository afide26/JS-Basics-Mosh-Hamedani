//Section 5
// 1. Objects
// 2. Factory Function - naming convention (camelNotation)
// 3. Constructor Function - naming convention (PascalNotation)
// 4. Dynamic Nature of Object - you can always add or remove objects
// 5. Constructor Property
// 6. Functions are Objects

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Constructor Draw')
  }
}

const circle2 = new Circle(4);

//Take aways
//Functions are objects

const circleCall = Circle.call({}, 1)
const circleCall2 = Circle.apply({}, [1, 'yellow'])