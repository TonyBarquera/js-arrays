const totals = [1, 2, 3, 4, 5];

// The reduce method is immutable, use reduce when you have an array
// and you want to get one result of the array. 

// array.reduce(callback, initial_value)
// callback -> function(acumulator, value) { ...code }
const sum = totals.reduce((acumulador, valor) => acumulador += valor, 0);
console.log(sum);

// let acumulador = 0;
// for(let i = 0 ; i < totals.length ; i++) {
//   acumulador += totals[i];
// }