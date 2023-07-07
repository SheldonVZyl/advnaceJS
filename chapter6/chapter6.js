//function addTwoNumbers(x = 2, y = 3) {
//    console.log(x + y);
//   }

//addTwoNumbers();
//addTwoNumbers(6, 6);
//addTwoNumbers(10);
//addTwoNumbers(1,2,3,4)

//one param arrow function

// let doingArrowStuff(10)

//two params arrow function

//function doingStuff(x) {
//  console.log(x);
//}

//let doingArrowStuff = x => console.log(x);

//doingArrowStuff("Great!");

//let addTwoNumber = (x,y) => console.log (x=y);

//let sayHi = () => console.log("hi");

//const arr = ["squirrel", "alpaca", "buddy"];
//arr.forEach(e => console.log(e));

//let spread = ["so", "much", "fun"];
//let message = ["JavaScript", "is", ...spread, "and", "very",
// "powerful"];

//function addTwoNumber(x,y){
//console.log(x+y);
//}

//let arr = [5,9];

//addTwoNumbers(...arr);

//function addFourNumbers(x, y, z, a) {
// console.log(x + y + z + a);
//}
//let arr = [5, 9];
//let arr2 = [6, 7];
//addFourNumbers(...arr, ...arr2);

// function someFunction(param1, param2) {
//console.log(param1, param2);
//}
//someFunction("hi", "there!", "How are you?");

//function someFunction(param1, ...param2) {
//console.log(param1, param2);
//}
//someFunction("hi", "there!", "How are you?");

// let favoriteSubject = prompt("What is your favorite subject?");

//let result = addTwoNumbers(4, 5);
//console.log(result);

//function addTwoNumbers(x, y) {
//  return x + y;
//}

//let resultsArr = [];
//for(let i = 0; i < 10; i ++){
//let result = addTwoNumbers(i, 2*i);
//resultsArr.push(result);
//}
//console.log(resultsArr);

//let addTwoNumbers = (x, y) => x+y;

//let result = addTwoNumbers(12,15);
//console.log(result);

//function testAvailability(x) {
//  console.log("Available here:", x);
//}
//testAvailability("Hi!");
//console.log("Not available here:", x);

//function testAvailability() {
//  let y = "Local variable!";
//console.log("Available here:", y);
//}
//testAvailability();
//console.log("Not available here:", y);

//function testAvailability() {
//  let y = "I'll return";
// console.log("Available here:", y);
//return y;
//}
//let z = testAvailability();
//console.log("Outside the function:", z);
//console.log("Not available here:", y);

//function doingStuff() {
// if (true) {
//    var x = "local";
//}
//console.log(x);
//}
//doingStuff();

//function doingStuff() {
//if (true) {
//let x = "local";
//}
//console.log(x);
//}
// doingStuff();

//function doingStuff() {
//  if (true) {
//    console.log(x);
//  let x = "local";
//}
//}
//doingStuff();

//function doingStuff() {
//  if (true) {
//    console.log(x);
//    var x = "local";
//}
//}
//doingStuff();

//function doingStuff() {
//  if (true) {
//     const X = "local";
// }
// console.log(X);
//}
//doingStuff();

//let globalVar = "Accessible everywhere!";
//console.log("Outside function:", globalVar);
//function creatingNewScope(x) {
//    console.log("Access to global vars inside function.", globalVar);
//}
//creatingNewScope("some parameter");
//console.log("Still available:", globalVar);

//let x = "global";
//function doingStuff() {
//let x = "local";
//console.log(x);
//}
//doingStuff();
//console.log(x);

//function confuseReader() {
//  x = "Guess my scope...";
// console.log("Inside the function:", x);
//}
//confuseReader();
//console.log("Outside of function:", x);

//(function (){
//  console.log("IIFE!");
//})();

//let x = "1000";

//(function () {
//  let x = "3000"
//  console.log(x)
//})();

//let result = (() => {
//  let x = "4000";
//  return x;
//})();

//let result2 = ((y) => {
//  let x = "4000";
//  return y;
//})(5000);

//console.log("x is " + x);
//console.log("result is " + result)
//console.log("result2 is " + result2)

//function getRecursive(nr) {
//  console.log(nr);
// if (nr > 0) {
//     getRecursive(--nr);
// }
//}
//getRecursive(3);

//function logRecursive(nr) {
//  alert("Started function:", nr);
//  if (nr > 0) {
//      logRecursive(nr - 1);
//  } else {
//      alert("done with recursion");
//  }
//  alert("Ended function:", nr);
//}
//logRecursive(3);

//function doOuterFunctionStuff(nr) {
//  console.log("Outer function");
//  doInnerFunctionStuff(nr);
//  function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
// }
//}
//doOuterFunctionStuff(2);

//function doOuterFunctionStuff(nr) {
//  doInnerFunctionStuff(nr);
//function doInnerFunctionStuff(x) {
//let z = 10;
//}
//console.log("Not accessible:", z);
//}
//doOuterFunctionStuff(2);

//function doOuterFunctionStuff(nr) {
//  doInnerFunctionStuff(nr);
// function doInnerFunctionStuff(x) {
//    let z = 10;
//}
//}
//doInnerFunctionStuff(3);

//function doingStuffAnonymously() {
//  console.log("Not so secret though.");
//}

//function () {
//  console.log("Not so secret though.");
// };

// let functionVariable = function () {
// console.log("Not so secret though.");
// };

// (function (nr) {
// (function doInnerFunctionStuff(x){
//   let z = 10;
// console.log(z);
//})(nr);
//})(3);

//doFlexibleStuff(functionVariable);

//function functionVariable() {
// console.log("Not so secret though.");
//};

//function doFlexibleStuff(executeStuff) {
//executeStuff();
//console.log("Inside doFlexibleStuffFunction.");
//}

//let youGotThis = function () {
// console.log("You're doing really well, keep coding!");
// };
// setTimeout(youGotThis, 1000);

//setInterval(youGotThis, 10000) 

//let val = 10;
//function tester(val) {
//val += 10;
//if (val < 100) {
//  return tester(val);
//}
//  return val;
//}
//tester(val);
//console.log(val);

//let testFunction = function () {
//  console.log("Hello");
//}();

//(function () {
//  console.log("Welcome");
//})();
//(function () {
//  let firstName = "Laurence";
//})();
//let result = (function () {
//let firstName = "Laurence";
//  return firstName;
//})();
//console.log(result);
//(function (firstName) {
//  console.log("My Name is " + firstName);
//})("Laurence");

//let test2 = (num) => num + 5;
//console.log(test2(14));

//var addFive1 = function addFive1(num) {
//  return num + 2;
//};
//let addFive2 = (num) => num + 2;
//console.log(addFive1(14));

/Projects./

//Create a recursive function

const main = function counter(i) {
  console.log(i);
  if (i < 10) {
    return counter(i + 1);
  }
  return;
}
main(0);

//Set timeout order

const one = () => console.log('one');
const two = () => console.log('two');
const three = () => {
  console.log('three');
  one();
  two();
}
const four = () => {
  console.log('four');
  setTimeout(one, 0);
  three();
}
four();
