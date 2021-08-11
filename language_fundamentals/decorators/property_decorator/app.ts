// property decorator requires 2 arguments
// it is executed when class definition is registered by JS
function Log(target: any, propertyName: string) {
	console.log(`property decorator`);
	console.log(target, propertyName);
}

class Product {
	@Log // assigning decorator to property
	title: string;
	private _price: number;

	constructor(title: string, price: number) {
		this.title = title;
		this._price = price;
	}

	set price(val: number) {
		if (val > 0) this._price = val;
	}

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}

// Output on page load:
// property decorator
// {getPriceWithTax: ƒ, constructor: ƒ} "title"
