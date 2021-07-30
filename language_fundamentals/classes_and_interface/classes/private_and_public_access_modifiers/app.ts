class Department {
	// default access modifier is public
	name: string;
	private employees: string[] = [];

	// executed when the object is created
	constructor(n: string) {
		this.name = n;
	}

	describe() {
		// console.log(`Department: ${name}`); Will look for name variable inside the function or outside of the class as global variable
		console.log(`Department: ${this.name}`);
	}

	addEmployee(emp: string) {
		this.employees.push(emp);
	}

	printEmployeeInfo() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

// create object
const accounting = new Department('accounting');
console.log(accounting); // Department {name: "accounting"}
accounting.describe(); // Department: accounting
accounting.addEmployee('Kunal');
accounting.addEmployee('Ravi');
accounting.printEmployeeInfo(); // (2) ["Kunal", "Ravi"]
