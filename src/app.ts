/**
 * UNDERSTANDING THE THIS KEYWORD
 */

// 'this' is completely dynamic and varies on how we want to invoke a function

// // Function
// function myFunction() {
//     console.log('Function:::', this);
// }

// myFunction();

// // Object literal
// const myObj = {
//     myMethod() {
//         console.log('Object:::', this);
//     }
// };

// myObj.myMethod();

// // Classses
// class MyClass {
//     myMethod() {
//         console.log('Class:::', this);
//     }
// }

// const myInstance = new MyClass();
// myInstance.myMethod(); // this will refer to MyClass

// ---------------------------------------------------------------------------------------- //

/**
 * EXPLORING 'THIS' WITH CALL, APPLY AND BIND
 */

// // Object literal
// const myObj = {
//     myMethod() {
//         console.log('Object:::', this);
//     }
// };

// // myObj.myMethod();

// // Function
// function myFunction(...text: string[]) {
//     console.log('Function:::', this, text);
// }

// // const bindFunction = myFunction.bind(myObj, 'ABC', 'DEF');
// const bindFunction = myFunction.bind(myObj); // binds the function to a new context and returns a brand new function with a different context
// bindFunction('ABC', 'DEF');
// bindFunction('123', '456');
// bindFunction('ABC', 'DEF');

// // Difference between call and apply is the way the arguments are passed
// myFunction.call(myObj, 'ABC', 'DEF'); // Changing the this keyword or the context
// myFunction.apply(myObj, ['ABC', 'DEF']);

// ---------------------------------------------------------------------------------------- //

/**
 * ARROW FUNCTIONS AND LEXICAL SCOPES
 */

// class MyClass {
//     myMethod() {
//         const foo = 123;
//         const that = this;
//         console.log('1', this);
//         setTimeout(function() {
//             console.log('2', this);
//             console.log('3', that);
//         }, 0);
//         setTimeout(() => console.log('4', this), 0);
//     }
// }

// const myInstance = new MyClass();
// myInstance.myMethod();

// ---------------------------------------------------------------------------------------- //

/**
 * TYPING 'THIS' AND NOIMPLICIT THIS
 */

// const elem = document.querySelector('.click');

// function handleClick(this: HTMLAnchorElement, event: Event) { // Inferring this value in TypeScript, event is the first argument not this
//     event.preventDefault(); // stops the default action of an element from happening.
//     console.log(this.className);
// }

// elem.addEventListener('click', handleClick, false);

// ---------------------------------------------------------------------------------------- //

/**
 * typeof TYPE QUERIES
 */

// const person = {
//     name: 'Manoj',
//     age: 27
// };

// type Person = typeof person;

// const anotherPerson: Person = {
//     name: 'Mike',
//     age: 30
// };

// // JavaScript
// // typeof person // 'object'

// ---------------------------------------------------------------------------------------- //

/**
 * keyof INDEX TYPE QUERIES
 */

// const person = {
//     name: 'Manoj',
//     age: 27
// };

// type Person = typeof person;
// type PersonKeys = keyof Person; // type will be "name" | "age"
// type PersonTypes = Person[PersonKeys]; // type will be string | number

// const anotherPerson: Person = {
//     name: 'Mike',
//     age: 30
// };

// ---------------------------------------------------------------------------------------- //

/**
 * keyof, GENERICS and LOOKUP TYPES
 */

// const person = {
//     name: 'Manoj',
//     age: 27
// };

// type Person = typeof person;
// type PersonKeys = keyof Person; // type will be "name" | "age"
// type PersonTypes = Person[PersonKeys]; // type will be string | number

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// const personName = getProperty(person, 'name');

// const anotherPerson: Person = {
//     name: 'Mike',
//     age: 30
// };
