// ****************
// querySelector
// ****************
//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');


// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');


const newElement = (outer, inner, outerClass, innerClass, outerText, innerText)=>{
    let e1 = document.createElement(outer)
    let e2 = document.createElement(inner)
    e1.className = outerClass;
    e2.className = innerClass;
    e2.innerText = innerText;
    e1.innerText = outerText;
    e1.appendChild(e2);
    return e1;
}

// let el = document.createElement("button");
// let e = document.createElement("li");
// e.className = "todo";
// e.appendChild(el)
console.log(newElement("li","button",'todo','bt','any','X'))


// manipulating class
// const todo = document.querySelector('#todos .todo')
const todos = document.querySelector("#todos")
const todoInput = document.querySelector(".todoinput")
const todoAdd = document.querySelector(".todoadd");
todoAdd.addEventListener("click",()=>{
    let value = todoInput.value;
    // let node = document.createElement("li");
    // let textnode = document.createTextNode()
    let newCreatedElement = newElement("li","button",'todo','bt',value,'X')
    todos.appendChild(newCreatedElement)
    // todos.innerHTML+= `<li class="todo">${value} <button>X</button> </li>`;
})

let buttonTodo = document.querySelectorAll("#todos .todo button")
buttonTodo.forEach((e)=>{
    e.addEventListener("click",()=>{
        let todo = e.parentElement;
        todo.setAttribute("class","done")
    })
})

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';