// to pass as many parameters as we want

function addFn(...numbers: number[]) {
	numbers.reduce((result, value) => {
		return result + value;
	}, 0); 
}
