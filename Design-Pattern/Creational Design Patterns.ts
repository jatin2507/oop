`Design Pattern Is Reusable Elements of a Object Oriented Design`;
`Design Pattern Is a Solution to a Problem in a Context`;
`design pattern is not algorithm or data structure. that is like idea or template`;

// Creational Design Patterns
`Creational Design Patterns are concerned with the way of creating objects`;
`Creational Design Patterns are used to create objects in a systematic way`;
`Creational Design Patterns are used to create objects in a manner suitable to the situation`;

//type of Creational Design Patterns
`Singleton Pattern`;
`Factory Pattern`;
`Abstract Factory Pattern`;
`Builder Pattern`;
`Prototype Pattern`;

// Singleton Pattern
`single Ton pattern is design that class has only one immutable instance`;
`let make this class to only one isntance is created ...`;

let instance: any;
class Config {
  constructor() {
    if (instance) throw new Error("You can't create more than 1 instance");
    instance = this;
  }
  start() {
    console.log("App has started");
  }
  update() {
    console.log("App has updated");
  }
}

// const instance1 = new Config();
// const instance2 = new Config();
// //checking two instance is equal or not
// console.log(instance1 == instance2);
` Also use static method to create singleTon pattern or object Freeze method`;

//Factory Pattern
`Factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.`;

// We have a class or "concrete factory" for each vehicle type
class Car {
  name: any;
  wheels: any;
  constructor() {
    this.name = "Car";
    this.wheels = 4;
  }
  turnOn = () => console.log("Chacabúm!!");
}

class Truck {
  name: any;
  wheels: any;
  constructor() {
    this.name = "Truck";
    this.wheels = 8;
  }
  turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!");
}

class Motorcycle {
  name: any;
  wheels: any;
  constructor() {
    this.name = "Motorcycle";
    this.wheels = 2;
  }
  turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!");
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
  createVehicle: function (type: any) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      case "motorcycle":
        return new Motorcycle();
      default:
        return null;
    }
  },
};

const car = vehicleFactory.createVehicle("car"); // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck"); // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle");

`Builder Pattern`;
`The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.

The cool thing about this pattern is that we separate the creation of properties and methods into different entities.`;
// We declare our objects
const bug1: any = {
  name: "Buggy McFly",
  phrase: "Your debugger doesn't work with me!",
};

const bug2: any = {
  name: "Martiniano Buggland",
  phrase: "Can't touch this! Na na na na...",
};

// These functions take an object as parameter and add a method to them
const addFlyingAbility = (obj: any) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

const addSpeechAbility = (obj: any) => {
  obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk!`);
};

// Finally we call the builder functions passing the objects as parameters
addFlyingAbility(bug1);
// bug1.fly(); // output: "Now Buggy McFly can fly!"

addSpeechAbility(bug2);
// bug2.saySmthg(); // output: "Martiniano Buggland walks the walk and talks the talk!"

`Prototype Pattern`;
`The Prototype pattern is used to create objects by cloning an existing object. This pattern is used to: create objects when the type of object to create is determined by a prototypical instance, or to avoid building a class hierarchy of factories that parallels the class hierarchy of products.`;
`Avoid subclasses of an object creator in the client application, like the factory pattern does.`;
// We declare our prototype object with two methods
const enemy: any = {
  attack: () => console.log("Pim Pam Pum!"),
  flyAway: () => console.log("Flyyyy like an eagle!"),
};

// We declare another object that will inherit from our prototype
const bug01: any = {
  name: "Buggy McFly",
  phrase: "Your debugger doesn't work with me!",
};

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bug01, enemy);

// With getPrototypeOf we read the prototype and confirm the previous has worked
// console.log(Object.getPrototypeOf(bug01)); // { attack: [Function: attack], flyAway: [Function: flyAway] }

// console.log(bug01.phrase); // Your debugger doesn't work with me!
// bug01.attack(); // Pim Pam Pum!
// bug01.flyAway(); // Flyyyy like an eagle!
