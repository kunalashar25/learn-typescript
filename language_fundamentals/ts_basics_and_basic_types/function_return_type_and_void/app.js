// function has return types
// If we do not add return types that is automatically inferred by TS
// we can see below if we hover on add function name
// function add(n1: number, n2: number): number
function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(1, 3));
// to explicity add return type
function printData() {
    console.log('No return type');
    // if we add a return statement then we will get compilation error
    // return 0; Type 'number' is not assignable to type 'void'.ts(2322)
}
// undefined is a type in TS
// we can assign undefined to a constant
// But we cannot use undefined as a return type
var sum; // this is valid
// function sumOfNum(): undefined {} → This will throw error
// A function whose declared type is neither 'void' nor 'any' must return a value.ts(2355)
// Use void if function does not return anything.
