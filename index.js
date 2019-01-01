//Exercise Factory and Constructor Function


//Constructor Address
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const newAdd = new Address('Charles', 'Smithfield', 2164);
console.log(`Constructor function: ${newAdd.street}, ${newAdd.city}, ${newAdd.zipCode}`)

//Factory function

function makeAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  }
}

const newAdd2 = makeAddress('Marlowe', 'Wetherill Pk', 2164);
console.log(`Factory function: ${newAdd2.street}, ${newAdd2.city}, ${newAdd2.zipCode}`)