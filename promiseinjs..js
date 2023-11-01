const paymentSuccessfully = true;
const mark = 80;


function enroll() {
    console.log("course enrolment is in progress");
    const promise = new Promise(function(resolve, reject){
        setTimeout(function () {
            if (paymentSuccessfully) {
                resolve();
            } else {
                reject("payment failed");
            }
        }, 2000);
    })

    return promise;
    
}

function progress() {
    console.log("Course on progress...");
    const promise = new Promise(function(resolve,reject){
        setTimeout(function () {
            if (mark >= 80) {
                resolve();
            }else{
                reject("you could not pass the exam");
            }
        }, 3000);
    })
    return promise;
    
}


function getCertificate(){
    console.log("Preparing your certificate");
    const promise = new Promise(function(resolve){
        setTimeout(() => {
            resolve("Congratulation you got the certificate");
        }, 3000);
    });
    return promise;
}


enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })


    

