const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
const prod = products.find(product => product.title === 'Pizza');

// array.push is a mutable method because add a item to the original array
// array.splice is mutable method because remove one or more items of the
//  original array

const challenge = products.filter(product => product.title !== 'Pizza');

if(prod) {
  myProducts.push(prod);
  // products.splice(products.findIndex(product => product.title === 'Pizza'), 1);
}

const update = {
  id: '🍔',
  changes: {
    price: 200,
    description: 'Burger description'
  }
};

const challange_b = products.map(product => {
  if(product.id === update.id) {
    product = {
      ...product,
      ...update.changes
    }
  }

  return product;
});

console.log("products", products);
console.log("myProducts", myProducts);
console.log("challenge", challenge);
console.log("challange_b", challange_b);