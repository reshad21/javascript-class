// function display(result) {
//     console.log(result);
// }

// callback function synnex
function calculation(num1, num2, callback) {
    result = num1 + num2;
    callback(result);
}

calculation(10, 20, (result) => {
    console.log(result);
})

// asynchronous behavior
console.log("line 1 code");

setTimeout(()=>{
    console.log("line 2 code");
},2000)

console.log("line 3 code");
