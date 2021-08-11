// property decorator requires 2 arguments
// it is executed when class definition is registered by JS
function Log(target: any, propertyName: string) {
	console.log(`property decorator`);
	console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Accessor Decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

// method decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Method Decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string, position: number) {
	console.log('Paramter Decorator');
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Log // assigning decorator to property
	title: string;
	private _price: number;

	constructor(title: string, price: number) {
		this.title = title;
		this._price = price;
	}

	@Log2
	set price(val: number) {
		if (val > 0) this._price = val;
	}

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}

// Output on page load:
// property decorator
// {getPriceWithTax: ƒ, constructor: ƒ} "title"

// Accessor Decorator
// {getPriceWithTax: ƒ, constructor: ƒ}
// price
// undefined

// Paramter Decorator
// {getPriceWithTax: ƒ, constructor: ƒ}
// getPriceWithTax
// 0

// Method Decorator
// {getPriceWithTax: ƒ, constructor: ƒ}
// getPriceWithTax
// undefined
