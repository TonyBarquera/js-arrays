const orders = [{
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  }, {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  }, {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  }, {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

// Map is an immutable function because this method create a new array
// but exists an exception, when you work with an array of object the 
// new array has the references to every object for that reason if you
// change the original array the other once has the same change.
// Example: 

// const newArrayOrders = orders.map(order => {
//   order.tax = 0.19;
//   return order;
// });
// console.log(newArrayOrders);

// Solution:
// Use the spread operator to copy a object with non references, and
// return a new object with the changes
const solutionOrders = orders.map(order => {
  return {
    ...order,
    tax: 0.19
  };
});

// Check the result of the new array and the original
console.log(solutionOrders);
console.log(orders);