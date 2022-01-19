let arr = [
    'black', 'orange', 'green', 'red', 'blue'
];
let button = document.querySelector("button");
let body = document.getElementById("body");

let a = 0;
button.addEventListener("click", changeBackground);

function changeBackground() {
    const indexs = parseInt(Math.random() * arr.length)
    let texts = arr[indexs];
    body.style.background = texts;
    button.innerHTML = texts;
}