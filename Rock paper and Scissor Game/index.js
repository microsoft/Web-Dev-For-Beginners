function rpsgame(yourchoice) {
    let humanchoice, botchoice;
    humanchoice = yourchoice.id;
    console.log('Human choice is:', humanchoice);
    botchoice = numtochoices(randrps());

    console.log("Bot choice is :", botchoice);
    let results = decidewinner(humanchoice, botchoice);
    console.log(results);
    let message = finalmessage(results);
    console.log(message);
    rpsfrontend(humanchoice, botchoice, message);

  }

  function randrps() {
    return (Math.floor((Math.random() * 3) + 0));
  }
  function numtochoices(number) {
    return (['rock', 'scissor', 'paper'][number]);
  }
  function decidewinner(yourchoice, computerchoice) {
    let rpsdatabase = {
      'rock': { 'rock': 0.5, 'paper': 0, 'scissor': 1 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
      'scissor': { 'rock': 0, 'paper': 1, 'scissor': 0.5 },

    }
    let yourscore = rpsdatabase[yourchoice][computerchoice];
    let computerscore = rpsdatabase[computerchoice][yourchoice];
    return ([yourscore, computerscore])


  }
  function finalmessage([yourscore, computerscore]) {
    if (yourscore == 0) {
      return ({ "message": 'You lost', "color": "red" })
    }
    else if (yourscore == 0.5) {
      return ({ "message": 'You Tied', "color": "yellow" })
    }
    else {
      return ({ "message": 'You Won', "color": "green" })
    }

  }
  function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {

    let imagedatabases = {

      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissor': document.getElementById('scissor').src
    };

    // console.log(imagedatabases[rock]);
    // removing images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humandiv = document.createElement('div');
    let botdiv = document.createElement('div');
    let messdiv = document.createElement('div');
    humandiv.innerHTML = "<img src= '" + imagedatabases[humanimagechoice] + "'height = 150 width=150 style = 'box-shadow:0px 10px 50px rgba(37,50,233,1);' >";
    messdiv.innerHTML = "<h1 style = 'color: " + finalmessage['color'] + ";font-size:60px;padding:30px;'>" + finalmessage['message'] + "</h1>";
    botdiv.innerHTML = "<img src= '" + imagedatabases[botimagechoice] + "'height = 150 width=150 style = 'box-shadow:0px 10px 50px red;' >";




    document.getElementById('rps-box').appendChild(humandiv);
    document.getElementById('rps-box').appendChild(messdiv);

    document.getElementById('rps-box').appendChild(botdiv);

    let element = document.querySelector('#rps-box');
    element.style.backgroundColor = 'black';


  }

