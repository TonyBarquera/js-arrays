const animals = ['dog', 'cat', 'lion'];

// The method map is immutable, this method returns a new array
// but with non references to the original array

// This method requires to return the result of every iteration of
// the array, with this method you can create a new array based to 
// the original applying changes

// array.map(callback)
// callback -> function(item => { return ...code })

// Example: Return an array of objects with the information of each
// animal with their age
const animalsData = animals.map(animal => {
  return {
    name: animal,
    age: Math.ceil(Math.random() * 5)
  };
});

console.log(animalsData);

// Solution with common for loop
const dataResult = [];

for(let i = 0 ; i < animals.length ; i++) {
  dataResult.push({
    name: animals[i],
    age: Math.ceil(Math.random() * 5)
  });
}

console.log(dataResult);