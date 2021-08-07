// we can create a decorator factory
// it returns decorator function
// but also allows us to configure it when we assign it as a decorator

function Logger(logString: string) {
	// now we are not executing our decorator function
	// but we are executing a function that will return a new function
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

// now we can customize values that decorator function uses when it executes with out factory function
@Logger('Logging - Vehicle')
class VehicleC {
	speed = 30;

	constructor() {
		console.log(`Vehicle is running at ${this.speed}`);
	}
}

const v1 = new VehicleC();
// Logging - Vehicle
// ƒ VehicleC() {
//         this.speed = 30;
//         console.log("Vehicle is running at " + this.speed);
//     }
// Vehicle is running at 30

console.log(v1); // VehicleC {speed: 30}
