const paymentSuccessfully = true;
const mark = 80;

async function enroll() {
    console.log("course enrolment is in progress");
    const promise = await new Promise(function(resolve, reject){
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


async function progress() {
    console.log("Course on progress...");
    const promise = await new Promise(function(resolve,reject){
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


async function getCertificate(){
    console.log("Preparing your certificate");
    await setTimeout(() => {
        console.log("Congratulation you got the certificate");
    }, 3000);
}

enroll();
progress();
getCertificate();