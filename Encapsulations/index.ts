`encapsulations is way of the bundling of data and methods that operate on that data within a single unit, which is called. Encapsulation is a way of hiding the implementation details of a class from outside access and only exposing a public interface that can be used to interact with the class.`;
`in short encapsulations is way of wrapping data and methods in a single unit.`;


class Car {
    private brand: string;
    private model: string;
    private speed: number;
  
    constructor(brand: string, model: string) {
      this.brand = brand;
      this.model = model;
      this.speed = 0;
    }
  
    // Public method to get the current speed
    getSpeed(): number {
      return this.speed;
    }
  
    // Public method to accelerate the car
    accelerate(increment: number): void {
      this.speed += increment;
    }
  
    // Public method to apply brakes
    brake(decrement: number): void {
      if (this.speed - decrement >= 0) {
        this.speed -= decrement;
      } else {
        this.speed = 0;
      }
    }
  
    // Public method to get the car details
    getDetails(): string {
      return `${this.brand} ${this.model} - Speed: ${this.speed} km/h`;
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car('Toyota', 'Camry');
  
  // Accessing public methods to interact with the car
  console.log(myCar.getDetails()); // Output: Toyota Camry - Speed: 0 km/h
  
  myCar.accelerate(50);
  console.log(myCar.getDetails()); // Output: Toyota Camry - Speed: 50 km/h
  
  myCar.brake(20);
  console.log(myCar.getDetails()); // Output: Toyota Camry - Speed: 30 km/h
  
  // The following line would result in a compilation error since 'brand' is private
  // console.log(myCar.brand); // Error: Property 'brand' is private and only accessible within class 'Car'.
  