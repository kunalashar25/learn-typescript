"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// Exclamation (!) tells TS that we will always find an element and it'll never be null
// as HTMLInputELement is written for Type casting as all html element will not have value attribute
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    //console.log(add(input1.value, input2.value));
    // Argument of type 'string' is not assignable to parameter of type 'number'.
    console.log(add(+input1.value, +input2.value));
});
// Compile code using command
// tsc $fileName.ts
// After compilation it'll automatically create a new file named ts-only.js
// use this file in the HTML file as Browser does not support typescript.
