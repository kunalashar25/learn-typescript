function WithTemplate(template: string, hookId: string) {
	return function (_: Function) {
		const hookEl = document.getElementById(hookId);
		if (hookEl) {
			hookEl.innerHTML = template;
		}
	};
}

@WithTemplate('<h1>My App</h1>', 'app')
class VehicleC {
	speed = 30;

	constructor() {
		console.log(`Vehicle is running at ${this.speed}`);
	}
}

const v1 = new VehicleC();
console.log(v1);
