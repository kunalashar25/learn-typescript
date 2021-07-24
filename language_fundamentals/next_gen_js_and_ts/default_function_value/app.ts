// adding default value for n2
const addNumDF = (n1: number, n2: number = 0) => {
	return n1 + n2;
};

const printOutputDF = (output: number | string) => console.log(output);

// passing value for n1 and n2
printOutputDF(addNumDF(5, 6)); // 11

// passing value for only first argument.
printOutputDF(addNumDF(7)); // 7

// default argument should be last in the parameter list
