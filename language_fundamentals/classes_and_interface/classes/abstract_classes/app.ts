// cannot create object of Department now
abstract class Departments {
	protected employees: string[] = [];

	// fields that should not change after initialization
	constructor(protected readonly id: string, public name: string) {}

	// forcing child class to provide the implementation
	abstract describe(this: Departments): void;

	addEmployee(emp: string) {
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

	describe(): void {
		console.log(`In IT Department with ID: ${this.id}`);
	}
}

class AccountingDepartment extends Departments {
	private lastReport: string;

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounts');
		this.lastReport = reports[0];
	}

	describe(): void {
		console.log(`In Accounting Department with ID: ${this.id}`);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReport() {
		console.log(this.reports);
	}
}
