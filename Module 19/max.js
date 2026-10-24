let num1 = 96;

let num2 = 45;

if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else {
    console.log(num2 + " is greater than " + num1);
}

function findMax(a, b) { 
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

const num11 = findMax(20, 30);
const num22 = findMax(50, 40);
const num33 = findMax(num11, num22);
console.log("The maximum number is: " + num33);


let a = 10;
let b = 20;
let c = 5;


if (a > b && a > c) {
    console.log(a + " is the largest number.");
}else if ( b > a && b > c) {
    console.log(b + " is the largest number.");
}else {
    console.log(c + " is the largest number.");
}

let result = Math.max(10, 20, 5, 30, 15);
console.log("The maximum number is: " + result);