//Show properties

const person = {
  name: 'Alan',
  age: 47,
  ID: 1234,
  job: 'Developer'
}

function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] === 'string') {
      console.log(key, object[key])
    }
  }
}

// Call the function
showProperties(person)