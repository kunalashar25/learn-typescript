function WithTemplate(template: string, hookId: string) {
	return function (_: Function) {
		const hookEl = document.getElementById(hookId);
		if (hookEl) {
			hookEl.innerHTML = template;
		}
	};
}

function Logger(logString: string) {
	// now we are not executing our decorator function
	// but we are executing a function that will return a new function
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

@WithTemplate('<h1>My App</h1>', 'app')
@Logger('Logging - Vehicle')
class VehicleC {
	speed = 30;

	constructor() {
		console.log(`Vehicle is running at ${this.speed}`);
	}
}

const v1 = new VehicleC();
console.log(v1);

// Decorator Execution order
// They execute in bottom-up approach
// Last assigned decorator will be executed first
