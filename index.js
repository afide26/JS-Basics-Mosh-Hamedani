//Exercise Landscape or Portrait

//My Solution
function isLandscape(width, height) {
  return (width > height) ? true : false;
}

// Instructor's solution shorter way
function isLandscape(width, height) {
  return (width > height) //this line returns true or false.
}

console.log(isLandscape(200, 200))