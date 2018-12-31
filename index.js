//Grade

const marks = [50, 60, 55];

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calculateGrade(marks))

function calculateGrade(marks) {
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