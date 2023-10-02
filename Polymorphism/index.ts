`Polymorphism is considered one of the important features of Object-Oriented Programming. Polymorphism allows us to perform a single action in different ways. In other words, polymorphism allows you to define one interface and have multiple implementations. `;

`Polymorphism is one of the core concepts of object-oriented programming languages where poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times.`;


class firstClass {
    add() {
        console.log("First Method")
    }
}
class secondClass extends firstClass {
    add() {
        console.log(30 + 40);
    }
}
class thirdClass extends secondClass {
    add() {
        console.log("Last Method")
    }
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();