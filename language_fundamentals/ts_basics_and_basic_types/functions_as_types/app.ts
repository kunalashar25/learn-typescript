function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log(`Result: ${num}`);
}

printResult(add(1, 3));

// we can return Function as a type
// combineValues must be a type of function and should not hold TS literal values like string, number, etc.
let combineValues: Function;

// combineValues = 5; Type 'number' is not assignable to type 'Function'.ts(2322)
// combineValues = 'Hello'; Type 'string' is not assignable to type 'Function'.ts(2322)

// we are assigning a function to constant
combineValues = printResult;

// but TS cannot check on number of arguments. Hence, it is not throwing any error
console.log(combineValues(1, 5));

// Output:
// Result: 1
// undefined

// Currently, TS is not throwing error as we only defined that it should hold a Function

// We can be more precise using Function Types
// Below statement means that combineValues1 can accept function with 0 param and it should return a number
let combineValues1: () => number;

// to be more specific we can also define type of parameters
// Below statement means that combineValues2 can accept function with 2 param of type number and it should return a number
let combineValues2: (a: number, b: number) => number;

// assigning add function
combineValues2 = add;

console.log(combineValues2(1, 5)); // 6
