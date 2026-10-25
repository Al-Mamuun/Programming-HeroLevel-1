function redButton() {
    console.log("Clicked");
    document.body.style.backgroundColor = "red";
}

const addButton = document.getElementById('add-btn');

addButton.onclick = function blue() {
    document.body.style.backgroundColor = "blue";
}

const addButton1 = document.getElementById('add-btnn');

addButton1.onclick = purple;


function purple() {
    document.body.style.backgroundColor = "purple";
}

document.getElementById("btn-gold").addEventListener("click", function gold() {
  document.body.style.backgroundColor = "gold";
});

document
  .getElementById("btn-green")
  .addEventListener("click", function green() {
    document.body.style.backgroundColor = "green";
  });

