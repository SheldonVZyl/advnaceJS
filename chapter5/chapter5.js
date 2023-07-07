/*let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
   ];

   for (let i = 0; i < groups.length; i++) {
    let matches = 0;
   for (let j = 0; j < groups[i].length; j++) {
    if(groups[i][j].startsWith("M")){
    matches++;
    } else {
    continue;
    }
    if (matches === 2){
    console.log("Found a group with two names starting with an M:");
    console.log(groups[i]);
    break;
        }
    }
   }
   for (let group of groups){
    for (let member of group){
    if (member.startsWith("M")){
    console.log("found one starting with M:", member);
    break;
    }
  }
}

outer:
for (let group of groups) {
 inner:
 for (let member of group) {
 if (member.startsWith("M")) {
 console.log("found one starting with M:", member);
 break outer;
    }
}
}
*/

/* exercise 5.1*/

/*const max = 5;
const ranNumber = Math.floor(Math.random() * max) + 1;
//console.log(ranNumber);
let correct = false;
while (!correct) {
  let guess = prompt("Guess a Number 1 - " + max);
  guess = Number(guess);
  if (guess === ranNumber) {
    correct = true;
    console.log("You got it " + ranNumber);
  } else if (guess > ranNumber) {
    console.log("Too high");
  } else {
    console.log("Too Low");
  }
}
*/
/* exercise 5.2*/

/*let counter = 0;
let step = 5;
do {
  console.log(counter);
  counter += step;
}
while (counter <= 100);

/* exercise 5.3*/

/*const myWork = [];
for (let x = 1; x < 10; x++) {
  let stat = x % 2 ? true : false;
  let temp = {
    name: `Lesson ${x}`, status: stat
  };
  myWork.push(temp);
}
console.log(myWork);

/* exercise 5.4*/

/*const myTable = [];
const rows = 4;
const cols = 7;
let counter = 0;
for (let y = 0; y < rows; y++) {
  let tempTable = [];
  for (let x = 0; x < cols; x++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}
console.table(myTable);

/* exercise 5.5*/

/*const grid = [];
const cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
  if (counter % 8 == 0) {
    if (row != undefined) {
      grid.push(row);
    }
    row = [];
  }
  counter++;
  let temp = counter;
  row.push(temp);
}
console.table(grid);

/* exercise 5.6*/

/*const myArray = [];
for (let x = 0; x < 10; x++) {
  myArray.push(x + 1);
}
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
for (let val of myArray) {
  console.log(val);
}

/* exercise 5.7*/

/*const obj = {
  a: 1,
  b: 2,
  c: 3
};
for (let prop in obj) {
  console.log(prop, obj[prop]);
}
const arr = ["a", "b", "c"];
for (let w = 0; w < arr.length; w++) {
  console.log(w, arr[w]);
}
for (el in arr) {
  console.log(el, arr[el]);
}

/* exercise 5.8*/

/*let output = "";
let skipThis = 7;
for (let i = 0; i < 10; i++) {
  if (i === skipThis) {
    continue;
  }
  output += i;
}
console.log(output);
Alternatively, the following code could be used, replacing continue with break:
let output = "";
let skipThis = 7;
for (let i = 0; i < 10; i++) {
  if (i === skipThis) {
    break;
  }
  output += i;
}
console.log(output);*/

/Projects./

//Math multiplication table

const myTable = [];
const numm = 20;
for (let x = 0; x < numm; x++) {
  const temp = [];
  for (let y = 0; y < numm; y++) {
    temp.push(x * y);
  }
  myTable.push(temp);
}
console.table(myTable);