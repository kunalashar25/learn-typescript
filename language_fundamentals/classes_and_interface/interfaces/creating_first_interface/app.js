// Used to describe structure of an object
// Only exist in TS
// Can use it as a custom type
var user1;
user1 = {
    name: 'Kunal',
    age: 29,
    greet: function (phrase) {
        console.log(phrase + ": " + this.name);
    }
};
user1.greet('Welcome..');
