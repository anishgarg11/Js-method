const array = [1, 2, 5, 8, 4, "a"];
const double = array.map((arr, index) => (index === 3 ? arr * 2 : arr));
console.log(double);

let fruits = ["apple", "banana", "grapes"];
let upperCase = fruits.map((fruit) => fruit.toUpperCase(fruits));
console.log(upperCase[0]);

let num = [1, 2, 3, 4, 5, 6, 7, 8];
let double1 = num.map((num1) => num1 % 2 === 0);
console.log(double1);

let num2 = [1, 2, 3, 4, 5];
let double2 = num2.map(function (num) {
  return num * num;
});
console.log(double2[0]);

let people = [
  { name: "Anish", age: "23" },
  { name: "Avinash", age: "22" },
  { name: "ashish", age: "28" },
];

let person = people.map((stName) => stName.age);

console.log(person);

let string = [8, 2, 9, 8, 7, 6];
let StrToBinary = string.map((binary) => binary.toString(2));
console.log(StrToBinary[5]);




