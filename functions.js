//Lesson 7 - Global vs Local Scope

// {
//   const message = "hi";
// }
// console.log(message);


function start(message, name) {

  if (message === "Hello") {
    var greeting = message + ' ' + name;
  }
  console.log(greeting); // greeting can not be accessed outside the if block;
}



start("Hello", "Alan");
//Result: Uncaught ReferencError: message is not defined
// A scope of a variable or constant determines where that variable or constant
// is accessible. When we declare a variable using 'let' or 'const', their scope
// is limited to the code block in which they are defined.