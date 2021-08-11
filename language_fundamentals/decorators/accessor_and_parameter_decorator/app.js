var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// property decorator requires 2 arguments
// it is executed when class definition is registered by JS
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// method decorator
function Log3(target, name, descriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// parameter decorator
function Log4(target, name, position) {
    console.log('Paramter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
var Product = /** @class */ (function () {
    function Product(title, price) {
        this.title = title;
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0)
                this._price = val;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log // assigning decorator to property
    ], Product.prototype, "title");
    __decorate([
        Log2
    ], Product.prototype, "price");
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax");
    return Product;
}());
// Output on page load:
// property decorator
// {getPriceWithTax: ƒ, constructor: ƒ} "title"
// Accessor Decorator
// {getPriceWithTax: ƒ, constructor: ƒ}
// price
// undefined
// Method Decorator
// {getPriceWithTax: ƒ, constructor: ƒ}
// getPriceWithTax
// undefined
