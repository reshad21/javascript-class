const work = false;

console.log("tusk 1");

// promise definition
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (work) {
            resolve("tusk 2");
        } else {
            reject("tusk failed");
        }
    }, 2000);
})

// promise call
promise
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })

// setTimeout(() => {
//     if (work) {
//         console.log("tusk 2");
//     } else {
//         console.log("tusk failed");
//     }
// }, 2000);

console.log("tusk 3");