const person1 = {
	name: 'Kunal',
	age: 29,
};
console.log(person1);

// console.log(person1.nickname); Property 'nickname' does not exist on type '{ name: string; age: number; }'.ts(2339)
// TS identifies when a property does not exist and throws error

// same as above but we are explicitly specifiying types
const person2: {
	name: string;
	age: number;
} = {
	name: 'Kunal',
	age: 29,
};

const person3: {
	name: string;
} = {
	name: 'Kunal',
	// age: 29, below error is thrown for this line
};

/**
  Type '{ name: string; age: number; }' is not assignable to type '{ name: string; }'.
  Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'
 */

// Nested Object example with types
const product: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
} = {
	id: 'abc1',
	price: 12.99,
	tags: ['great-offer', 'hot-and-new'],
	details: {
		title: 'Red Carpet',
		description: 'A great carpet - almost brand-new!',
	},
};
