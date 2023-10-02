` Composition is a way of combining objects or classes to create more complex objects or functionality. It is a process of building complex objects by combining simpler objects. In composition, an object is made up of one or more instances of other classes. The main difference between inheritance and composition is that inheritance allows you to reuse existing code,while composition allows you to create more complex objects by combining simpler ones.`;

class Wheel {
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }
}

class Car {
  private wheels: Wheel[];

  constructor() {
    this.wheels = [new Wheel(5), new Wheel(10), new Wheel(15), new Wheel(20)];
  }

  getWheelSizes(): number[] {
    const wheelSizes:any = [];
    for (let wheel of this.wheels) {
      wheelSizes.push(wheel.getSize());
    }
    return wheelSizes;
  }
}

const myCar = new Car();
console.log(myCar.getWheelSizes()); // Output: [15, 15, 15, 15]
