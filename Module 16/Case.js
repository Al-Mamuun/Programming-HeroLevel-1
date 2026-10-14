const subject = 'Chemistry';

const book = 'chemistry';


if (subject.toLocaleUpperCase() === book.toLocaleUpperCase()) {
    console.log("You are good at Chemistry.");
} else {
    console.log("You need to work hard in Chemistry.");
}

const name1 = " Mamun";
const name2 = "mamun ";

if (name1.toLocaleLowerCase().trim() === name2.toLocaleLowerCase().trim()){
    console.log("Eligible")
} else {
    console.log("Not Eligible")
}