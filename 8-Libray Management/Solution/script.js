displayBooks(); //As the browser open it show all the stored books

let libraryForm = document.getElementById('libraryForm');

// Adding Books
libraryForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let science = document.getElementById('science');
    let others = document.getElementById('other');

    let type;


    if (fiction.checked) {
        type = fiction.value;
        programming.unchecked;
        science.unchecked;
    }
    else if (programming.checked) {
        type = programming.value;
        science.unchecked;
        fiction.unchecked;
    }
    else if (science.checked) {
        type = science.value;
        fiction.unchecked;
        programming.unchecked;
    }
    else if (others.checked) {
        type = others.value;
        fiction.unchecked;
        programming.unchecked;
        science.unchecked;
    }


    let shelf = localStorage.getItem('shelfOfBooks');
    let objOfBook; //object which stores books

    if (shelf == null) {
        objOfBook = [];
    }
    else {                                //We might have multiple books 
        objOfBook = JSON.parse(shelf);   //By using JSON we convert it into Object
    }

    if (name == "") {
        errorMessage();
    }
    else {
        let myObj = {
            book: name,
            bookauthor: author,
            bookType: type
        }
        objOfBook.push(myObj);
        addMessage();
    }

    localStorage.setItem('shelfOfBooks', JSON.stringify(objOfBook));

    name = "";
    author = "";
    type.value = "";

    UpdateBook();
    displayBooks();
})


//Function to show elements(books) from LocalStorage
function displayBooks() {
    let books = localStorage.getItem('shelfOfBooks');
    let clearBtn = document.getElementById("clear");
    let objOfBook;

    if (books == null) {
        objOfBook = [];
    }
    else {
        objOfBook = JSON.parse(books);
    }
    let html="";
    let index = 1;

    objOfBook.forEach( (books)=> {  //index is the length of the array

        html += `
    <tr class="rows">
    <th scope="row">${index++}</th>
    <td class="name">${books.book}</td>
    <td class="author">${books.bookauthor}</td>
    <td class="type">${books.bookType}</td>
    </tr>
        `;
    });

    let table = document.getElementById('tableBody');
    let noDisplayMsg = document.getElementById('emptyMsg');

    if (objOfBook.length != 0) {
         table.innerHTML = html;
        clearBtn.style.display = "block";
        noDisplayMsg.innerHTML = "";
    }
    else {
        noDisplayMsg.innerHTML = `Nothing to display! Use "Add book" above to add books`;
    }

    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}


//Show adding message
function addMessage() {
    let message = document.getElementById('message');
    let navbar = document.getElementById('navbar');

    navbar.style.display = "none";

    message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Message:</strong> Your book has been successfully added.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

    setTimeout(() => {
        navbar.style.display = "flex";
        message.innerHTML = ``;
    }, 2000);
}

//Show error message
function errorMessage() {
    let message = document.getElementById('message');
    let navbar = document.getElementById('navbar');

    navbar.style.display = "none";
    message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error:</strong> To add book, add name of book.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

    setTimeout(() => {
        navbar.style.display = "flex";
        message.innerHTML = ``;
    }, 2000);
}

//Show clear message
function clearMessage() {
    let message = document.getElementById('message');
    let navbar = document.getElementById('navbar');

    navbar.style.display = "none";

    message.innerHTML = `<div class="alert alert-info alert-dismissible fade show" role="alert">
    <strong>Message:</strong> Your book shelf is clear! To add more books refresh the browser.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

    setTimeout(() => {
        navbar.style.display = "flex";
        message.innerHTML = ``;
    }, 2000);
}


// Clearning shelf (Deleting all books)
let clearBtn = document.getElementById("clear");

clearBtn.addEventListener('click', ()=> {
    localStorage.removeItem("shelfOfBooks");
    localStorage.removeItem("getBookNumber");

    document.getElementById("books").innerHTML = "No. of Books: " + 0;
    let table = document.getElementById('tableBody');
    table.style.display = "none"
    clearBtn.style.display = "none";

    let noDisplayMsg = document.getElementById('emptyMsg');
    noDisplayMsg.innerHTML = `Nothing to display! Use "Add book" above to add books`;

    clearMessage();  
})

//Searching book by bookname, author and type
let searchNote = document.getElementById('searchText');
searchNote.addEventListener('input', function () {

    let search = searchNote.value.toLowerCase();
      
    let tableRows = document.getElementsByClassName('rows');

    Array.from(tableRows).forEach(function (element) {

        let bookName = element.getElementsByClassName("name")[0].innerText.toLowerCase();
        let authorName = element.getElementsByClassName("author")[0].innerText.toLowerCase();
        let type = element.getElementsByClassName("type")[0].innerText.toLowerCase();

        if (bookName.includes(search)) {
            element.style.display = "table-row";
        }
        else if(authorName.includes(search)){
            element.style.display = "table-row";
        }
        else if(type.includes(search)){
            element.style.display = "table-row";
        }
        else {
            element.style.display = "none";
        }
    })

});


// Update Number of books in Shelf section
function UpdateBook() {
    let bookNumber = localStorage.getItem("getBookNumber");
    bookNumber = parseInt(bookNumber);

    if (bookNumber) {
        localStorage.setItem("getBookNumber",  bookNumber + 1);
        document.getElementById("books").innerHTML = "No. of Books: " + (bookNumber + 1);
    }
    else {
        localStorage.setItem("getBookNumber", 1);
        document.getElementById("books").innerHTML ="No. of Books: 0" + 1;
    }
    
}


//Show Number of books in Shelf section
function showNumberOfBooks() {
    let getBookNumber = localStorage.getItem("getBookNumber");
    getBookNumber = parseInt(getBookNumber);


    if (getBookNumber) {
        document.getElementById("books").innerHTML = "No. of Books: " + getBookNumber;
    }
    else {
        document.getElementById("books").innerHTML = "No. of Books: " + 0;
    }
}

showNumberOfBooks();