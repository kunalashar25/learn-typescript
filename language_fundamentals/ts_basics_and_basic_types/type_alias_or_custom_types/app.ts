// It can be difficult to always work with union types
// So we might create a new type that can store this union type
// We can use another TS feature to do this task which is known as Aliases

// create an Alias using type keyword
// type is only available in TS

// syntax: type $name = values
type MultiTypes = number | string;
type ConversionTypes = 'as-text' | 'as-number';

function combine(
	n1: MultiTypes, // we can use alias instead of writing types again and again
	n2: MultiTypes,
	resultConversion: ConversionTypes // we only allow these 2 string as input and combine them with union types
) {
	let result;

	// if we are using multiple types then we also need to do runtime checking
	if (typeof n1 === 'number' && typeof n2 === 'number') result = n1 + n2;
	else result = `${n1}${n2}`;

	return result;
}

// we can only assign as-text or as-number values to 3rd argument
console.log(combine(5, 1.5, 'as-number'));
console.log(combine('Hello', 'TS', 'as-text'));
console.log(combine('15', 15, 'as-number'));

// If we provide invalid input then we'll get compilation error
// console.log(combine('15', 15, 'as-num'));
// Argument of type '"as-num"' is not assignable to parameter of type 'ConversionTypes'.ts(2345)

// we can also assign alias to Object Type
type User = { name: string; age: number };
const u1: User = { name: 'Kunal', age: 29 };
console.log(u1); // {name: "Kunal", age: 29}

// if we add extra attributes then we'll get compile time error

/* 
const u2: User = { name: 'Kunal', age: 29, gender: 'Male' };

Type '{ name: string; age: number; gender: string; }' is not assignable to type 'User'.
   Object literal may only specify known properties, and 'gender' does not exist in type 'User'.*/

// can also pass entire alias as method input
function greet(user: User) {
	console.log(`Welcome ${user.name}`); // Welcome Kunal
}

greet(u1);
