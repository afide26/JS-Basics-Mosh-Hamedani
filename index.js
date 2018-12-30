// Logical Operators with non-booleans
// Logical AND (&&)
//Returns true if both sides are true
//console.log(false && true);// false since one side is false

// let highIncome = true;
// let goodCreditScore = true;

// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// LOGICAL OR (||)
// Either side returns true

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome || goodCreditScore; //returns true; since one side is true
console.log('Eligible', eligibleForLoan);

//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Negated result with !', applicationRefused);