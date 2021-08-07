interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	completeUntil: Date
): CourseGoal {
	// let courseGoal:CourseGoal = {}; Type '{}' is missing the following properties from type 'CourseGoal': title, description, completeUntil
	// we cannot assign empty object as it'll directly throw error

	// if our requirement is to validate all input data and then set it to interface then we need to use Partial Types

	// Partial Type will mark all interface proeprties as optional and while returning the object, we can return all the keys

	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = completeUntil;

	// cannot return is directly as it is still type of partial courseGoal
	// return courseGoal; Type 'Partial<CourseGoal>' is not assignable to type 'CourseGoal'

	// so we need to convert it to CourseGoal type using type casting
	return courseGoal as CourseGoal;
}
