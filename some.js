const numbers = [1, 2, 4, 5];

// The method some is immutable
// This method return a boolean, true or false if someone or more 
// items of an array satisfy a condition

if(numbers.some((number) => number === 6)) {
  console.log("In the array exists the number 6");
} else {
  console.log("In the array doesn't exists the number 6");
}