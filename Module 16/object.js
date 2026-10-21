// const mamun = {
//     name: "Mamun",
//     age: 25,
//     city: "Dhaka"
// }

// mamun.name = "Mamun Hossain"

// console.log(mamun)


// const person = {
//     name: "John",
//     age: 30,
//     subject: ["Math", "Science", "English"],
//     isFinite: true,

//     "mamun Yepp": "I am a software engineer",
// }

// console.log(person)

// person.name = "Mamun Hossain"
// person['age'] = 25

// const sakib = person["mamun Yepp"]
// person["mamun Yepp"] = 'I am a software engineer and I love coding'
// console.log(sakib)
// console.log(person)


const person1 = [
    { name: "Mamun", age: 25, city: "Dhaka" },
    { name: "Sakib", age: 30, city: "Chittagong" },
    { name: "Rahim", age: 35, city: "Khulna" }
]

let result = person1.filter(u => u.age >= 20).map(m => m.name.toLocaleUpperCase()).sort();
console.log(result)