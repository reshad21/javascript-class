// function calculation(num1,num2){
//     const sum = num1 + num2;
//     // console.log(sum);
//     return sum;
// }

// const result = calculation(30,40); 

// console.log(result);

// function multi(value){
//     const multiple = 2*value;
//     console.log(multiple);
// }

// multi(result);


// const dividied = (value = 20) => {
//     result = value / 2;
//     console.log(result);
// }

// dividied(10);


// const person = {
//     firstName: "rehsad",
//     lastName: "uzzaman reshad",
//     fullName: function() {
//         return (this.firstName + this.lastName)
//     }
// }

// const name = person.fullName();

// console.log(name);


const x = 10; //global variable

function display(){
    const y = 90; //scope variable
    console.log(x);
}

display();

console.log(x);
console.log(y);
