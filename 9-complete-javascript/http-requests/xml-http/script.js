// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

const url = "https://swapi.dev/api/planets"
const myReq = new XMLHttpRequest();
myReq.addEventListener('load', ()=>{
    console.log("it works")
});
myReq.addEventListener('error', ()=>{
    console.log("Error")
});
myReq.open('GET',url,true);
myReq.send();
console.log("Request sent")
console.log(myReq.response)