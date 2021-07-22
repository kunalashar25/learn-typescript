function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
// passing callback as function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// adding annonymous callback function
addAndHandle(10, 20, function (result) {
    console.log("Anonymous Callback Function result: " + result);
});
// Output: Anonymous Callback Function result: 30
addAndHandle(15, 20, printResult); // Result: 35
// if we do not provide exact match then we get below error
/*
addAndHandle(10, 20, (result, extraParam) => {
    console.log(`Anonymous Callback Function result: ${result}`);
});

Argument of type '(result: any, extraParam: any) => void' is not assignable to parameter of type '(num: number) => void'.*/
