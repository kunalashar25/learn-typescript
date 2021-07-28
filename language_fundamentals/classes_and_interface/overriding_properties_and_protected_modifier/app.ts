class Departments {
	// protected is also available in child class
	protected employees: string[] = [];

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

// can only inherit from one class and not multiple classes
class ITDepartment extends Departments {
	constructor(id: string, public admins: string[]) {
		// super should be first statement in the constructor
		super(id, 'IT');
	}
}

class AccountingDepartment extends Departments {
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounts');
	}

	addReport(text: string) {
		this.reports.push(text);
	}

	printReport() {
		console.log(this.reports);
	}

	// overriding parent class method
	addEmployee(name: string) {
		if (name === 'Max') {
			return;
		}
		this.employees.push(name);
	}
}

// create object
const itDept = new ITDepartment('D01', ['Root', 'Sudo']);
console.log(itDept); // ITDepartment {id: "D01", name: "IT", employees: Array(0), admins: Array(2)}

itDept.addEmployee('Ravi');
itDept.name = 'Updated Name';
console.log(itDept); // ITDepartment {id: "D01", name: "Updated Name", employees: Array(1), admins: Array(2)}

itDept.printEmployeeInfo(); // ["Ravi"]

const acc = new AccountingDepartment('A01', ['R1']);
console.log(acc); // AccountingDepartment {id: "A01", name: "Accounts", employees: Array(0), reports: Array(1)}

acc.printReport(); // ["R1"]
acc.addEmployee('Max');
acc.addEmployee('Random');

acc.printEmployeeInfo(); // ["Random"]
