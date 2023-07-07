/*arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];
arr3 = new Array(10);
arr4 = [10];
console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

let shoppinglist = ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
    "Pop", "Juice", "Pop"];
shoppinglist.sort();*/


/*Exercise3.1*/

/*const myList =["Milk", "Bread", "Bananas"];
console.log(myList.length);
myList[1] = "Apples";
console.log(myList);*/

/*Exercise3.2*/

/*const myList = [];
myList.push("Milk", "Bread", "Apples");
myList.splice(1, 1, "Bananas", "Eggs");
const removeLast = myList.pop();
console.log(removeLast);
myList.sort();
console.log(myList.indexOf("Milk"));
myList.splice(1, 0, "Carrots", "Lettuce");
const myList2 = ["Juice", "Pop"];
const finalList = myList.concat(myList2, myList2);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);*/

/*Exercise3.3*/

/*const myArr = [1, 2, 3];
const bigArr = [myArr, myArr, myArr];
console.log(bigArr[1][1]);
console.log(bigArr[0][1]); 
console.log(bigArr[2][1]);*/

/*Exercise3.4*/

/*const myCar = {
    make: "Volkswagen",
    model: "Jetta",
    tires: 4,
    doors: 4,
    color: "white",
    forSale: false
};
let propColor = "color";
myCar[propColor] = "black";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);*/

/*Exercise3.5*/

/*const people = {friends:[]};
const friend1 = {first: "Laurence", last: "Svekis", id: 1};
const friend2 = {first: "Jane", last: "Doe", id: 2};
const friend3 = {first: "John", last: "Doe", id: 3};
people.friends.push(friend1, friend2, friend3);
console.log(people);*/

/Projects./

//Manipulating an array
theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log(theList);

//Company product catalog
const inventory = [];
const item3 = {
    name: "computer",
    model: "imac",
    cost: 1000,
    qty: 3
}
const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}
const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 650,
    qty: 1
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty);