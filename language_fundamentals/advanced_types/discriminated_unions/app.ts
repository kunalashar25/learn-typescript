// this is special type of type guard
// It's a pattern that we can use with union types that makes implementing type guards easier
// It is available when we work with object types
// Will also work with class but using interface for this example

// will add extra proeprty to all the interface that should be part of the union
// so we don't need to write multiple if conditions in moveAnimal function
interface Bird {
	type: 'bird'; // this is discriminated union concept
	flyingSpeed: number;
}

interface Horse {
	type: 'horse'; // this is discriminated union concept
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;
	}

	console.log(`Moving with speed ${speed}`);
}
