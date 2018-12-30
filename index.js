let title = document.getElementById('title');
title.innerHTML = "FizzBuzz Algorithm Exercise";
let style = {
  fontSize: '30px',
  fontWeight: 'normal',
  color: 'red',
  fontFamily: 'Arial, Helvetica, sans-serif',
  letterSpacing: '3px'
}
Object.assign(title.style, style);

function fizzBuzzMine(number) {
  if (number % 3 === 0) return console.log("Fizz");
  if (number % 5 === 0) return console.log("Buzz");
  if (typeof number !== number) return console.log('NaN')
  return console.log(number)
}

// let fizzNumber = prompt("What is the number?");
// fizzBuzzMine(fizzNumber);

//Instructor's solution

function fizzBuzz(input) {
  if (typeof input !== 'number') return console.log(NaN);

  if ((input % 3 === 0) && (input % 5 === 0))
    return "FizzBuzz";
  if (input % 3 === 0)
    return "Fizz";
  if (input % 5 === 0)
    return "Buzz"
  return input
}


let p = document.createElement('p');
p.innerHTML = fizzBuzz(false);
title.appendChild(p);

console.log(fizzBuzz(false))