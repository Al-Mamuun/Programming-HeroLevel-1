let a = 5;
let b = 7;

console.log(a, b)

let temp = a; // 5

a = b; // 7 
b = temp; // 5

console.log(a, b);


let x = 12;
let y = 15;

[x, y] = [y, x];

console.log(x, y);