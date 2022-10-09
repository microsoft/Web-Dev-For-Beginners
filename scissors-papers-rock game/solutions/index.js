var countv = 0; countLimit = 5; player = 0; computer = 0;

function func(playerValue) {
    let playerDiv = document.getElementById('player');
    if (playerValue == 0) {
        playerDiv.innerHTML = `<img src="img/scissors.png" height= "180px" width= "180px"> `;
    }
    else if (playerValue == 1) {
        playerDiv.innerHTML = `<img src="img/paper.png" height= "180px" width= "180px"> `;
    }
    else if (playerValue == 2) {
        playerDiv.innerHTML = `<img src="img/rock.png" height= "180px" width= "180px"> `;
    }
    let randomValue = Math.floor((3) * Math.random());
    function func1() {

        let computerDiv = document.getElementById('computer');
        if (randomValue == 0) {
            computerDiv.innerHTML = `<img src="img/scissors.png" height= "180px" width= "180px"> `;
        }
        else if (randomValue == 1) {
            computerDiv.innerHTML = `<img src="img/paper.png" height= "180px" width= "180px"> `;
        }
        else if (randomValue == 2) {
            computerDiv.innerHTML = `<img src="img/rock.png" height= "180px" width= "180px"> `;
        }
    }
    setTimeout(func1, 40);

    if (randomValue != playerValue && countv != countLimit) {
        let aa = document.getElementById('count');
        aa.innerHTML = countv + 1;
        countv += 1;

        if (randomValue == 0) {
            if (playerValue == 2) {
                player += 1;
                document.getElementById('you1').innerHTML = player;
                document.getElementById('display').innerHTML = "You Won.";
            }
            else {
                computer += 1;
                document.getElementById('comp1').innerHTML = computer;
                document.getElementById('display').innerHTML = "Comp Won.";
            }
        }
        if (randomValue == 1) {
            if (playerValue == 0) {
                player += 1;
                document.getElementById('you1').innerHTML = player;
                document.getElementById('display').innerHTML = "You Won.";
                document.getElementById('display').style.color = "green";
            }
            else {
                computer += 1;
                document.getElementById('comp1').innerHTML = computer;
                document.getElementById('display').innerHTML = "Comp Won.";
                document.getElementById('display').style.color = "blue";
            }
        }
        if (randomValue == 2) {
            if (playerValue == 1) {
                player += 1;
                document.getElementById('you1').innerHTML = player;
                document.getElementById('display').innerHTML = "You Won.";
            }
            else {
                computer += 1;
                document.getElementById('comp1').innerHTML = computer;
                document.getElementById('display').innerHTML = "Comp Won.";
            }
        }
    }
    else {
        let display = document.getElementById('display');
        display.innerHTML = "Draw!!";
        display.style.color = 'red';
    }
    if (countv == countLimit) {
        function display() {
            document.getElementById('container').style.display = 'none';
            document.getElementById('selection').style.display = 'none';
            if (player > computer) {
                document.getElementById('head').innerHTML = "You Won The Game!!!";
                document.getElementById('head').style.color = "green";

            }
            else if (computer > player) {
                document.getElementById('head').innerHTML = "You loose The Game!!!";
                document.getElementById('head').style.color = "red";
            }
            else {
                document.getElementById('head').innerHTML = "Its A Draw.";
            }
            let imageContainer = document.getElementById('div');
            imageContainer.innerHTML = " ";
            let newElement = document.createElement('a');
            newElement.id = "newElement";
            newElement.href = "index.html";
            newElement.style.textDecoration = "none";
            newElement.innerHTML = "Play again";
            head.append(newElement)
        }
        setTimeout(display, 20);

    }
}