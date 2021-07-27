class Department {
	name: string;

	// executed when the object is created
	constructor(n: string) {
		this.name = n;
	}

	describe() {
		// console.log(`Department: ${name}`); Will look for name variable inside the function or outside of the class as global variable
		console.log(`Department: ${this.name}`);
	}
}

// create object
const accounting = new Department('accounting');
console.log(accounting); // Department {name: "accounting"}
accounting.describe(); // Department: accounting
