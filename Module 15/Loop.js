
// // let n = 10;
// // while (n > 0) {
// //     console.log(n);
// //     n--;
// // }

// // let m = 1;
// // while (m < 11) {
// //   console.log(m);
// //   m++;
// // }


// // for (let i = 10; i > 0; i--){
// //     console.log(i)
// // }

// for (let i = 1; i < 20; i++){
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i < 20; i+=2) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }


// for (let i = 1; i < 20; i++) {
//     if ( i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//     }
// }

let total = 0;

for (let i = 1; i <= 20; i++) 
    {
    if (i % 3 == 0) {
        console.log(i);
        total += i;
        }
}
console.log("Total Sum: ", total);