const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, [11, 12, 13]]]
];

// The method flat returns an array with a flat a specific level of 
// sub arrays
console.log(matriz.flat(1));
console.log(matriz.flat(2));