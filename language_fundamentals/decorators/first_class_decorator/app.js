// Useful for metaprogramming
// Metaprogramming means we'll not use decorator that will directly impact the end user
// But decorator is an instrument for writing code which is easier for other developers to use
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// adding a decorator
// a decorator is just a function that we apply to a class to work it in a certain way
// can use lower case starting char as well
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Max';
        console.log("Creating person object");
    }
    Person = __decorate([
        Logger // This statement will point at the decorator and will not execute it
    ], Person);
    return Person;
}());
var p1 = new Person(); // Creating person object
console.log(p1); // Person {name: "Max"}
