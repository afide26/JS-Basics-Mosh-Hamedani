//Even Odd Number


showNumbers(15);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 == 0) console.log(`${i} "EVEN"`)
    // else console.log(`${i} "ODD"`)
    const message = (i % 2 == 0) ? console.log(`${i} "EVEN"`) : console.log(`${i} "ODD"`);
  }
}