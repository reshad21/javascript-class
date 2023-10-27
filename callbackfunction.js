// callback function
// function display(result) {
//     console.log(result);
// }

function sum(a, b, callback) {
    const sum = a + b;
    if (callback) {
        callback(sum);
    }
    return sum;
}

// sum(5, 10, function (result) {
//     console.log(result);
// });

// sum(5, 10, (result) => console.log(result));


// const result = sum(10, 4);
// console.log(result);

// asynchronous function

// setTimeout(() => {
//     console.log("hello world");
// }, 2000);


// setInterval(() => {
//     console.log("hello world");
// }, 2000)

// const tusk2 = () => {
//     console.log("tusk 2");
// }

console.log("tusk 1");
// tusk2();

setTimeout(() => {
    console.log("tusk 2");
}, 2000);

setTimeout(() => {
    console.log("tusk 4");
}, 1000);

console.log("tusk 3");

