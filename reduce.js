// Sum of all values inside this array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let b = a.reduce(function (acc, curr) {
  return (acc = acc + curr);
});

console.log(b);

let c = a.reduce((acc, curr) => acc + curr, 0);
console.log(c);

// find Maximum value in this array

let max = a.reduce((acc, curr) => Math.max(acc, curr), 0);
console.log(max);

// flattening of an array
let nestedArray = [
  [1, 2],
  [3, 4, 5],
];
let flatt = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
let sum = nestedArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
console.log(flatt);

const users = [
  { firstName: "Anish", lastName: "Garg", age: 22 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 22 },
];

const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
acc[curr.age] = ++acc[curr.age]
  } 
  else {
    acc[curr.age] = 1;
  }
  return acc
}, {});

console.log(output)

