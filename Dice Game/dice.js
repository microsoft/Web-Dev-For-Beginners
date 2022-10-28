const button = document.querySelector(".but");
button.addEventListener('click', (e) => {
    e.preventDefault();
    const randomNumber1 = Math.ceil(Math.random()*6);
    const randomNumber2 = Math.ceil(Math.random()*6);
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
    img1.src = `Images/dice${randomNumber1}.png`;
    img2.src = `Images/dice${randomNumber2}.png`;
    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if(randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else if(randomNumber1==randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Draw!";
    }
})