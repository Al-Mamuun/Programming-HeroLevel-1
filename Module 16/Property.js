const student = {
    name: "Tanvir",
    age: 22,
    class: "BSc in CSE",
    subject: ["Math", "Science", "English"],

    unique: {
        color: "Black",
        height: "5.8 feet",

        result: {
            cgpa: 3.70,
        }
    }
}


console.log(student.unique.result.cgpa)

const key = Object.keys(student);
console.log(key)

const value = Object.values(student)
console.log(value)

delete student.unique.result;
console.log(student)