function mergeWithGen(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedG = mergeWithGen({ name: 'Kunal' }, 30);
console.log(mergedG);
