// literal types are based on our core types

function combine(
	n1: number | string,
	n2: number | string,
	resultConversion: 'as-text' | 'as-number' // we only allow these 2 string as input and combine them with union types
) {
	let result;

	// if we are using multiple types then we also need to do runtime checking
	if (typeof n1 === 'number' && typeof n2 === 'number') result = n1 + n2;
	else result = `${n1}${n2}`;

	return result;
}

// we can only assign as-text or as-number values to 3rd argument
console.log(combine(5, 1.5, 'as-number'));
console.log(combine('Hello', 'TS', 'as-text'));
console.log(combine('15', 15, 'as-number'));

// If we provide invalid input then we'll get compilation error
// console.log(combine('15', 15, 'as-num'));
// Argument of type '"as-num"' is not assignable to parameter of type '"as-text" | "as-number"'.ts(2345)
