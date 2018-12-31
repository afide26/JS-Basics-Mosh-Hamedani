//Count Truthy

const arr = [0, null, undefined, '', 2, 3];


function countTruthyMine(arr) {
  let truthy = 0;

  for (let item of arr) {
    if (typeof item !== 'number' || typeof item !== 'string') {
      truthy + 0;
    } else {
      truthy++;
    }
  }
  return truthy;
}

function countTruthy(arr) {
  let count = 0;

  for (let value of arr) {
    if (value) {
      count++
    }
  }
  return count;
}

console.log(countTruthy(arr));