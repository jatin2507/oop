`
abstraction is often achieved through the use of modules and functions that hide the complexity of underlying processes. Let's consider a simple example where you create an abstraction for handling file operations. In this example, we'll create a module that abstracts away the details of reading and writing to a file:`;

`In short abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.`;


class Rectangle {
  private len: number;
  private width: number;

  constructor(len: number, width: number) {
    this.len = len;
    this.width = width;
  }

  // Abstraction for calculating the area
  calculateArea(): number {
    return this.len * this.width;
  }

  // Abstraction for calculating the perimeter
  calculatePerimeter(): number {
    return 2 * (this.len + this.width);
  }

  // Getter for len
  getlen(): number {
    return this.len;
  }

  // Getter for width
  getWidth(): number {
    return this.width;
  }
}

const myRectangle = new Rectangle(5, 10);

// Using the abstraction to get the dimensions
console.log("len:", myRectangle.getlen());
console.log("Width:", myRectangle.getWidth());

// Using the abstraction to calculate the area and perimeter
console.log("Area:", myRectangle.calculateArea());
console.log("Perimeter:", myRectangle.calculatePerimeter());
