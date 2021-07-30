// Used to describe structure of an object
// Only exist in TS
// Can use it as a custom type

interface Person {
	name: string;
	age: number;
	// gender: string = 'Male'; An interface property cannot have an initializer.ts(1246)

	// can also add method signature
	greet(phrase: string): void;
}

let user1: Person;
user1 = {
	name: 'Kunal',
	age: 29,

	greet(phrase: string) {
		console.log(`${phrase}: ${this.name}`);
	},
};

user1.greet('Welcome..'); // Welcome..: Kunal
