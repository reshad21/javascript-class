// function display() {
//     console.log("hello world");
// }

// display()

// arrow function
// const sum = (a, b) => a + b;
// const myResult = sum(3, 2);
// console.log(myResult);

const poorCountry = ["Bangladesh", "Sirilanka", "maldip"];

// const richCountry = ["America","Canada","China",...poorCountry];
const richCountry = ["America", "Canada", "China"];

// richCountry.push(poorCountry[0]);
// richCountry.push(poorCountry[1]);
// richCountry.push(poorCountry[2]);

richCountry.push(poorCountry)

// console.log(richCountry);


// ['America','Canada','China',[ 'Bangladesh', 'Sirilanka', 'maldip' ]]


// const sum = (...rest) => {
//     let sum = 0;
//     // for (let i = 0; i < rest.length; i++) {
//     //     sum = sum + rest[i];
//     //     console.log(sum);
//     // }
//     rest.map((item) => sum = sum + item);
//     console.log(sum);
// }
// sum(1, 2, 3, 4, 5, 15)
// const rest = [1, 2, 3, 4, 5]

const fruits = ["apple", "banana", "mango", "painapple"];
const favoriteFruit = fruits[2];

// array destructuring
const [testy, common, favorite, costly] = ["apple", "banana", "mango", "painapple"];
console.log(testy, common, favorite, costly);

// object destructuring
const { name, phone, address } = { name: "zihad", phone: 1887669, address: "Barishal" };
console.log(name, phone, address);








