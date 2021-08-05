// Allows us to combine other types
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

const e1: ElevatedEmployee = {
	name: 'kunal',
	priviliges: ['basic'],
	startDate: new Date(),
};

// same could have been achieved using inteface concept.

type Combinable = string | number;
type Logical = number | boolean;

// type Intersection = number
type Intersection = Combinable & Logical;
