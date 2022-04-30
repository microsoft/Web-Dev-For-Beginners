const tootalScore = document.getElementById('score');
const mainRoad = document.getElementById('main');
const message = document.getElementById('message');

console.log(mainRoad);
message.addEventListener('click', start);

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player = {
    speed: 5,
    score: 0
};

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
    console.log(e.key);
    console.log(keys);
}

function keyUp(e) {
    e.preventDefault();
    keys[e.key] = false;
    console.log(e.key);
}

function isCollide(line,eCar){
    lineRect = line.getBoundingClientRect();
    enemyrect = eCar.getBoundingClientRect();

    return !((lineRect.bottom < enemyrect.top) || (lineRect.top > enemyrect.bottom) || (lineRect.right < enemyrect.left) || (lineRect.left > enemyrect.right));
}

function moveLines(){
    let roadLine = document.querySelectorAll('.roadLine');
    roadLine.forEach(function(items){
        if(items.y > 800){
            items.y = 0;
        }
        items.y += player.speed;
        items.style.top = items.y + "px";
    })
}

function moveEnemyCar(car){
    let enemyCar = document.querySelectorAll('.enemyCar');
    enemyCar.forEach(function(items){
        if(isCollide(car,items)){
            console.log("BooM");
            // alert("khatam!! nikal ab");
            player.start = false;
            message.classList.remove('hide');
        }

        if(items.y > 800){
            items.y = -400;
            items.x = Math.floor(Math.random() * 350);
            items.style.left = items.x + "px";
        }
        items.y += player.speed;
        items.style.top = items.y + "px";
    })
}

let scoreCounter = 0; // counter for increasing score
let speedCounter = 0; // counting speed and if condition filled then increase speed with given amount

function gamePlay() {
    console.log("game is running");

    let car = document.querySelector('.car');
    let roadPos = mainRoad.getBoundingClientRect();
    // console.log(roadPos);

    if (player.start) {

        moveLines();
        moveEnemyCar(car);

        if (keys.ArrowUp && player.y > 90) {
            player.y -= player.speed
        }
        if (keys.ArrowDown && player.y < (roadPos.height - 70)) {
            player.y += player.speed
        }

        if (keys.ArrowLeft && player.x > 5) {
            player.x -= player.speed
        }
        if (keys.ArrowRight && player.x < (roadPos.width - 50)) {
            player.x += player.speed
        }

        car.style.top = player.y + 'px';
        car.style.left = player.x + 'px';

        // console.log("position " + player.y + " " + player.x);
        window.requestAnimationFrame(gamePlay);
        // console.log(player.score++);
        scoreCounter++;
        if(scoreCounter===5){
            scoreCounter = 0;
            player.score++;
            speedCounter++;
        }
        tootalScore.innerText = "score : " + (player.score);

        if(speedCounter===100){
            speedCounter = 0;
            player.speed += 0.6;
        }

        // if(player.score>100){
        //     mainRoad.style.width = 200 + "px";
        // }
    }
}

function start() {

    // everything restart
    message.classList.add('hide');
    // mainRoad.classList.add('hide'); // for removing class simply write remove
    mainRoad.innerHTML = "";
    player.speed = 5;

    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    // lines in mid of road
    for (let i = 0; i < 8; i++) {
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class', 'roadLine');
        // roadLine.innerText = "hey i am here";
        roadLine.y = (i*100);
        roadLine.style.top = roadLine.y + "px";
        mainRoad.appendChild(roadLine);
    }

    //enemy car 
    for (let i = 0; i < 4; i++) {
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemyCar');
        enemyCar.y = ((i+1)*350) * -1;
        enemyCar.style.top = enemyCar.y + "px";
        enemyCar.x = Math.floor(Math.random() * 350);
        enemyCar.style.left = enemyCar.x + "px";
        mainRoad.appendChild(enemyCar);
    }

    //main car
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    // car.innerText = "hey i'm in"; // for checking new set div using js
    mainRoad.appendChild(car);

    // finding position of car
    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    console.log("position " + player.y + " " + player.x);
}