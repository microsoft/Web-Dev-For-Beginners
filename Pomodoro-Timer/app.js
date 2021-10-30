const sessionLength= document.querySelector('#sessionLength');
const breakLength= document.querySelector('#breakLength');
const addSession= document.querySelector('#add-session');
const subSession= document.querySelector('#sub-session');
const addBreak= document.querySelector('#add-break');
const subBreak= document.querySelector('#sub-break');

const startButton= document.querySelector('.start');
const stopButton= document.querySelector('.stop');
const resetButton= document.querySelector('.reset');

const clock= document.querySelector('.clock');
const session= document.querySelector('.session');

startButton.addEventListener('click',startPomodoro);
resetButton.addEventListener('click',resetPomodoro);
stopButton.addEventListener('click',stopPomodoro);

let workTime= sessionLength.innerHTML;
let breakTime= breakLength.innerHTML;
let timerID;
let timeStart;
addSession.addEventListener('click',()=>{
    if(workTime<60){workTime++;}
    sessionLength.innerHTML= workTime;
    clock.innerHTML= workTime+':00';
    console.log(workTime);
})
subSession.addEventListener('click',()=>{
    if(workTime>1){workTime--;}
    sessionLength.innerHTML= workTime;
    clock.innerHTML= workTime+':00';
})
addBreak.addEventListener('click',()=>{
    if(breakTime<60){breakTime++;}
    breakLength.innerHTML=breakTime;
})
subBreak.addEventListener('click',()=>{
    if(breakTime>1){breakTime--;}
    breakLength.innerHTML=breakTime;
})
function stopPomodoro(){
    addSession.disabled=false;
    subSession.disabled=false;
    addBreak.disabled=false;
    subBreak.disabled=false;
    startButton.disabled= false;
    clearInterval(timerID);
    session.innerHTML="Work Session";
    clock.innerHTML=sessionLength.innerHTML+":00";
}

function resetPomodoro(){
      addSession.disabled=true;
      subSession.disabled=true;
      addBreak.disabled=true;
      subBreak.disabled=true;
      startButton.disabled= true;
      clearInterval(timerID);
      document.querySelector('.timer').style.borderColor="#BD3737";
      document.querySelector('.timer').style.backgroundColor="#942222";
      timeStart= new Date().getTime();
      session.innerHTML="Work Session";
      totalSeconds= sessionLength.innerHTML * 60;
      timerID= setInterval(changeTime,990);
}
function startPomodoro(){
    addSession.disabled=true;
    subSession.disabled=true;
    addBreak.disabled=true;
    subBreak.disabled=true;
    startButton.disabled= true;
    document.querySelector('.timer').style.borderColor="#BD3737";
    document.querySelector('.timer').style.backgroundColor="#942222";
    timeStart= new Date().getTime();
    timerID= setInterval(changeTime,990);
    totalSeconds= sessionLength.innerHTML * 60;
}
let minutes;
let seconds;
let totalSeconds;
function changeTime(){
    let timeNow= new Date().getTime();
    let diff= Math.floor((timeNow-timeStart)/1000);
    console.log(totalSeconds+" "+diff);
    let temp= totalSeconds-diff;
    if(temp==2){
        playSound();
    }
    if(diff>=totalSeconds){
        changeSessions();
    }
    else{
        minutes= Math.floor(temp/60);
        seconds= Math.floor(temp-minutes*60);
        if(seconds<10){seconds='0'+seconds;}
        clock.innerHTML= minutes+':'+seconds;
    }
}

function changeSessions(){
    clearInterval(timerID);
    timeStart= new Date().getTime();
      if(session.innerHTML=="Work Session"){
           session.innerHTML="Break Session";
           clock.innerHTML=breakLength.innerHTML+':00';
           totalSeconds= breakLength.innerHTML * 60;
           document.querySelector('.timer').style.borderColor="#a31cd4";
            document.querySelector('.timer').style.backgroundColor="#7b1cd4";
      }  
      else{
        session.innerHTML="Work Session";
        clock.innerHTML=sessionLength.innerHTML+':00';
        totalSeconds= sessionLength.innerHTML * 60;
        document.querySelector('.timer').style.borderColor="#BD3737";
        document.querySelector('.timer').style.backgroundColor="#942222";
      }
      timerID=setInterval(changeTime,990);
}

function playSound() {

    var mp3 = "http://soundbible.com/grab.php?id=1746&type=mp3";
    var audio = new Audio(mp3);
    audio.play();    

  }