// a = parseFloat(" 100 ") 
// console.log('parseFloat(" 100 ") = ' + a); 

// switch ("*") {
//     case "+":
//         const num1 = 4;
//         const num2 = 5;
//         console.log(num1 + num2);
//         break;
//     case "-":
//         const num3 = 4;
//         const num4 = 5;
//         console.log(num4 - num3);
//         break;
//     case "*":
//         const num5 = 4;
//         const num6 = 5;
//         console.log(num5 * num6);
//         break;
//     case "/":
//         const num7 = 40;
//         const num8 = 5;
//         console.log(num7 / num8);
//         break;

//     default:
//         console.log(`variable value is: ${x}`);
//         break;
// }

// function calculation (operation,num1,num2){
//     switch (operation) {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1 * num2;
//             break;
//         case "/":
//             return num1 / num2;
//             break;
    
//         default:
//             break;
//     }
// }

// const result = calculation("*",10,20);
// console.log(result);

// value = 42.89;
// console.log(typeof value);
// var floatNumber = parseFloat(value);

// console.log(floatNumber);

// var number = 42;
// var floatNumber = Number(number);


// Using assignment
var number = 42;
var floatNumber = parseFloat(number);

// Using casting
// var number = 42;
// var floatNumber = Number(number); // or +number


console.log(parseFloat({
    toString() {
      return "3.14";
    },
  }));


