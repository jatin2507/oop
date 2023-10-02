`inheritance is way of creating new class from existing class. Inheritance is a way of creating new class for using the properties and methods of existing class without modifying it.`;

`in short inheritance is way of call or used methods of existing class without modifying it. or calling the methods of existing class in new class.`;
`type of inheritance in typescript:`;
`1. single inheritance`;
`2. multiple inheritance`;
`3. multilevel inheritance`;
`4. hierarchical inheritance`;
`5. hybrid inheritance`;

`single inheritance:`;
class speed {
  speed: number = 20;
  constructor(speed: number) {
    this.speed = speed;
  }
  getSpeed(): number {
    return this.speed;
  }
}

class car extends speed {
  carName: string = "toyota";
  constructor(speed: number, carName: string) {
    super(speed);
    this.carName = carName;
    this.speed = speed;
  }
  getCarDetails(): string {
    return `This Is ${this.carName} and its speed is ${this.getSpeed()}`;
  }
}

let carObj = new car(20, "toyota");
console.log(carObj.getCarDetails());

`multilevel inheritance:`;
class cartype extends car {
  carType: string;
  constructor(speed: number, carName: string, carType: string) {
    super(speed, carName);
    this.carType = carType;
  }
  getCarType(): string {
    return `This Is ${this.carName} and its speed is ${this.getSpeed()} and its type is ${this.carType}`;
  }
}

let carTypeObj = new cartype(20, "toyota", "sedan");
console.log(carTypeObj.getCarType());

`multiple inheritance:`;
`No, multiple inheritance is not supported in JavaScript. JavaScript is a prototype-based language, which means that objects inherit properties and methods from their prototypes. An object can only have one prototype, so it can only inherit from one class.`;
`if it working then example should like`;
/**class Jumpable {
    jump() {
        console.log("Jumping...");
    }
}

class Swimmable {
    swim() {
        console.log("Swimming...");
    }
}

class Amphibian implements Jumpable, Swimmable {
    jump() {
        console.log("Amphibian is jumping...");
    }

    swim() {
        console.log("Amphibian is swimming...");
    }
}

const frog = new Amphibian();
frog.jump(); // Output: Amphibian is jumping...
frog.swim(); // Output: Amphibian is swimming... */

`hierarchical inheritance:`;
`In Hierarchical Inheritance, one class serves as a superclass (base class) for more than one subclass.`
class car1 extends speed{
    constructor(speed: number) {
        super(speed);
        this.speed = speed;
    }   
    getCarDetails(): string {
        return `This Is car1 and its speed is ${this.getSpeed()}`;
    }
}
class car2 extends speed{
    constructor(speed: number) {
        super(speed);
        this.speed = speed;
    }   
    getCarDetails(): string {
        return `This Is car2 and its speed is ${this.getSpeed()}`;
    }
}
class car3 extends speed{
    constructor(speed: number) {
        super(speed);
        this.speed = speed;
    }   
    getCarDetails(): string {
        return `This Is car3 and its speed is ${this.getSpeed()}`;
    }
}

let car1Obj = new car1(20);
console.log(car1Obj.getCarDetails());
let car2Obj = new car2(30);
console.log(car2Obj.getCarDetails());
let car3Obj = new car3(40);
console.log(car3Obj.getCarDetails());

`hybrid inheritance:`;
`Hybrid inheritance is a combination of multiple inheritance and multilevel inheritance.`
