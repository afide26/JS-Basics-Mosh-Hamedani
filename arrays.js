//Lesson Spread Operator

const first = [1, 2, 3];
const second = [4, 5, 6, 9]


const combined = [...first, 'a', ...second, 'b'];
const copy = [...combined];
console.log(combined)
console.log(copy === combined)