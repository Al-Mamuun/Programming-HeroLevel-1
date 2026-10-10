// let salary = 25000;
// let age = 24;
// let isBCS = true;

// // if (salary > 20000 && age > 25) {
// //   console.log("You are eligible for the job.");
// // } else {
// //   console.log("You are not eligible for the job.");
// // }

// if ((salary > 20000 || age > 25) && isBCS ==true) {
//   console.log("You are eligible for the job.");
// } else {
//   console.log("You are not eligible for the job.");
// }


let age = 35;
let price = 2000;

if (age < 18) {
    console.log("No Price To Eat Food");
}
else if (age <= 40) {
    // 25% discount
    const discount = price * 25 / 100;
    const finalPrice = price - discount;
    console.log("Final Price: " + finalPrice);
}
else if (age >= 41 && age <= 60) {
    // 10% discount
    const discount = price * 10 / 100;
    const finalPrice = price - discount;
    console.log("Final Price: " + finalPrice);
}
else {
    console.log(price)
}