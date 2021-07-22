"use strict";
// Refer /concept_images/ts_basics_and_basic_types/core_types.png
function add(n1, n2, print, phrase) {
    if (print)
        console.log(phrase + " " + (n1 + n2));
    else
        return n1 + n2;
}
add(1, -1.56, true, 'Result is:'); // Result is: -0.56
var result = add(3, 7.8, false, 'Result');
console.log(result); // 10.8
