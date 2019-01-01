//Section 5
// 1. Objects
// 2. Factory Function - naming convention (camelNotation)
// 3. Constructor Function - naming convention (PascalNotation)
// 4. Dynamic Nature of Object - you can always add or remove objects
// 5. Constructor Property

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Factory Draw')
    },
    color: 'red'
  }
}

const circle1 = createCircle(3);

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Constructor Draw')
  }
}

const circle2 = new Circle(4);

//Take aways
//Every object has a constructor property that points to the function that created the object