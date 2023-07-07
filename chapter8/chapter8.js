/*let s = "Hello";
console.log(
    s.concat(" there!")
    .toUpperCase()
    .replace("THERE", "you")
    .concat(" You're amazing1")
);

let x = 7;
console.log(Number.isNaN(x));*/

/*console.log(isNaN(x)); */

/*let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);*/

/*let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);*/

/*let str_float ="7.6";
let float_float = parseFloat(str_float);
console.log("Type of", float_float, "is a", typeof float_float);

let str_version_nr = "2.3.4";
let float_version_nr = parseFloat(str_version_nr);
console.log("Type of", float_version_nr, "is a", typeof float_version_nr);

let str_int = "6";
let float_int = parseFloat(str_int);
console.log("Type of", float_int, "is a", typeof float_int);

let str_binary = "0b101";
let float_binary = parseFloat(str_binary);
console.log("Type of", float_binary, "is a", typeof float_binary);

let str_nan = "hello!";
let float_nan = parseFloat(str_nan);
console.log("Type of", float_nan, "is a", typeof float_nan);*/

/*let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff);*/

/*let arr = ["squirrel", 5, "Ted", new Date(), true];
function checkString(element, index) {
    return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

console.log(arr.every(checkString));
console.log(filterArr.every(checkString));*/

/*arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 5);
console.log(arr);*/

/*function go(e) {
    eval(e.value);
}*/

/*let arr =[1,2,3,4];
let mapped_arr=arr.map(x=> x + 1);
console.log(mapped_arr);*/

/*let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);*/

/*let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);*/

/*let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);

let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);*/

/*let letters = ["a", "b", "c"];
let x = letters.join('-');
console.log(x);*/

/*let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

let notFound = searchStr.search("JavaScript");
console.log(notFound);*/

/*let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let pos2 = poem.charAt(1000);
console.log(pos2);*/

/*let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital);*/

/*let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);

let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2);

let bool_start3 = encouragement.toLowerCase().startsWith("you");
console.log(bool_start3);

let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);*/

/*let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));
let str = "hi";
console.log(isNaN(str));

let str1 = "5";
console.log(isNaN(str1));*/

/*let x = 3;
let str = "finite";
console.log(isFinite(x));
console.log(isFinite(str));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));*/

/*let x = 1.23456;
let newX = x.toFixed(2);*/

/*let x = 1.23456;
let newX = x.toFixed(3); 
console.log(x, newX);*/

/*let x = 1.23456;
let newX = x.toPrecision(4); 
console.log(newX);*/

/*let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);

let highestOfWords = Math.max("hi", 3, "bye");
console.log(highestOfWords);

let result = Math.sqrt(64);
console.log(result);

let result2 = Math.pow(5, 3);
console.log(result2);

let x = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.round(x));
console.log("Y:", y, "becomes", Math.round(y));

console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));

let negativeX = -x;
let negativeY = -y;
console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

console.log("X:", x, "becomes", Math.floor(x));
console.log("Y:", y, "becomes", Math.floor(y));

console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

console.log("X:", x, "becomes", Math.trunc(x));
console.log("Y:", y, "becomes", Math.trunc(y));

let x1 = 2;
let exp = Math.exp(x);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);*/

/*let currentDateTime = new Date();
console.log(currentDateTime);

let now2 = Date.now();
console.log(now2);*/

/*let milliDate = new Date(1000);
console.log(milliDate);*/

/*let milliDate = new Date(1000);
console.log(milliDate);*/

/*let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);*/

/*let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());*/

/*var c = "http://www.google.com?id=1000&n=500";
var e = encodeURIComponent(c);*/

/Projects./

//Word scrambler

let str = "JavaScript";

function scramble(val) {
    let max = val.length;
    let temp = "";
    for (let i = 0; i < max; i++) {
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index];
        console.log(temp);
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    }
    return temp;
}
console.log(scramble(str));

//Countdown timer

const endDate = "Sept 1 2022";
function countdown() {
    const total = Date.parse(endDate) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}
function update() {
    const temp = countdown();
    let output = "";
    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 1000);
}
update();