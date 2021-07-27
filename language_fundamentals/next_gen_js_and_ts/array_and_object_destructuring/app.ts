const hobbiesNew = ['Sports', 'Trekking', 'Reading', 'Gaming'];

// array destructuring - pull elements outside of array
// it will not change the original array
// elements are pulled out by order/index
const [h1, h2, ...remainingHobbies] = hobbiesNew;

// object destructuring - pull elements outside of array
// elements are pulled using key names
const personKunal = {
	nameP: 'Kunal',
	ageP: 29,
};

const { nameP, ageP } = personKunal;
console.log(nameP, ageP);
