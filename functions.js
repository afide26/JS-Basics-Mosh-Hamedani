//Exercise - Areas of a circle;

const circleMine = {
  radius: 2,
  area: 20,
  get circleArea() {
    return this.area
  }
}

//Instructor's solution with formula for circle's area
const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log(circle.area)