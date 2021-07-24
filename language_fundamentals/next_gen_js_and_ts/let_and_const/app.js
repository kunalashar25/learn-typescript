var username = 'Kunal'; // cannot change
var age = 29; // can be changed
age = 20;
// let vs var
// Main difference is the scope
// with var we have global and function scope i.e.  variables outside functions are available everywhere
function add(n1, n2) {
    var res;
    res = n1 + n2;
    console.log(res);
}
// console.log(res); Cannot find name 'res'.ts(2304)
add(1, 2);
// same behavior is applicable for let as well
// with let, we have a new concept of block scope
// which means, variable is only available inside the {} block
if (age > 20) {
    var isOld = true;
}
// console.log(isOld);
