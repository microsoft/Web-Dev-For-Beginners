const reviews = [{
        id: 1,
        name: "Nishu",
        img: "./img/1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo placeat officia repudiandae aliquid reiciendis facilis sint, earum tempore! Laboriosam sequi voluptates modi nihil rerum aut molestiae ex quae odio",
    },
    {
        id: 2,
        name: "Pawan",
        img: "./img/3.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo placeat officia repudiandae aliquid reiciendis facilis sint, earum tempore! Laboriosam sequi voluptates modi nihil rerum aut molestiae ex quae odio",
    },
    {
        id: 3,
        name: "Bro",
        img: "./img/4.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo placeat officia repudiandae aliquid reiciendis facilis sint, earum tempore! Laboriosam sequi voluptates modi nihil rerum aut molestiae ex quae odio",
    },
    {
        id: 4,
        name: "Jyoti",
        img: "./img/2.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quo placeat officia repudiandae aliquid reiciendis facilis sint, earum tempore! Laboriosam sequi voluptates modi nihil rerum aut molestiae ex quae odio ",
    },
];
let nameSeen = document.querySelector("h4");
let para = document.querySelector("p");
let prev = document.getElementById("prev");
let img = document.querySelector("img")

let next = document.getElementById("next");
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];

    nameSeen.textContent = item.name;
    para.textContent = item.text;
    img.src = item.img;

});



let currentItem = 0;

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    nameSeen.textContent = item.name;
    para.textContent = item.text;

}
next.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
prev.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});