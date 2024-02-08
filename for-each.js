const letters = ['a', 'b', 'c'];

// The method forEach of array is a function with a callback, called 
// for every item in the array. You can operate the callback with every
// item of the array.  

// array.forEach(callback)
// callback -> function(item) { ...code }

letters.forEach(letter => console.log(letter));

// With forEach you can replace the use of the common for loop
// to iterate an array
for(let i = 0 ; i < letters.length ; i++) {
  console.log(letters[i]);
} 