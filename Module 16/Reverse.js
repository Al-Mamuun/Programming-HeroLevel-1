const sentence = 'I am Learning Javascript';

let reverse = '';

for (const letter of sentence) {
    reverse = letter + reverse;
}

console.log(reverse);


for (let i = 0; i < sentence.length; i++){
    reverse = sentence[i] + reverse;
}

console.log(reverse);

let Mamun = sentence.split('').reverse().join('');
console.log(Mamun)

for (let i = sentence.length - 1; i >= 0; i--){
    reverse = reverse + sentence[i];
}
console.log(reverse);