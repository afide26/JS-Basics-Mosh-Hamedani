//Section 5
// 1. Objects
// 2. Factory Function - naming convention (camelNotation)
// 3. Constructor Function - naming convention (PascalNotation)

//Factory Function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Draw - Method from Factory Function')
    }
  }
}

//Call the function above
const circle1 = createCircle(2);


//Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('Draw from constructor')
  }
}

//Call the function above
const circle2 = new Circle(3);