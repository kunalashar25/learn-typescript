// we can build generic classes and functions
// function to merge 2 objects
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var merged = merge({ name: 'Kunal' }, { age: 29 });
console.log(merged);
