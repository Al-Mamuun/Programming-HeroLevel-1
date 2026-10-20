let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reversedNumber = number.reverse();

console.log(reversedNumber);

for (let i = 0; i < number.length; i++) {
  let Number = number[i];
  console.log(Number);
}


let reverseNumber = [];
for (let i = 0; i < number.length; i++) {
    let Number = number[i];
    reverseNumber.unshift(Number);
}

console.log(reverseNumber);

for (let i = number.length - 1; i >= 0; i--){
    let Number = number[i];
    reverseNumber.push(Number);
}

console.log(reverseNumber);
