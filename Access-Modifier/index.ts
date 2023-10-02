`
Access Modifier 👉
	Defined Data type of access method or variable in entire application is called Access Modifier 4 type of modifier is available 

Public : Access Is In All Classes 
protected : Accessible within the class in which it is defined and in its subclass(es) (including subclasses declared outside the class)
Private : Access In Same Class Only
Default : Access In Same Package Only ( that is not supported in typescript only in java)
`;

class Animal {
    // Public members are accessible from outside the class
    public name: string;

    // Private members are only accessible within the class
    private age: number;

    // Protected members are accessible within the class and its subclasses
    protected sound: string;

    // Constructor to initialize the object
    constructor(name: string, age: number, sound: string) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }

    // Public method accessible from outside the class
    public makeSound(): void {
        console.log(`${this.name} says ${this.sound}`);
    }

    // Private method only accessible within the class
    private increaseAge(): void {
        this.age++;
        console.log(`${this.name} is now ${this.age} years old.`);
    }

    // Protected method accessible within the class and its subclasses
    protected sleep(): void {
        console.log(`${this.name} is sleeping.`);
    }

    // Method that uses private and protected members
    public performDailyTasks(): void {
        this.makeSound();
        this.increaseAge(); // Private method is called within the class
        this.sleep();      // Protected method is called within the class
    }
}

// Create an instance of the Animal class
const lion = new Animal('Leo', 5, 'Roar');

// Access public members
console.log(lion.name);    // Output: Leo
lion.makeSound();           // Output: Leo says Roar

// Access to private and protected members outside the class is not allowed
// lion.age;                // Error: Property 'age' is private and only accessible within class 'Animal'.
// lion.increaseAge();      // Error: Property 'increaseAge' is private and only accessible within class 'Animal'.
// lion.sleep();            // Error: Property 'sleep' is protected and only accessible within class 'Animal' and its subclasses.

// Accessing public methods that use private and protected members
lion.performDailyTasks();    // Output: Leo says Roar
                            //        Leo is now 6 years old.
                            //        Leo is sleeping.
