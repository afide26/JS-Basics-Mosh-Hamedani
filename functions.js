//Lesson 5 Getters and Setters
const person = {
  firstName: 'Alan',
  lastName: 'Fidelino',
  personFullName() { //Read only
    return `${person.firstName} ${person.lastName}`
  },
  get fullName() { //Prefix the function with get
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) { //Prefix the function with get
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

person.fullName = "Carl Fidelino"
console.log(person)
console.log(person.personFullName()); //Read only
console.log(person.fullName); //Getter, see the property was accessed.

//getters - access properties of an object
//setters - to change or mutate the values of properties of an object