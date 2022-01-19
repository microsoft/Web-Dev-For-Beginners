let boat = Math.floor(Math.random() * 5);
let input = document.getElementById("input");
let submitGuess = document.getElementById("submit-guess");
let menChoice = document.getElementById("menChoice");


let boatGuess = document.getElementById("boatGuess");
let AlertDiv = document.getElementById("aleartdiv");
submitGuess.addEventListener("click", function() {


    boatGuess.style.display = "block";
    menChoice.style.display = "block";
    menChoice.innerHTML = "You Choses = " + input.value;
    boatGuess.innerHTML = "Boat Choose = " + boat;
    console.log(boat);

    if (boat == input.value) {

        AlertDiv.innerHTML = `  <div class="alert alert-success alert-dismissible fade show" role="alert" id="al-message">
            <strong id="final_message">Congrats You Won !!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    } else {

        AlertDiv.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert" id="al-message">
            <strong id="final_message">Sorry You Lose !!</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    }
    boat = Math.floor(Math.random() * 5)


})