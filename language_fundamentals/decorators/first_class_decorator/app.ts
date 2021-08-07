// Useful for metaprogramming
// Metaprogramming means we'll not use decorator that will directly impact the end user
// But decorator is an instrument for writing code which is easier for other developers to use

// adding a decorator
// a decorator is just a function that we apply to a class to work it in a certain way

// can use lower case starting char as well
function Logger(constructor: Function) {
	console.log(`Logging...`);
	console.log(constructor);
}

@Logger // This statement will point at the decorator and will not execute it
class Person {
	name = 'Max';

	constructor() {
		console.log(`Creating person object`);
	}
}

const p1 = new Person();
// Logging...
// ƒ Person() {
//         this.name = 'Max';
//         console.log("Creating person object");
//     }
// Creating person object

// Decorators are executed when the class is defined and not when it is instantiated

console.log(p1); // Person {name: "Max"}
