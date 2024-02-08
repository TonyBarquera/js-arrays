const pets = ['cat', 'dog', 'bat'];

// The method includes is immutable
// This method return a boolean, true or false if one item of the array
// matches with a specific value

// array.includes(value)

if(pets.includes('dog')) {
  console.log("In the array pets includes dog");
} else {
  console.log("In the array pets doesn't includes dog");
}