// let people = Array('John', 'Bob', 'Sam', 'Tony', 'Roger');
// //                  0       1      2      3       4  .... 300


// // rendering each element of array
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// // rendering last element of array
// console.log(people[people.length - 1]);

// bodlogo1

// / rendering each element of array
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// // rendering last element of array
// console.log(people[people.length - 1]);

//  let number = Array('1', '3', '6', '4', '9')
// // //                  0   1    2    3    4

// for (let i = 4; i >= 0; i--) {
//    console.log(number[i])
// }

// let number = Array('1','3','6','4','9');

// let a = [1, 2, 3, 4, 5, 6]
// //        0 1 2 3 4 5 


// for (let i = 0; i < a.length; i++) {
//     if(i % 2 !== 0){
//         console.log(a[i]);
//     }
// }

// for (let i = 0; i < a.length; i++) {
//     if(i % 2 === 0){
//         console.log(a[i]);
//     }
// }

// let a = 2, n = 3, c = 1;

// for (let i = 0; i < n; i++) {
//     c = c * a
// }

// console.log(c);


// let num=Array( i = 1, sum = 0, a = 3, b = 1,)  
// for (i = 1; i <= a; i++) {  
//        b = b * i;     sum = sum * b;  
//     } console.log(b);

// bodlogo 6
// const birthYear = [1994, 1997, 2003, 1993, 2001];
// const i = 2022;

// // for (let i = 0; i < birthYear.length; i++) {
// //    console.log(birthYear[i]);
// // }

// // let year = 
// const newArr = birthYear.map((year) => {
//    // console.log(year);

//    return i - year ;
// })
// console.log(newArr);

// const filteredArr = birthYear.filter((year) => {

//    return year === 1994 ;
// })



// console.log(filteredArr);

// // bodlogo 7
// const a = [1, 2, 3, 4];

// const newArr= a.map((a)=>{
//    return a * 2;
// })
//  console.log(newArr);

// bodlogo 8








// bodlogo9
// // // // // // // const numbers = [1, 2, 5, 6, 9];
// // // // // // // const newArray = numbers.map((number) => {

// // // // // // //     if(number %2 ===0){
// // // // // // //         console.log(number);
// // // // // // //     }
// // // // // // // }) 
// // // // // // // bodlogo 10
// // // // // const numbers = [1, 3, 5, 22, 89, 46, 17, 31, 59];


// // // // // const newArray = numbers.map((number) => {
// // // // //     let count = 0;
// // // // //     for (let i = 2; i < number; i++) {
// // // // //         if (number % i === 0) {
// // // // //             count++;
// // // // //         }
// // // // //     }
// // // // //     console.log(number, count)
// // // // // })

// // // // // bodlogo 11
// // // // const numbers = [1, 3, 5, 22, 89, 46, 17, 31, 59] ;

// // // // let m=6;
// // // // console.log(numbers[m]) ;
// // // // bodlogo 12
// // // let text = 'a b c'

// // // let upper = text.toUpperCase() ;

// // // console.log(upper) ;
// // // bodlogo 13
// // const n = 5;
// // let mult=1;

// // for(let i=1; i<=n; i++) {
// //     mult = mult*i
// // }
// // console.log(mult)
// // bodlogo 14
// const numbers = [1, 2, 3, 5, 5, 6, 7];
// let a = 0;

// for (let i = 0; numbers.length - 1 > i; i++) {
//     // console.log(numbers[i], numbers[i + 1])
//     if (numbers[i] < numbers[i + 1]) {
//     } else {
//         a = 1;
//     }
// }

// if (a === 0) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }
// bodlogo 15
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// //               0  1  2  3  4  5  6

// //               1     3     5     7

// const newArray = numbers.map((number, index) => {

//     if(index%2===0 && number%2===1) {
//         console.log(number, index);

//     }
// })

//bodlogo 16

// let arr = [1, 3, 5, 22, 89, 46,17, 31,59]

// let min = 100000000
// let minIndex = 0
// let max = -100000000
// let maxIndex = 0

// for(let i = 0; i < arr.length; i ++) { 
//    if(min > arr[i]){
//       min = arr[i]
//       minIndex = i 
//    }
//    if(max < arr[i]){
//       max = arr[i]
//       maxIndex = i
//    }
// }
// console.log('max', max, maxIndex, 'min', min, minIndex);

// bodlogo 17
const arr = [11, 3, 35, 22, 89, 46, 17, 31, 59]
let sth = []

while (arr.length !== 0) {
   let max = -1000000
   let index = 0

   for (let i = 0; i < arr.length; i++) {
      if (max <= arr[i]) {
         max = arr[i]
         index = i
      }
   }

   arr.splice(index, 1)
   sth.push(max)
}

console.log(sth);





const newArr = arr.map((arr) => {

})
   