function mergeWithGen<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedG = mergeWithGen({ name: 'Kunal' }, 30);
console.log(mergedG); // {name: "Kunal"}

// value 30 is not an object type
// Hence, TS sliently fails it and does not merge them

// Currently, in our function we are not checking for any type
// To avoid this issue, we can just check if the input is of object type or not
// we don't care about the content that it holds, but it should be an type of object

// settting constraints using extends so we do not get incorrect types
// we can set constraints for required generics or for all
function mergeWithConstraints<T extends object, U extends object>(
	objA: T,
	objB: U
) {
	return Object.assign(objA, objB);
}

// const mergeC = mergeWithConstraints({ name: 'Kunal' }, 30); Argument of type 'number' is not assignable to parameter of type 'object'.
const mergeC = mergeWithConstraints({ name: 'kunal' }, { age: 29 });
