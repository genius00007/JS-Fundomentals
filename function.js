// const udur = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// function garig(day) {
//     return udur`` (day - 1);
// }
// let hariu = garig(4);
// console.log(hariu);


// bodlogo 2

// const unelgee = [ 'P', 'A', 'B', 'C', 'D', 'F'];

// function huuhed (huwi) {
//     if (huwi === 100) {
//         return unelgee [0]; 
//     } else if (huwi > 90 && huwi < 100) {
//         return unelgee [1];
//     } else if (huwi > 80 && huwi < 90) {
//         return unelgee [2];
//     }else if (huwi > 70 && huwi < 80) {
//         return unelgee [3];
//     }else if (huwi > 60 && huwi < 70) {
//         return unelgee [4];
//     }else if (huwi > 0 && huwi < 60) {
//         return unelgee [5];
//     }
// }
// let hariu = huuhed(79);
// console.log(hariu);

// bodlogo 3

// function myFirstFunction() {
//     console.log('ajilla');
// }
// myFirstFunction()

// switch case 

// number = 2;
// switch (number) {
//     case 1: 
//     console.log("dulguun suga");
//     break;
//     case 2:
//     console.log("sanchir suga");
//     break;
//  } 

// function sayMyName (name, name2) {
//     console.log('hello ' + name, ", Bye " + name2);

// }
// sayMyName('Dashka', 'Bataa');

// function tooniiNiilber(number, number2) {
//    return number + number2;

// }

// let sum = tooniiNiilber(2, 4);
// console.log(sum);

// function calculator(a, uildel, b) {
//     switch (uildel) {
//         case '+':
//             return a '+' b = a + b;
//         case '-':
//             return a '-' b = a - b;
//         case '*':
//             return a '*' b = a * b;
//         case '%':
//             return a '%' b = a % b;
//         case '/':
//             return a '/' b = a / b;
//     }

// }

// let  answer = calculator(2 , '*', 1);

// console.log(answer);
let a = 3548;
let b = a;
for (var c = 0; a !==0; ) {
    let d = a % 10;
    c = c * 10 + d;
    a = parseInt(a / 10);
}
console.log(a);
