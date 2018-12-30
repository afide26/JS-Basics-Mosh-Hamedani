//Logical Operators with Non-booleans pt2

//False values
// undefined 
// null 
// 0
// false
// ''
// NaN

// Using || if the operand is falsy, the truthy value (values not listed above) will be returned
// e.g.
console.log(false || 'Alan');
// will return 'Alan'

// Anything not falsy is truthy
// consider the next expression, the first truthy value is returned, this is called Short-circuiting

let shortCircuit = 0 || 1 || 5;
console.log('Result of 0 || 1 || 5 ==', shortCircuit);


// Real world example

let userColor = '';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log('Current color ==', currentColor);