
// function evenSizeString(str) {
//     if (str.length % 2 === 0) {
//         console.log("Even")
//         return true;
//     }
//     else
//     {
//         console.log("Odd")
//         return false;
//     }
// }

// evenSizeString("Dhaka"); // Odd

// evenSizeString("Shariatpur"); // Even

// function sumOfNumber(number) {
//     let sum = 0;
//     for (let num of number) { 
//         console.log(num);
//         sum += num;
//     }
//     return sum;
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = sumOfNumber(num);

// console.log(`The Sum Of Number is: ${result}`); // The Sum Of Number is: 55



function sumOfNumber(number) {
    let sum = 0;
    for (let num of number) { 
        if (num % 2 === 0) {
            console.log(num);
            sum += num;
        }
    }
    return sum;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = sumOfNumber(num);

console.log(`The Sum Of Even Number is: ${result}`); // The Sum Of Even Number is: 30