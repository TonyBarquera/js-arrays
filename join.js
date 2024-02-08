// Join and split are immutable methods

// Join concats the items of an array separated by a specific string 
const elements = ["Fire", "Air", "Water"];
const elementsString = elements.join('-');
console.log(elementsString);

// Split separate a string by a specific string divisor and returns
// and array of them
const productsString = "Pizza,Burger,Hot Dog, Pasta";
const products = productsString.split(',');
console.log(products);