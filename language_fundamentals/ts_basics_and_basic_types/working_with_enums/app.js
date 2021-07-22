"use strict";
// JS does not contain enum. Only exist in TS
// enum is custom type
//  Default value index stats from 0
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // check generated js file. Label with numbers are assigned there
// assign own index to values in enum
var Hobbies;
(function (Hobbies) {
    Hobbies[Hobbies["SPORTS"] = 1] = "SPORTS";
    Hobbies[Hobbies["COOKING"] = 2] = "COOKING";
    Hobbies[Hobbies["READING"] = 3] = "READING";
})(Hobbies || (Hobbies = {}));
var person1 = {
    name: 'Kunal',
    age: 29,
    hobbies: [Hobbies.SPORTS, Hobbies.READING],
    role: Role.ADMIN,
};
console.log(person1);
