`Structural patterns refer to how to assemble objects and classes into larger structures.`;
`The most common structural patterns are:`;
`Adapter Pattern`;
`Bridge Pattern`;
`Composite Pattern`;
`Decorator Pattern`;
`Facade Pattern`;
`Flyweight Pattern`;
`Proxy Pattern`;

`Adapter Pattern`;
`The Adapter pattern is used to convert the interface of a class into another interface that the client expects to find.`;
`Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.`;

`The Adapter allows two objects with incompatible interfaces to interact with each other.

Let's say, for example, that your application consults an API that returns XML and sends that information to another API to process that information. But the processing API expects JSON. You can't send the information as it's received since both interfaces are incompatible. You need to adapt it first. 😉`;

// Our array of cities
const citiesHabitantsInMillions: any = [
  { city: "London", habitants: 8.9 },
  { city: "Rome", habitants: 2.8 },
  { city: "New york", habitants: 8.8 },
  { city: "Paris", habitants: 2.1 },
];

// The new city we want to add
const BuenosAires: any = {
  city: "Buenos Aires",
  habitants: 3100000,
};

// Our adapter function takes our city and converts the habitants property to the same format all the other cities have
const toMillionsAdapter: any = (city: any) => {
  city.habitants = parseFloat((city.habitants / 1000000).toFixed(1));
};

toMillionsAdapter(BuenosAires);

// We add the new city to the array
citiesHabitantsInMillions.push(BuenosAires);

// And this function returns the largest habitants number
const MostHabitantsInMillions: any = () => {
  return Math.max(...citiesHabitantsInMillions.map((city: any) => city.habitants));
};

console.log(MostHabitantsInMillions()); // 8.9

`Decorator Pattern`;
`The Decorator pattern lets you attach new behaviors to objects by placing them inside wrapper objects that contain the behaviors. If you're somewhat familiar with React and higher order components (HOC) this kind of approach probably rings a bell for you.
Technically, components in React functions, not objects. But if we think about how React Context or Memo we can see that we're passing a component as a child to this HOC, and thanks to that this child component is able to access certain features.`;
`is one of type of encupsulation`;

`Facade Pattern`;
`Facade Pattern
The Facade pattern provides a simplified interface to a library, a framework, or any other complex set of classes.
Well...we can probably come out with lots of examples for this, right? I mean, React itself or any of the gazillion libraries out there used for pretty much anything related to software development. Specially when we think about declarative programming, it's all about providing abstractions that hide away complexity from the eyes of the developer.
A simple example could be JavaScript's map, sort, reduce and filter functions, which all work like good 'ol for loops beneath the hood.`;

`Proxy Pattern`;
`The Proxy pattern provides a surrogate or placeholder object for another object and controls access to this other object.`;
`The Proxy pattern provides a substitute or placeholder for another object. The idea is to control access to the original object, performing some kind of action before or after the request gets to the actual original object.
Middlewares are nothing more than pieces of code we can make execute before, in the middle, or after any request reaches our endpoints.`;


