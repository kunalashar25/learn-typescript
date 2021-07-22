"use strict";
// It is good to be aware of this type
var userInput;
var userName;
// unknown is different from any
userInput = 5;
userInput = 'Hello';
// if we want to assign this value to some other constant then it'll throw an error
// userName = userInput; Type 'unknown' is not assignable to type 'string'.ts(2322)
// But same example is possible with any
var userKey;
userKey = 5;
userKey = 'Hello';
userName = userKey; // there is no error when we use any type
// with any, TS gives up all type checking and we are free to do whatever we want.
// with unknown, we are restricted on how we can use it.
// For unknown, We first need to do type checking by ourselves before assigning it
// Now, TS will not throw any error
if (typeof userInput === 'string')
    userName = userInput;
// unknown is better than any as it allows us to do some type checking
