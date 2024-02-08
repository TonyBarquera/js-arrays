const elements = [1, 1, 2, 3];
const otherElements = [3, 4, 4, 5];

// The method concat is immutable
// This method returns a new array concating an array with another one

const result = elements.concat(otherElements);
console.log(result);

// Other solution
// Using spread operator
const resultSpreadOp = [ ...elements, ...otherElements ];
console.log(resultSpreadOp);