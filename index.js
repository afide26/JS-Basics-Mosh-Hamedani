// if...else

//Hour
//If hour is between 6am - 12pm: Good morning!
//If hour is between 1pm - 6pm: Good afternoon!
//Otherwise: Good evening!

// if(condition){
//   statement
// }else if(anotherCondition){
//   statement
// }else if(anotherCondition){
//   statement
// }else{
//   execute this instead
// }

let hour = prompt("What is the time?")

if (hour >= 6 && hour < 12)
  console.log('Good morning')
else if (hour >= 12 && hour < 18)
  console.log('Good afternoon');
else
  console.log('Good evening!');