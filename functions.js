//Lesson 7 - Error Handling

const person = {
  firstName: 'Alan',
  lastName: 'Fidelino',
  set fullName(value) {
    //Error handling in the first line of the code block; defensive programming.
    // if (typeof value !== 'string') return console.error(`The value must be a string`)
    //Throwing an error or throw an exception. When the unexpected happens
    if (typeof value !== 'string') {
      throw new Error('The value must be a string');
    }

    const parts = value.split(' '); // convert the passed string to an array;
    if (parts.length !== 2) {
      throw new Error('Enter a first and last name!')
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
}

//person.fullName = 'Carl Fidelino'; //Setter

//use the try and catch

try {
  //try a statement for errors
  person.fullName = 'Alan Fidelino';
} catch (e) {
  alert(e);
}
console.log(person) //Getter;

//*** Take aways: */
// When an exception is thrown, the next lines are not executed, exceptions can be done for multiple cases;
//Try and catch to see if there are errors in the code execution;