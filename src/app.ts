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

// ---------------------------------------------------------------------------------------- //

/**
 * MAPPED TYPES
 */

// Transforming one type to another type

// ---------------------------------------------------------------------------------------- //

/**
 * readonly MAPPED TYPES
 */

// interface Person {
//     name: string;
//     age: number;
// }

// // interface ReadOnlyPerson {
// //     readonly name: string;
// //     readonly age: number;
// // }

// const person: Person = {
//     name: 'Todd',
//     age: 27
// };

// type MyReadonly<T> = {
//     readonly [P in keyof T]: T[P]
// };

// // The object person is immutable not its properties
// person.name = 'ABC';

// function freeze<T>(obj: T): MyReadonly<T> {
//     // Return a readonly version of person object
//     return Object.freeze(obj);
// }

// const newPerson = freeze(person);

// // newPerson.age = 100; // newPerson's age is a readonly property

// ---------------------------------------------------------------------------------------- //

/**
 * partial Mapped Types
 */

// interface Person {
//     name: string;
//     age: number;
// }

// // interface PartialPerson {
// //     name?: string;
// //     age?: number;
// // }

// type MyPartial<T> = {
//     [P in keyof T]?: T[P]
// }

// function updatePerson(obj: Person, prop: MyPartial<Person>) {
//     return {...obj, ...prop};
// }

// const person: Person = {
//     name: 'Todd',
//     age: 27
// };

// updatePerson(person, { name: 'ABC' });

// ---------------------------------------------------------------------------------------- //

/**
 * required MAPPED TYPES
 */

// interface Person {
//     name: string;
//     age?: number;
// }

// type MyRequired<T> = {
//     // Remove the question mark which denotes property is optional to make it required
//     [P in keyof T]-?: T[P]
    
//     // required and readonly
//     // +readonly [P in keyof T]-?: T[P]
    
//     // required but not readonly
//     // -readonly [P in keyof T]-?: T[P]
// }

// function printAge(person: MyRequired<Person>) {
//     return `${person.name} is ${person.age}`;
// }

// const person: MyRequired<Person> = {
//     name: 'Manoj',
//     age: 27
// };

// const age = printAge(person);
// console.log(age);

// ---------------------------------------------------------------------------------------- //

/**
 * pick MAPPED TYPES
 */

// interface Person {
//     name: string;
//     age: number;
//     address: {};
// }

// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// };

// const person: MyPick<Person, 'name' | 'age'> = {
//     name: 'Manoj',
//     age: 27
// };

// ---------------------------------------------------------------------------------------- //

/**
 * record MAPPED TYPES
 */

// // let dictionary: { [key: string]: any } = {};

// let dictionary: Record<string, TrackStates> = {};

// // If interface is not available, we could have done something as below:
// // let dictionary: Record<string, typeof item> = {};

// interface TrackStates {
//     current: string;
//     next: string;
// }

// const item: Record<keyof TrackStates, string> = {
//     current: 'js02js9',
//     next: '8nlksjsk'
// };

// // Numbers are coerced to String
// dictionary[0] = item;

// ---------------------------------------------------------------------------------------- //

/**
 * TYPE GUARDS
 */

// It's a way we can get hold of type information after making
// a check inside a conditional statement.

// ---------------------------------------------------------------------------------------- //

/**
 * typeof and TYPE GUARDS
 */

// function foo(bar: string | number) {
//     if (typeof bar === 'string') {
//         // string
//         return bar.toUpperCase();
//     }
//     // number
//     // if (typeof bar === 'number') {
//     //     // number
//     //     return bar.toFixed(2);
//     // }
//     return bar.toFixed(2);
// }

// class Song {
//     constructor(public title: string, public duration: string | number) {}

// }

// function getSongDuration(item: Song) {
//     if (typeof item.duration === 'string') {
//         // item.duration is a string
//         return item.duration;
//     }
//     //item.duration is a number
//     const { duration } = item;
//     const minutes = Math.floor(duration / 60000);
//     const seconds = (duration / 1000) % 60;
//     return `${minutes}:${seconds}`;
// }

// const songDurationFromString = getSongDuration(
//     new Song('Wonderful Song', '05:31')
// );

// console.log(songDurationFromString);

// const songDurationFromMS = getSongDuration(
//     new Song('Wonderful Song', 330000)
// );

// console.log(songDurationFromMS);

// ---------------------------------------------------------------------------------------- //

/**
 * instanceof and TYPE GUARDS
 */

// class Foo {
//     bar() {}
// }

// // Will compile in ES5 as follows:
// // function Foo2() {}
// // Foo2.prototype.bar = function() {};

// const bar = new Foo();

// //true
// // bar is an instance of Foo
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);
// console.log(bar instanceof Foo);

// class Song {
//     constructor(public title: string, public duration: number) {}
// }

// class Playlist {
//     constructor(public name: string, public songs: Song[]) {}
// }

// function getItemName(item: Song | Playlist) {
//     if (item instanceof Song) {
//         return item.title // Song
//     }

//     // Playlist
//     return item.name;
// }

// const songName = getItemName(new Song('Wonderful Song', 300000));
// console.log('Song name: ', songName);

// const playlistName = getItemName(new Playlist(
//     'The Best Songs', 
//     [new Song('The Man', 300000)]));

// console.log('Playlist name: ', playlistName);

// ---------------------------------------------------------------------------------------- //

/**
 * USER-DEFINED TYPE GUARDS
 */

// class Song {
//     constructor(public title: string, public duration: number) {}
// }

// class Playlist {
//     constructor(public name: string, public songs: Song[]) {}
// }

// // User defined type guard
// // 'is' syntax can only be used if function returns boolean
// function isSong(item: any): item is Song {
//     return item instanceof Song;
// }

// function getItemName(item: Song | Playlist) {
//     if (isSong(item)) {
//         return item.title // Song
//     }

//     // Playlist
//     return item.name;
// }

// ---------------------------------------------------------------------------------------- //

/**
 * Literal TYPE GUARDS and "in" operator
 */

// // const foo = 'bar'; // Literal type foo: 'bar'
// // const foo: string = 'bar'; // string type

// // Does window object has a property named localStorage
// const exists = 'localStorage' in window;

// class Song {
//     kind: 'song'; // literal type Song.kind: 'song'
//     constructor(public title: string, public duration: number) {}
// }

// class Playlist {
//     kind: 'playlist'; // literal type Playlist.kind: 'playlist'
//     constructor(public name: string, public songs: Song[]) {}
// }

// function isSong(item: any): item is Song {
//     return 'title' in item;
// }

// function getItemName(item: Song | Playlist) {
//     // if (isSong(item)) {
//     if(item.kind === 'song') { // using a literal type to infer the type
//         return item.title // Song
//     }

//     // Playlist
//     return item.name;
// }