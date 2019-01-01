//Lesson Combining and Slicing Arrays - Reference Types

const first = [{
  id: 1,
  name: 'a'
}];
const second = [{
  id: 2,
  name: 'b'
}]
const third = [{
  id: 3,
  name: 'c'
}]


const combined = first.concat(second);
const slice = combined.slice()
console.log(combined);
first[0].id = 10;
console.log(slice)