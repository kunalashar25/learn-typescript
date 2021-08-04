interface Named {
	readonly name: string;
	outputName?: string; // ? after property names denotes it as optional
}

// we can also mark method as optional using same concept

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name: string;
	age?: number; // adding optional property in class

	constructor(name: string) {
		this.name = name;
	}

	greet(phrase: string): void {
		console.log(`${phrase} ${this.name}`);
	}
}

const user1 = new Person('Kunal');
user1.greet('Hey..'); // Hey.. Kunal
