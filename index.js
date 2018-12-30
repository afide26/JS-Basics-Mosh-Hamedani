//Switch and case

let role = prompt("What is your role?");

switch (role) {
  case 'Admin':
    console.log('Admin');
    break;
  case 'User':
    console.log('User');
    break;
  default:
    console.log('Guest');
}