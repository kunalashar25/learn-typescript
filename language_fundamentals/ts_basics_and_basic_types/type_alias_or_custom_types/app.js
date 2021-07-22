// It can be difficult to always work with union types
// So we might create a new type that can store this union type
// We can use another TS feature to do this task which is known as Aliases
function combine(n1, // we can use alias instead of writing types again and again
n2, resultConversion // we only allow these 2 string as input and combine them with union types
) {
    var result;
    // if we are using multiple types then we also need to do runtime checking
    if (typeof n1 === 'number' && typeof n2 === 'number')
        result = n1 + n2;
    else
        result = "" + n1 + n2;
    return result;
}
// we can only assign as-text or as-number values to 3rd argument
console.log(combine(5, 1.5, 'as-number'));
console.log(combine('Hello', 'TS', 'as-text'));
console.log(combine('15', 15, 'as-number'));
var u1 = { name: 'Kunal', age: 29 };
console.log(u1); // {name: "Kunal", age: 29}
// if we add extra attributes then we'll get compile time error
/*
const u2: User = { name: 'Kunal', age: 29, gender: 'Male' };

Type '{ name: string; age: number; gender: string; }' is not assignable to type 'User'.
   Object literal may only specify known properties, and 'gender' does not exist in type 'User'.*/
// can also pass entire alias as method input
function greet(user) {
    console.log("Welcome " + user.name); // Welcome Kunal
}
greet(u1);
