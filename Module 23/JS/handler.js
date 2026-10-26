

document.getElementById('add-btn').addEventListener("click", function () {
    const headLine = document.getElementById('hline');
    headLine.innerText = "Hello Mamun Bro";
    headLine.style.backgroundColor = "lightblue";
})


document.getElementById('sub-btn').addEventListener('click', function () {
    const newLine = document.getElementById('t-btn');
    const name = newLine.value;
    
    const line = document.getElementById('line');
    line.innerText = name;
})