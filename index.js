//For in loops for objects

let person = {
  firstName: 'Alan',
  lastName: 'Fidelino',
  age: 47,
  job: 'UI/UX and Front End Developer'
}

for (let key in person)
  console.log(`${key}: ${person[key]}`);


//For of loops for Arrays

let colors = ['green', 'red', 'blue'];

for (let color of colors)
  console.log(color);