const mainContainer = document.getElementById("main-container");

const newSection = document.createElement('section');

const newHeading = document.createElement('h1');
newHeading.innerText = 'This is a new section';

const newParagraph = document.createElement('p');
newParagraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem laudantium dolorum atque omnis suscipit aspernatur tempore ducimus! Ratione sequi adipisci laboriosam distinctio quod nesciunt libero numquam pariatur iste deleniti!';


const newList = document.createElement('ul');

newList.innerHTML = `
    <li>Mamun</li>
    <li>Sakib</li>
    <li>Moon</li>
`;

newSection.appendChild(newHeading);
newSection.appendChild(newParagraph);
newSection.appendChild(newList);


mainContainer.appendChild(newSection);


const newSection1 = document.createElement("section");

newSection1.innerHTML = `
    <h1>This is a new section 1</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem laudantium dolorum atque omnis suscipit aspernatur tempore ducimus! Ratione sequi adipisci laboriosam distinctio quod nesciunt libero numquam pariatur iste deleniti!</p>
    <ul>
        <li>Messi</li>
        <li>Neymar</li>
    </ul>
`;

mainContainer.appendChild(newSection1);