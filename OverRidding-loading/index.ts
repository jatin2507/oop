`over ridding:  method in a derived class is intended to override a method in the base class. However, it's TypeScript does not have a built-in override. Instead, simply declare the method in the derived class with the same signature as the method in the base class.`;

`using harichical inheritance we can achive over ridding`

class Animal {
    makeSound(): void {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    // Overriding the makeSound method from the base class
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    // Overriding the makeSound method from the base class
    makeSound(): void {
        console.log("Meow");
    }
}

// Using the overridden methods
const dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!

const cat = new Cat();
cat.makeSound(); // Output: Meow



`now what is overridding`;
`it seem look deficult to achive over ridding in typescript`;
`prop:
It saves the memory space so that program execution becomes fast.
It provides code reusability, which saves time and efforts.
It increases the readability of the program.
Code maintenance is easy.`
function add(a:string, b:string): string;  
function add(a:number, b:number): number;  
function add(a: any, b:any): any {  
    return a + b;  
}  
console.log("Addition: " + add("Hello ", "JavaTpoint"));  
console.log("Addition: " + add(30, 20));  

`using Classes we can achive over ridding in typescript`
class Calculator {
    add(x: number, y: number): number;
    add(x: string, y: string): string;
    add(x: any, y: any): any {
        // Implementation based on the provided arguments
        if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        } else if (typeof x === 'string' && typeof y === 'string') {
            return x + y;
        } else {
            throw new Error('Invalid argument types for add method.');
        }
    }
}

const calculator = new Calculator();

// Using the overloaded add method
const result1 = calculator.add(5, 10);
console.log(result1); // Output: 15

const result2 = calculator.add("Hello, ", "world!");
console.log(result2); // Output: Hello, world!

// This will cause a compilation error, as there is no matching signature for add with boolean arguments
// Uncommenting the following line will result in a TypeScript error
// const result3 = calculator.add(true, false);