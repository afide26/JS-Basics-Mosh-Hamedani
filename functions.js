//Lesson 4 - Default Parameters

//Default parameters

//Use case:  default interest using logical or
function interest(principal, rate, years) {
  //Use the logical or to use a default value if no argument is provided
  rate = rate || 3.5;
  years = years || 5;

  return principal * rate / 100 * years;
}

//Use case:  using default params
function interestParams(principal, rate = 3.5, years = 5) {
  //Need to pass default values after the first param or use undefined if not using a predefined value;
  return principal * rate / 100 * years;
}


console.log(interestParams(10000));