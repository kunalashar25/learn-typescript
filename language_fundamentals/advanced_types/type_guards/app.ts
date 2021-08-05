type Combinable = string | number;
type Logical = number | boolean;

// type Intersection = number
type Intersection = Combinable & Logical;

function add(a: Combinable, b: Combinable) {
	// this line act as type guard using typeof
	if (typeof a === 'string' || typeof b === 'string')
		return a.toString() + b.toString();
	else return a + b;
}

// other types of type guard
type Admin = {
	name: string;
	priviliges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// combining 2 types and creating a new one
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const e1: ElevatedEmployee = {
	name: 'kunal',
	priviliges: ['basic'],
	startDate: new Date(),
};

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(`name: ${emp.name}`);
	// console.log(`Priviliges ${emp.priviliges}`); // Property 'priviliges' does not exist on type 'UnknownEmployee'.

	// adding type guard to check if object contains a property
	if ('priviliges' in emp) {
		console.log(`Priviliges ${emp.priviliges}`);
	}
}

printEmployeeInformation(e1);
