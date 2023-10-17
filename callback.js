function display() {
    console.log("reshad");
}

function calculation(num1, num2, callback) {
    // display("reshad");
    callback();
    sum = num1 + num2;
    return sum;
}

const result = calculation(10, 20);
console.log(result);