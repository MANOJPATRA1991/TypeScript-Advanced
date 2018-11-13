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
 * Exploring “this” with .call, .apply and .bind
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
