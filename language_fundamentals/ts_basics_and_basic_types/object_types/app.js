var person1 = {
    name: 'Kunal',
    age: 29
};
console.log(person1);
// console.log(person1.nickname); Property 'nickname' does not exist on type '{ name: string; age: number; }'.ts(2339)
// TS identifies when a property does not exist and throws error
// same as above but we are explicitly specifiying types
var person2 = {
    name: 'Kunal',
    age: 29
};
var person3 = {
    name: 'Kunal'
};
/**
  Type '{ name: string; age: number; }' is not assignable to type '{ name: string; }'.
  Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'
 */
