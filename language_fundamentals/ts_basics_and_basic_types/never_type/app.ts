// never is another type that a function can return

// this function will never return any value as we are throwing an error
// Hence, return type of this function should be never instead of void
function generateError(message: string, code: number): never {
	// we can throw any object or value
	throw { message: message, errorCode: code };
}

generateError('Uncaught', 500); // {message: "Uncaught", errorCode: 500}
