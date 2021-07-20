// Tuple type is something which is not present in vanilla JS
// Tuple type is of fixed length array and of fixed type

const person1 = {
	name: 'Kunal',
	age: 29,
	hobbies: ['Sports', 'Cooking', 'Reading'],
	role: [2, 'author'], // tuple example, TS inference: role: (string | number)[]
};
console.log(person1);

// downside of tuple is we can push more data and switch position of number and string
person1.role.push('admin');
person1.role[1] = 10; // this is an issue as we expect string at index 1

// Explicit assignment to solve above problem
const person2: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string]; // forcing first posiiton to be a number and second to be a string
} = {
	name: 'Kunal',
	age: 29,
	hobbies: ['Sports', 'Cooking', 'Reading'],
	role: [2, 'author'], // tuple example, TS inference: role: (string | number)[]
};

person2.role.push('admin'); // push is allowed on tuple, so we cannot resolve this issue.
// person2.role[1] = 10; Type 'number' is not assignable to type 'string'.ts(2322)

// length enforcement
// person2.role = []; Type '[]' is not assignable to type '[number, string]'.
// person2.role = [1, 'commenter', 'not allowed']; Type '[number, string, string]' is not assignable to type '[number, string]'.
