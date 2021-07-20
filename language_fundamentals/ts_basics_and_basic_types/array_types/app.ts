const person1 = {
	name: 'Kunal',
	age: 29,
	hobbies: ['Sports', 'Cooking'],
};
console.log(person1);

// to print all hobbies
for (const hobby of person1.hobbies) {
	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); map is available on array and not on string
}

let favoriteActivities: string[];
// favoriteActivities = 'Dancing'; Type 'string' is not assignable to type 'string[]'.ts(2322)
favoriteActivities = ['Dancing'];

// mixed types are not allowed as we have explicity specified string
// favoriteActivities = ['Dancing', 1]; Type 'number' is not assignable to type 'string'.ts(2322)

// any is a special type to store mix values
// not recommended to use as we are ignoreing types benefits
let activities: any[];
activities = ['Playing', 10, true];
