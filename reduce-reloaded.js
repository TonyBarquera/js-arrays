const numbers = [1, 3, 2, 3, 2, 1, 1, 3, 1, 2, 8];

const result = numbers.reduce((obj, value) => {
  if(obj[value]) {
    obj[value]++;
  } else {
    obj[value] = 1;
  }

  return obj;
}, {});

console.log(result);