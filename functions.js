//Sum of Arguments

function sumMine(...args) {
  if (Array.isArray(args) === true) {
    args.reduce((a, b) => a + b)
  }
  let total = 0;
  for (let value of args)
    total += value;
  return total;

}

//Instructor's solution
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
  return items.reduce((a, b) => a + b)
}

let numbers = [1, 2, 3, 5]

console.log(sum(1, 2, 3, 4));
console.log(sum(numbers))