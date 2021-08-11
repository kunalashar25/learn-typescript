var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// property decorator requires 2 arguments
// it is executed when class definition is registered by JS
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
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
    return Product;
}());
