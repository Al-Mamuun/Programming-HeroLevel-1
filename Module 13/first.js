let name = "Mamun";
let age = 25;
let isStudent = true;
let result;
let data = null;

let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

let user = {
  name: "Mamun",
  age: 25,
  isStudent: true,
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
};
console.log(typeof null);

console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1
console.log(2 ** 3); // 8

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 == "10"); // true
console.log(10 === "10"); // false

let marks = 75;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else {
  console.log("Need improvement");
}

let year = 18;

let message =
  year >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(message);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 3)); // 7
