//Stars
//My Solution
showStars(3);

function showStarsMine(rows) {
  let star = '*'

  for (let i = 0; i <= rows; i++) {
    console.log(star.repeat(i))
  }
}

function showStars(rows) {

  for (let row = 0; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++) {
      pattern += '*';
    }
    console.log(pattern);
  }
}