// happy flow
const fetchedUserData = {
	id: 'u01',
	name: 'kunal',
	job: { title: 'ceo', description: 'block chain organization' },
};

console.log(fetchedUserData.job.title);

// when data comes from backend then we don't know for sure that all properties will exist for that user
const fetchedFromBE = {
	id: 'u01',
	name: 'kunal',
	// job: { title: 'ceo', description: 'block chain organization' }, this data is not received from BE
};
// add ? when we are not sure if that property exist
// console.log(fetchedFromBE?.job?.title);
