const numbers = [2, 4, 6, 10, 12, 11];
console.log(numbers);

// The method every is immutable
// This method return a boolean, true or false if all the items of the
// array satisfy a condition

if(numbers.every(number => number % 2 == 0)) {
  console.log("All the numbers are even");
} else {
  console.log("One or more numbers aren't even");
}