//Lesson 3 - Rest Operator

//Dynamic language - arguments of a function


//Make the code flexible to accept multiple arguments

function add(...args) { //rest operator with arguments ...args
  return args.reduce((a, b) => a + b);
}

console.log(add(1, 3, 4, 56, 19));

//Real use case: Shopping cart with discount
//Check how the discount was calculated (1 - discount);

function checkDiscount(discount, ...prices) { //...prices is same as arguments and the last parameter of the function
  const total = prices.reduce((a, b) => a + b);
  const totalDiscount = total - (total * (1 - discount));
  return `Total Price is: $${total * (1-discount)}\n Total discount is: $${totalDiscount}`
}

let rice = 20;
let milk = 40;
let disc = 0.2;

console.log(checkDiscount(disc, milk, rice))