// const work = false;

// console.log("tusk 1");

// promise definition
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (work) {
//             resolve("tusk 2");
//         } else {
//             reject("tusk failed");
//         }
//     }, 2000);
// })

// promise call
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// setTimeout(() => {
//     if (work) {
//         console.log("tusk 2");
//     } else {
//         console.log("tusk failed");
//     }
// }, 2000);

// console.log("tusk 3");



const paymentSuccessfully = true;
const mark = 79;

function enroll() {
    console.log("course enrollment is in progress...");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccessfully) {
                resolve();
            } else {
                reject("Payment failed");
            }
        }, 2000)
    })

    return promise;
}

function progress() {
    console.log("Course on progress..");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (mark >= 80) {
                resolve();
            } else {
                reject("Your could not get enough mark to get the certificate");
            }
        }, 3000)
    })
    return promise;
}

function getCertificate() {
    console.log("Preparing your certificate..");
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Congrats you got the certificate");
        }, 1000)
    });
    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })


async function course() {
    try {
        await enroll();
        await progress();
        const data = await getCertificate();
        // return data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

course();

