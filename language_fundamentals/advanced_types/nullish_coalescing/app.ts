// Helps to deal with nullish data
// data might come from BE or some other source
const userInput = null;

// null, undefined, empty string are considered as falsy values and DEFAULT will be set instead
let storedData = userInput || 'DEFAULT';

// If we want to keep empty string then we cannot use above approach
// We need to use ?? operator, also known as nullish coalescing operator
// it only checks for null and undefined
storedData = userInput ?? 'DEFAULT';
