//Lesson Mapping an Array

const numbers = [2, -1, 3, 1, 21];


//Use the Map method

const positiveNumbers = numbers.filter((number) => number >= 0);
const markUps = positiveNumbers.map(n => `<li>${n}</li>`)
console.log('Mapped', markUps)

//Add the li tags to ul

const html = '<ul>' + markUps.join('') + '</ul>';
console.log('--------');
console.log(html)


//Mapping to objects

const items = positiveNumbers.map(n => ({
  value: n
}));
console.log(items);

//Chaining

const chained = positiveNumbers.filter(n => n >= 0)
  .map(n => ({
    value: n
  }))
  .filter(obj => obj.value > 2)
  .map(obj => obj.value);
console.log('Chained', chained)