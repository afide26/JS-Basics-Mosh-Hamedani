//Speed limit 70

let title = document.getElementById('title');
title.innerHTML = 'Speed Checker'

console.log(speedChecker(130));

function checkSpeed(speed) {

  if (speed <= 74) console.log('Ok!')
  if (speed >= 75) {
    if ((speed - 75) % 5 === 0) {
      let result = (speed - 75) / 5;
      return result >= 12 ? `Licence suspended, you reached ${result} points` : `Points: ${result}`
    } else if ((speed - 75) % 5 !== 0) {
      let result = Math.floor((speed - 75) / 5);
      return result >= 12 ? `Licence suspended, you reached ${result} points` : `Points: ${result}`
    }
  }
}

// Instructor's solution

function speedChecker(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    return ('Ok!');
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) return (`Licence suspended, you reached ${points} points.`)
  else return (`Points: ${points}`)
}