// creating a generic class
class DataStorage<T> {
	// storing data of a specific type
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

// to store only strings
const textStorage = new DataStorage<string>();

// textStorage.addItem(5); Argument of type 'number' is not assignable to parameter of type 'string'.
textStorage.addItem('kunal');
textStorage.addItem('Ravi');
textStorage.removeItem('kunal');
console.log(textStorage.getItems()); // ["Ravi"]

// to store only numbers
const numbers = new DataStorage<number>();
