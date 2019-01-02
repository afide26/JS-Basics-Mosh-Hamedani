//Lesson 2 - Hoisting
//Function Declaration - named functions
walk(); //can be called before it's defined;
//All function declarations are moved to the top of the file. Hoisting
run(); // function expressions cannot be called before it's defined as the variable is not yet defined before calling the function.

function walk() {
  console.log('Walk');
}

//Function expression - anonymous function assigned to a variable
const run = function () {
  console.log('Run')
};


run();