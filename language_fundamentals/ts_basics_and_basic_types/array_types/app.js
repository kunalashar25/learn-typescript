"use strict";
var person1 = {
    name: 'Kunal',
    age: 29,
    hobbies: ['Sports', 'Cooking'],
};
console.log(person1);
// to print all hobbies
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); map is available on array and not on string
}
var favoriteActivities;
// favoriteActivities = 'Dancing'; Type 'string' is not assignable to type 'string[]'.ts(2322)
favoriteActivities = ['Dancing'];
// mixed types are not allowed as we have explicity specified string
// favoriteActivities = ['Dancing', 1]; Type 'number' is not assignable to type 'string'.ts(2322)
// any is a special type to store mix values
// not recommended to use as we are ignoreing types benefits
var activities;
activities = ['Playing', 10, true];
