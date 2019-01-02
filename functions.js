//Lesson 3 - Arguments

//Dynamic language - arguments of a function

// function sum(a, b) {
//   return a + b;
// }


// console.log(sum(1, 2));
// console.log(sum(1))//can pass 1 argument even if the function has 2 params; it will return undefined


function add(a, b) {
  console.log(arguments); //will print out all the arguments
  return a + b;
}

console.log(add(1, 2, 3, 4, 5));

//Make the code flexible to accept multiple arguments

function multiple() {
  let total = 0;
  for (let value of arguments)
    total += value;
  console.log(total);
  return;
}

multiple(1, 3, 4, 56, 19);