// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...in Loop (iterates over the properties of an object)
// 5. For...of Loop (iterates over the values of an array string)


const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (const fruit of fruits) {
    console.log(fruit);
}

const number = [1, 2, 3, 4, 5];

for (let i = 0; i< number.length; i++) {
    console.log(number[i]);
}


const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

for (const value of Object.values(person)) {
    console.log(value);
}

for (const key of Object.keys(person)) {
  console.log(key);
}

let i = 0;

while (number.length > i) { 
    console.log(number[i]);
    i++;
}