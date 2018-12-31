//Sums and Multiples of 3 and 5

console.log(sumMultiples(30))

//3: 3, 6,9,12,15,18,21,24,27,30 =165
//5: 5, 10,15,20,25,30 = 105
function sumMultiples(limit) {
  let multiple = 0;
  //My solution
  // for (let i = 0; i <= limit; i++) {
  //   if ((i % 3 === 0))
  //     multiple += i;
  //   else if ((i % 5 === 0))
  //     multiple += i;
  // }

  //Instructor's solution
  for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
      multiple += i;

  return multiple;
}