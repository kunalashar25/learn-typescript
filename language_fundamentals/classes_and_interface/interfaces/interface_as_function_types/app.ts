interface AddFn {
	// define a function by just adding parameters and return type
	// this is anonymous function
	(a: number, b: number): number;
}

let add: AddFn;

/*

add = (n1: string, n2: number) => {
	return n1 + n2;
};

Type '(n1: string, n2: number) => string' is not assignable to type 'AddFn'.
  Types of parameters 'n1' and 'a' are incompatible.
    Type 'number' is not assignable to type 'string'.
*/
add = (n1: number, n2: number) => {
	return n1 + n2;
};
