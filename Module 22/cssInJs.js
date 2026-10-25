const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = '2px solid red';
    section.style.margin = '10px';
    section.style.padding = '10px';
    section.style.borderRadius = '10px';
}


const newChild = document.createElement('li');
newChild.innerText = 'Mamun';

const playerContainer = document.getElementById("player");
playerContainer.appendChild(newChild);