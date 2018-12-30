// For in loops (used for objects)

let person = {
  name: "Alan",
  age: 47,
  job: 'Developer'
}

for (let key in person)
  console.log(key, person[key])