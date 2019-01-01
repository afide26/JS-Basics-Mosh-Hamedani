//Exercise Factory and Constructor Function


//Constructor Address
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const add1 = new Address('a', 'b', 1243);
const add2 = new Address('a', 'b', 1243)
const add3 = add1;

//Check if the property values are equal
function areEqual(address1, address2) {
  return address1.street === address2.street && address1.city === address1.city && address1.zipCode === address2.zipCode;
}

console.log(areEqual(add1, add2));

//Check if the Object has same reference types

function areSame(address1, address2) {
  return address1 === address2
}

console.log(areSame(add1, add2));
console.log(areSame(add1, add3))