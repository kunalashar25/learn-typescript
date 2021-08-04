interface Named {
	readonly name: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

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
