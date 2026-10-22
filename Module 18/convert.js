
// function convertInctoFeet(inch) {
//     return inch / 12;
// }

// const inchValue = 36;
// const feetValue = convertInctoFeet(inchValue);
// console.log(`${inchValue} inches is equal to ${feetValue} feet.`);


function convertInctoFeet(inch) {
    const feetFraktion = inch / 12;
    const feetNumber = parseInt(feetFraktion);
    const remainingFeet = inch % 12;
    const result = `${feetNumber} feet and ${remainingFeet} inches`;
    return result;
}

const inchValue = 75;
const feetValue = convertInctoFeet(inchValue);
console.log(feetValue)


function convertMilestoKm(miles) {
    return miles * 1.60934;
}

const milesValue = 10;
const kmValue = convertMilestoKm(milesValue);
console.log(`${milesValue} miles is equal to ${kmValue.toFixed(2)} kilometers.`);