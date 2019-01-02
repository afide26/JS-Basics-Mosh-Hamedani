//Lesson 9 - Let vs Var
//Difference with var vs let
//Problems with var
//var is function scoped
//const and let are block scoped 
function starVar() {
  for (var i = 0; i < 5; i++)
    console.log(i)
  console.log(`i is still accessible outside the for loop ${i}`);
}

starVar();

function start() {
  for (let i = 0; i < 5; i++)
    console.log(i)
  console.error(`i is not accessible outside the for loop ${i}`);
}

start();