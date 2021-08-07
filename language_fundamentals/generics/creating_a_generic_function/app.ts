// we can build generic classes and functions

// function to merge 2 objects
function merge(objA: object, objB: object) {
	return Object.assign(objA, objB);
}

const merged = merge({ name: 'Kunal' }, { age: 29 });
console.log(merged); // {name: "Kunal", age: 29}

// even though objects are merged, We cannot access the properties directly
// console.log(merged.name); Property 'name' does not exist on type 'object'.

// generics can help us to solve this issue
// we say first parameter is of type T
// second parameter is of type U
// and we return intersection of those types

// function mergeWithGen<T, U>(objA: T, objB: U): T & U
function mergeWithGen<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedG = mergeWithGen({ name: 'Kunal' }, { gender: 'Male' });
console.log(mergedG.name); // now TS can understand that we are returing intersection of the objects
