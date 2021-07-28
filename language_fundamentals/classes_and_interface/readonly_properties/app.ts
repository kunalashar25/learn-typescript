class Department {
	private employees: string[] = [];

	// fields that should not change after initialization
	constructor(private readonly id: string, public name: string) {}

	describe() {
		console.log(`Department: ${this.name}`);
	}

	addEmployee(emp: string) {
		// this.id = 'D02'; Cannot assign to 'id' because it is a read-only property
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
