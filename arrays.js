//Lesson Sorting Arrays

const numbers = [2, 3, 1];

//Sort - Works only for strings or numbers
numbers.sort();
console.log(numbers);
//Numbers Reverse
numbers.reverse()
console.log(numbers)

// Sorting Arrays with objects
console.log('=========');

const courses = [{
    id: 1,
    name: 'Node.js'
  },
  {
    id: 4,
    name: 'React'
  },
  {
    id: 2,
    name: 'JavaScript'
  }
]

courses.sort();
console.log(courses); //Nothing will change

//Solution - pass a function to the sort method

courses.sort(function (a, b) {
  //a < b => -1;
  //a > b => 1;
  //a === b => 0;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;
})

console.log(courses);