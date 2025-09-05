const numbers = [87, 8, 5, 91]
// console.log(numbers);  // [87, 8, 5, 91]
// console.log(...numbers); // 87 8 5 91
// 
const maxx = Math.max(112, 5666, 94, 112, 514, 45);
// console.log(maxx);  // 5666

const max = Math.max(numbers);
// console.log(max); // Nan

const first = [1,2,3,4,5];
const second = first
second.push(6);
console.log(first);

const ages = [45, 45, 1]
const prices = [98, 65, 45]
const all = [...ages, 5555, ...prices]
console.log(...all)
// const person = { name: 'Parmisan', age: 25 }
// const employee = { designation: 'dev', ...person }
// console.log(employee)

const total = (a, b, c) => a + b + c;
const result = total(45, 65, 21)
const digits = [78, 55, 66]
total(...digits)