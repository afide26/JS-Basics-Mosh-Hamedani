//Break and Continue

let a = 0;

while (a <= 10) {
  //Use of break for certain conditions
  if (a === 5) break;
  console.log('Break lesson', a);
  a++
}

let b = 0
while (b <= 10) {
  if (b % 2 === 0) {
    b++;
    continue;
  }
  console.log('Continue lesson', b);
  b++
}