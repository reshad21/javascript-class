const paymentSuccessfully = true;
const mark = 80;

function enroll(callback) {
    console.log("course enrolment is in progress");
    setTimeout(function () {
        if (paymentSuccessfully) {
            callback();
        } else {
            console.log("payment failed");
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course on progress...");
    setTimeout(function () {
        if (mark >= 80) {
            callback();
        }else{
            console.log("you could not pass the exam");
        }
    }, 3000);
}









function getCertificate(){
    console.log("Preparing your certificate");
    setTimeout(() => {
        console.log("Congratulation you got the certificate");
    }, 3000);
}

// enroll(progress);
// progress(getCertificate);
// getCertificate();

// enroll(function(){
//     progress(getCertificate);
// })

enroll(function(){
    progress(function(){
        a(function(){
            b(function(){
                c(getCertificate)
            })
        })
    });
})