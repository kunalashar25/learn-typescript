"use strict";
// union type is used to be more flexible w.r.t types rather than being rigid
// can take input of multiple types
function combine(n1, n2) {
    // return n1 + n2; Operator '+' cannot be applied to types 'string | number' and 'string | number'.ts(2365)
    var result;
    // if we are using multiple types then we also need to do runtime checking
    if (typeof n1 === 'number' && typeof n2 === 'number')
        result = n1 + n2;
    else
        result = "" + n1 + n2;
    return result;
}
console.log(combine(5, 1.5)); // 6.5
console.log(combine('Hello', 'TS')); // HelloTS
console.log(combine('Hello', 15)); // Hello15
console.log(combine(123, 'TS')); // 123TS
