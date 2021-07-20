// JS does not contain enum. Only exist in TS
// enum is custom type

//  Default value index stats from 0
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
} // check generated js file. Label with numbers are assigned there

// assign own index to values in enum
enum Hobbies {
	SPORTS = 1,
	COOKING = 2,
	READING = 3,
}

const person1 = {
	name: 'Kunal',
	age: 29,
	hobbies: [Hobbies.SPORTS, Hobbies.READING],
	role: Role.ADMIN,
};
console.log(person1);
