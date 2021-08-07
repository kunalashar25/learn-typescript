// creating interface to make sure length attribute is always present for the type
// and we don't get any TS erros
interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let description = 'No Value';
	if (element.length > 0) description = `Got ${element.length} elements`;
	return [element, description];
}

// valid examples
console.log(countAndDescribe('Hey'));
console.log(countAndDescribe(['Sports', 'Cooking']));

// invalid example
console.log(countAndDescribe(2));
