const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
  { userId: 2, username: "Mike", attributes: ["Lovely"]},
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const solution_a = users.map(user => user.attributes).flat();
const solution_b = users.flatMap(user => user.attributes);

console.log(solution_a);
console.log(solution_b);