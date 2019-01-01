//Exercise Address
//street
//city
// zipcode

let address = {
  street: 'Marlowe',
  city: 'Wetherill Pk',
  zipcode: 2164
}

function showAddressMine({ ...address
}) {
  console.log(`Your address is ${address.street}, ${address.city},
  ${address.zipcode}`)
}

function showAddress(address) {
  //Using for in
  for (let key in address)
    console.log(`${key}:`, address[key])
}

showAddress(address)