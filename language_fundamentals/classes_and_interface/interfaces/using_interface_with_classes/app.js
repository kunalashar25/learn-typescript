// Interface is not same as custom type
// Major Difference: Interface can only be used to describe the stucture of an object
// In Custom Types, we can also store union types and so on.
// We can implement interface in a class
// Use it as a contract
// A class can implement more than 1 interface
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1 = new Person('Kunal');
user1.greet('Hey..');
