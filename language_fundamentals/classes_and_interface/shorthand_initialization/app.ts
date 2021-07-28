class Department {
	// instead of creating multiple properties to class and setting it from constructor
	// we can directly use constructor to define those properties

	private employees: string[] = [];

	// executed when the object is created
	constructor(private id: string, public name: string) {}

	describe() {
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
const accounting = new Department('D01', 'accounting');
console.log(accounting); // Department {id: "D01", name: "accounting", employees: Array(0)}
