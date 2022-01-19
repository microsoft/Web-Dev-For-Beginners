    showNotes();


    let addBtn = document.getElementById("addBtn");
    var JSON;
    addBtn.addEventListener("click", function(e) {
        let addText = document.getElementById("addText");
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addText.value);

        localStorage.setItem("notes", JSON.stringify(notesObj));
        addText.value = "";

        showNotes();
    })

    showNotes();

    function showNotes() {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        let html = "";
        notesObj.forEach(function(element, index) {
            html += `   <div class="notecard card my-2" style="width: 18rem;">
    <div class="card-body">
        <p class="card-text">${element}</p>
        <button onclick ="deleteNotes(this.id)" class="btn btn-primary mt-3" id="${index}">Delete Note</button>
     
    </div>
</div>`;

        });
        let notesElm = document.getElementById('notes');
        if (notesObj.length != 0) {
            notesElm.innerHTML = html;
        } else {
            notesElm.innerHTML = `Nothing is here Please add notes`;
        }


    }

    function deleteNotes(index) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));


        showNotes()
    }


    let search = document.getElementById("searchTxt");
    search.addEventListener("input", function() {
        let inputVal = search.value.toLowerCase();
        let noteCard = document.getElementsByClassName("notecard");
        Array.from(noteCard).forEach(function(element) {
            let cardText = element.getElementsByTagName("p")[0].innerText;
            if (cardText.includes(inputVal)) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        })
    })