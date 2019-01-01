//Lesson Arrow Functions

//Reference types
const courses = [{
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  }
]

// Find a course with name of 'a' as in the example
//Will return false as each object is distinct; even if the values are the same
// console.log(courses.includes({
//   id: 1,
//   name: 'a'
// }))

//Use the find method instead

const course = courses.find(course => course.name == 'bdfjajgl;k');
console.log('Find', course);

//Or use findIndex

const course2 = courses.findIndex(course => course.name == 'c');

console.log('Find index', course2);