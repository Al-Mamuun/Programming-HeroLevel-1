console.log("Hello Bros This IS Java Script");
console.log(24 + 24);

const person = {
    name: "Mamun",
    id: 158,
    subject: function (subject) {
        console.log("Subject Name is: ", subject);
    }
}

person.subject("Math");

const liElements = document.getElementsByTagName('li');
for (let liname of liElements) {
    console.log(liname.innerText);
}

const allHeadings = document.getElementsByTagName('h1');
for (let name of allHeadings) {
  console.log(name.innerText);
}

const newID = document.getElementById("kopp");
console.log(newID.innerText);

newID.innerText = "This is a new text for the heading";

const newClass = document.getElementsByClassName("foreign");
for (let name of newClass) {
    console.log(name.innerText);
}

const newQuery = document.querySelectorAll(".song p span");
for (let name of newQuery) {
    console.log(name.innerText);
}

const newQuery11 = document.querySelector(".song p span");
console.log(newQuery11.innerText);
