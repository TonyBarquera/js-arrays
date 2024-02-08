const products = [{
  name: 'pizza',
  price: 12
}, {
  name: 'burger',
  price: 8
}, {
  name: 'pizza',
  price: 8
}, {
  name: 'pasta',
  price: 15
}];

// The method find and findIndex are immutable
// The method find returns the first item of the array that satisfy
// a condition
// The method findIndex returns the index of the first item of the array
// that satisfy a condition

const pizza = products.find(product => product.name === 'pizza');
const pizzaIndex = products.findIndex(product => product.name === 'pizza');

console.log(pizza);
console.log(pizzaIndex);