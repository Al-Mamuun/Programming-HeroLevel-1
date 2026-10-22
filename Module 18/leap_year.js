const year = 2028;

// function isLeapYear(year) {
//     if (year % 400 === 0) {
//         return true;
//     }
//     if (year % 100 === 0) {
//         return false;
//     }
//     if (year % 4 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isLeapYear(year))

function isLeapYear(year) {
    if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
  }
}

isLeapYear(year);