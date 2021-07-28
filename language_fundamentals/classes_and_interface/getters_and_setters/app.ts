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
	private lastReport: string;

	// use get keyword to keyword a getter and function name can be anything
	get recentReport() {
		if (this.lastReport) return this.lastReport;
		else throw new Error('No Report Found!');
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounts');
		this.lastReport = reports[0];
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
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

const acc = new AccountingDepartment('Acc001', ['Day0', 'Day1']);

// need to access it like a property and not like a method
console.log(acc.recentReport);
