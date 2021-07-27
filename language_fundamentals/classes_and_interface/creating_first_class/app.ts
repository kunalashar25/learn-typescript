class Department {
	name: string;

	// executed when the object is created
	constructor(n: string) {
		this.name = n;
	}
}

// create object
const accounting = new Department('accounting');
console.log(accounting); // Department {name: "accounting"}
