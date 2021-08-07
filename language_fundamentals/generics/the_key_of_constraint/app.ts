// keyof keyword will ensure that key is present in the object
function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return obj[key];
}

// const a = extractAndConvert({}, 'name'); Argument of type 'string' is not assignable to parameter of type 'never'.
// const a = extractAndConvert({ name: 'kunal' }, 'age'); Argument of type '"age"' is not assignable to parameter of type '"name"'
const a = extractAndConvert({ name: 'kunal' }, 'name');
console.log(a); // kunal
