interface Greetable {
	name: string; // variable can also be readonly in interfaces
	greet(phrase: string): void;
}

// Interface is not same as custom type
// Major Difference: Interface can only be used to describe the stucture of an object
// In Custom Types, we can also store union types and so on.

// We can implement interface in a class
// Use it as a contract

// A class can implement more than 1 interface
class Person implements Greetable {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greet(phrase: string): void {
		console.log(`${phrase} ${this.name}`);
	}
}

const user1 = new Person('Kunal');
user1.greet('Hey..'); // Hey.. Kunal
