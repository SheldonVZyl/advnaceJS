//function Dog(dogName, weight, color, breed) {
//  this.dogName = dogName;
//this.weight = weight;
//this.color = color;
//this.breed = breed;
//}

//let dog1 = new Dog("Jacky", 30, "brown", "Labrador");
//let dog2 = new Dog("Mike", 12, "white", "Delmation");
//let dog3 = new Dog("Homer", 50, "yellow", "Pug");

//console.log(dog1);
//console.log(dog2);
//console.log(dog3);

//class Dog {
//  constructor(dogName, weight, color, breed) {
//  this.dogName = dogName;
//  this.weight = weight;
//  this.color = color;
//  this.breed = breed;
//  }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
//console.log(dogg.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

//class Person {
//constructor(firstname, lastname) {
//this.firstname = firstname;
//this.lastname = lastname;
//}
//}

//let p = new Person("Maaike", "van Putten");
//console.log(p);
//console.log("Howdy", p.firstname);
//console.log("Howdy", p.firstname , p.lastname);

//class Person {
//  constructor(firstname, lastname = "Doe") {
//    this.firstname = firstname;
//    this.lastname = lastname;
//}
//}

//let p = new Person("Maaike");
//console.log("Hi", p.firstname, p.lastname);

//let p2 = new Person("Mel","Lee");
//console.log("hi", p2.firstname, p2.lastname);

//class Person {
//  constructor(firstname, lastname) {
//  this.firstname = firstname;
//  this.lastname = lastname;
//  }
//  greet() {
//  console.log("Hi there! I'm", this.firstname);
//  }
//}

//let p = new Person("Maaike", "van Putten");
//p.greet();

//let p2 = new Person("Jeff", "Ike");
//p2.greet();

//class Person {
//  constructor(firstname, lastname) {
//    this.firstname = firstname;
//    this.lastname = lastname;
// }

//greet() {
//  console.log("Hi there!");
//}

//compliment(name, object) {
//  return "That's a wonderful " + object + ", " + name;
// }
//}

//let compliment = p.compliment("Harry", "hat");
//console.log(compliment);

//p.greet();
//p2.greet();
//console.log(p.compliment("Sarah", "hairstyle"));

/*class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    }
    get firstname() {
    return this.#firstname;
    }
    set firstname(firstname) {
    this.#firstname = firstname;
    }
    get lastname() {
    return this.#lastname;
    }
    set lastname(lastname) {
    this.#lastname = lastname;
    }
   }*/


/*class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(55);
console.log(motor.currentSpeed);
motor.move();
motor.doWheelie();*/

//class Person {
//  constructor(firstname, lastname) {
//      this.firstname = firstname;
//      this.lastname = lastname;
//  }
//  greet() {
//      console.log("Hi there!");
//  }
//}

//Person.prototype.introduce = function () {
//  console.log("Hi, I am", this.firstname);
//};

//Person.prototype.favoriteColor = "green";

//let p = new Person("Maria", "Saga");
//console.log(p.favoriteColor);
//p.introduce();

/Projects./

//Employee tracking app

class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Laurence", "Svekis", 10);
const person2 = new Employee("Jane", "Doe", 5);
const workers = [person1, person2];
Employee.prototype.details = function () {
    return this.first + " " + this.last + " has worked here " +
        this.years + " years";
}
workers.forEach((person) => {
    console.log(person.details());
});

//Menu items price calculator

class Menu {
    #offer1 = 10;
    #offer2 = 20;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal() {
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total() {
        return this.calTotal();
    }
}
const val1 = new Menu(2, 0);
const val2 = new Menu(1, 3);
const val3 = new Menu(3, 2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);