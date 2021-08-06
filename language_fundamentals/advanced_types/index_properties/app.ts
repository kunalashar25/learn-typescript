// Index types allows us to create objects which are more flexible regarding the properties they hold
// we use this when we don't know how many properties it'll have
interface ErrorContainer {
	// we don't know exact property name or count
	// but we know that it'll be of type string
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: 'Not a valid email',
	username: 'Must start with capital character',
};
