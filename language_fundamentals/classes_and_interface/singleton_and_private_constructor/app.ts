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
	private static instance: AccountingDepartment;

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounts');
		this.lastReport = reports[0];
	}

	static getInstance() {
		if (AccountingDepartment.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment('A001', ['Singleton']);
		return this.instance;
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

// const ac1 = new AccountingDepartment('AC001', ['Private Const']);
// Constructor of class 'AccountingDepartment' is private and only accessible within the class declaration.ts

const i1 = AccountingDepartment.getInstance();
console.log(i1); // AccountingDepartment {id: "A001", name: "Accounts", employees: Array(0), reports: Array(1), lastReport: "Singleton"}

const i2 = AccountingDepartment.getInstance();
console.log(i2); // AccountingDepartment {id: "A001", name: "Accounts", employees: Array(0), reports: Array(1), lastReport: "Singleton"}
