/*let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);


let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";*/


/*console.log(str3);
console.log(str4);*/

/*let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10;
let hexNr = 0x3E8;
let binNr = 0b101;*/

/*console.log(intNr);
console.log(decNr);
console.log(expNr);
console.log(octNr);
console.log(hexNr);
console.log(binNr);*/

/*let intNr2 = 3434;
let intNr3 = -111;
let decNr2 = 45.78;
let binNr2 = 0b100;*/

/*console.log(intNr2);
console.log(intNr3);
console.log(decNr2);
console.log(binNr2);*/

/*let bigNr = 90071992547409920n;

let result = bigNr + intNr;*/

/*let str0 = 'Laurence'; 
let str1 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(str0);
console.log(str1);
console.log(val1);
console.log(val2);
console.log(myNum);*/

/*let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;*/

/*let str0 = "Hello ";
let str1 = "addition";
let result2 = str0 + str1;*/

/*let nr1 = 20;
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);*/

/*Exercise2.1*/

/*console.log(typeof(str1));
console.log(typeof(str2));
console.log(typeof(val1));
console.log(typeof(val2));
console.log(typeof(myNum));*/

/*Exercise2.2*/

/*const myName = "Maaike";
const myAge = 29;
const coder = true;
const message = "Hello, my name is " + myName + ", I am " + myAge + " years old and I can code JavaScript: " + coder + ".";
console.log(message);*/

/*Exercise2.3*/

/*let a = window.prompt("Value 1?");
let b = window.prompt("Value 2?");
a = Number(a);
b = Number(b);
let hypotenuseVal = ((a * a) + (b * b)) ** 0.5;
console.log(hypotenuseVal);*/

/*Exercise2.4*/

/*let a = 4;
let b = 11;
let c = 21;
a = a + b;
a = a / c;
c = c % b;
console.log(a, b, c);*/

/*Projects*/

/Miles-to-kilometers converter./
//Convert miles to kilometers. 
//1 mile equals 1.60934 kilometers.
let myDistanceMiles = 155;
let myDistanceKM = myDistanceMiles * 1.60934;
console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");

/BMI calculator./
//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
let inches = 72;
let pounds = 180;
let weight = pounds / 2.2046; // in kilos
let height = inches * 2.54; // height in centimetres
console.log(weight, height);
let bmi = weight / (height / 100 * height / 100);
console.log(bmi);