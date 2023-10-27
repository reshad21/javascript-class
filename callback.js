// function display(result) {
//     console.log(result);
// }

// callback function syntax
// function calculation(num1, num2, callback) {
//     result = num1 + num2;
//     callback(result);
// }

// calculation(10, 20, (result) => {
//     console.log(result);
// })

// asynchronous behavior
// console.log("line 1 code");

// setTimeout(()=>{
//     console.log("line 2 code");
// },2000)

// console.log("line 3 code");


// Callback Pattern
const paymentSuccessfully = true;
const mark = 79;

function enroll(callback) {
    console.log("course enrollment is in progress...");
    setTimeout(function () {
        if (paymentSuccessfully) {
            callback();
        } else {
            console.log("Payment failed");
        }
    }, 2000)
}

function progress(callback) {
    console.log("Course on progress..");
    setTimeout(function () {
        if (mark >= 80) {
            callback();
        } else {
            console.log("Your could not get enough mark to get the certificate");
        }
    }, 3000)
}

function getCertificate() {
    console.log("Preparing your certificate..");
    setTimeout(function () {
        console.log("Congrats you got the certificate");
    }, 1000)
}

// enroll();
// progress();
// getCertificate();

// enroll(progress);
// progress(getCertificate);

enroll(function () {
    progress(getCertificate);
})

// enroll(() => progress(getCertificate));