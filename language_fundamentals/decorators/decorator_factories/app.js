// we can create a decorator factory
// it returns decorator function
// but also allows us to configure it when we assign it as a decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    // now we are not executing our decorator function
    // but we are executing a function that will return a new function
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// now we can customize values that decorator function uses when it executes with out factory function
var VehicleC = /** @class */ (function () {
    function VehicleC() {
        this.speed = 30;
        console.log("Vehicle is running at " + this.speed);
    }
    VehicleC = __decorate([
        Logger('Logging - Vehicle')
    ], VehicleC);
    return VehicleC;
}());
var v1 = new VehicleC();
console.log(v1);
