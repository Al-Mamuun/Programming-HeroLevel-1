const country = 'Bangladesh';

console.log(country.split(' '))
console.log(country.slice(6, 10))


const name = "My Name Is Abdullah Al - Mamun";

console.log(name.split("-"))


const fruits = 'banana, apple, mango, orange';

console.log(fruits.split(','))

const fruits1 = ['banana', 'apple', 'mango', 'orange'];
console.log(fruits1.join())

const fruits2 = ["BMW", "Toyota", "Honda", "Nissan"];
console.log(fruits2.join(" - "))
console.log(fruits2.join(" || "))


const firstName = "Sakib"
const lastName = "Al Hasan"

// console.log(firstName.concat(" ", lastName))

console.log(firstName + " " + lastName)

console.log(firstName.concat(' ').concat(lastName))

console.log(lastName.includes("H"))

console.log(firstName.concat("|").concat(lastName))