// Built-In Generics
const names: Array<string> = ['Kunal', 'Ravi'];

// cannot assign invalid types
// const ages: Array<number> = ['Three']; Type 'string' is not assignable to type 'number'.ts(2322)

// Promises are other In-Built Generics
const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`done`);
	}, 2000);
});
