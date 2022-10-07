const parallax=document.getElementsByClassName("greete-container");

window.addEventListener("scroll",function(){
    let offset=window.pageYOffset;
    parallax.style.backgroundPositionY=offset*7+"px";
})