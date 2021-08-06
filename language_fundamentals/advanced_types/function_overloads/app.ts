// Allows us to define multiple function signatures
// Calling a function with different parameters

function add(a: number, b: number): number;
function add(a: string, b: string): string {
	return a + b;
}
