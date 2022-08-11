

// for (let i = 0; i < 10; i++) {
//     console.log(i + " dugaar hotod irne");

//     for (let j = 0; j < 5; j ++) {
//         console.log(j + "dugaar talbaid irlee");
//         for(let l = 0; l < 3; l ++) {
//             console.log(l + "dugaar toirnno");
//         }

//     }
// }

// bodlogo1 



// let sum = ''
// for (let a = 0; a < 5; a++) {

//     for (let i = 0; i < 5; i++) {

//         sum = sum + '*'

//     }

//     console.log(sum);
//     sum = ''

// }

// bodlogo2


// for(let a = 0; a < 5; a ++) {
//     if(a < 6) {
//         console.log(" * * + * *");
//     } else {
//         console.log("* * * * *");
//     }

// }

// for (i=0; i<5; i++) {
//     console.log("");
//     for (j=0; j<5; j++) {

//         if(j === 2){
//             process.stdout.write("+ ")
//         } else {
//             process.stdout.write("* ")
//         }
//     }
// }

// bodlogo3

// for( let a = 0; a < 5; a ++) {
//     if(a == 2) {
//         console.log("* * + * *");
//     } else {
//         console.log("* * * * * ");
//     }
// }

// for (i = 0; i < 5; i++) {
//     for (j = 0; j < 5; j++) {

//         if (j === 2 && i ===2) {
//             process.stdout.write("+ ")
//         } else {
//             process.stdout.write("* ")
//         }
//     }
//     console.log("");
// }


// bodlogo4

// for(let a = 1; a > 0; a = a - 1) {
//     console.log("*");
//     for (let b = 2; b > 1; b = b - 1) {
//         console.log("*" + "*");
//         for (let c = 3; c > 2; c = c -1) {
//             console.log("*" + "*" + "*");
//             for(let d = 4; d > 3; d = d - 1) {
//                 console.log("*" + "*" + "*" + "*");
//             }
//         }
//     }
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log('')
// }

// bodlogo5

// for(a = 1; a > 0; a --) {
//     console.log("* * * * * ");
//     for(b = 1; b > 0; b--) {
//         console.log("* * * * ");
//         for(c = 1; c >0; c--) {
//             console.log("* * *");
//             for(d = 1; d > 0; d --) {
//                 console.log("* *");
//                 for(e = 1; e > 0; e--) {
//                     console.log("*");
//                 }
//             }
//         }
//     }
// }




// for (let i = 0; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         process.stdout.write('*')
//     }
//     console.log('');
// }

// bodlogo6

// for(a = 1; a > 0; a --) {
//         console.log("     *");
//         for(b = 1; b > 0; b--) {
//             console.log("    * *");
//             for(c = 1; c >0; c--) {
//                 console.log("   * * *");
//                 for(d = 1; d > 0; d --) {
//                     console.log("  * * * *");
//                     for(e = 1; e > 0; e--) {
//                         console.log(" * * * * *");
//                     }
//                 }
//             }
//         }
//     }

// for (let i = 0; i < 6; i++) {
//     for (let j = 6; j > i; j--) {
//         process.stdout.write(' ');
//     }
//     for (j = i; j > 0; j--) {
//         process.stdout.write('* ')
//     }

//     console.log('');
// }


//bodlogo7

// for(let a = 1; a > 0; a = a - 1) {
//     console.log("1");
//     for (let b = 2; b > 1; b = b - 1) {
//         console.log("1" + "2");
//         for (let c = 3; c > 2; c = c -1) {
//             console.log("1" + "2" + "3");
//             for(let d = 4; d > 3; d = d - 1) {
//                 console.log("1" + "2" + "3" + "4");
//                 for(e = 5; e > 4; e --) {
//                     console.log("1" + "2" + "3" + "4" + "5");
//                 }
//             }
//         }
//     }
// }


// for (let i = 0; i < 7; i++) {
//     console.log(" ")
//     for (let j = 1; j < i; j++) {
//         process.stdout.write(j+" ");
//     }
//     console.log(" ")
// }






// bodlogo8

// for(let a = 1; a > 0; a = a - 1) {
//         console.log("1");
//         for (let b = 2; b > 1; b = b - 1) {
//             console.log("2" + "3");
//             for (let c = 3; c > 2; c = c -1) {
//                 console.log("4" + "5" + "6");
//                 for(let d = 4; d > 3; d = d - 1) {
//                     console.log("7" + "8" + "9" + "10");
//                 }
//             }
//         }
//     }

let = j =1;
let sum = 0;

for (let i = 1; i < 5; i++) {
        sum = sum + i
        for (# j ; j <= sum; j++) {

            process.stdout.write( j +" ");
        }
        console.log('')
    }
    