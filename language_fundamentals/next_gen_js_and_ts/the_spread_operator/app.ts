const hobbies = ['Sports', 'Gaming'];
const activeHobbies = ['Hiking'];

// Argument of type 'string[]' is not assignable to parameter of type 'string'.ts(2345)
// activeHobbies.push(hobbies);

// to push all individual elements from one array to another
activeHobbies.push(...hobbies);

// spread operator also works with objects
const person = {
	name: 'kunal',
	age: 29,
};

const copiedPerson = { ...person };
