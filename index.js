//Grade

const marks = [99, 75, 99, 77, 100];

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calculateGrade(marks))

function calculateGradeOld(marks) {
  let total = 0;


  for (let grade of marks)
    total += grade

  let average = total / marks.length;
  console.log(average);

  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}

function calculateAverage(arr) {
  let total = 0;

  for (let value of arr) {
    total += value
  }
  return total / arr.length;
}

function calculateGrade(marks) {
  const average = Math.round(calculateAverage(marks));

  if (average < 60) return `${average} - 'F';`
  if (average < 70) return `${average} - 'D'`;
  if (average < 80) return `${average} - 'C'`;
  if (average < 90) return `${average} - 'B'`;
  return `${average} - 'A'`
}