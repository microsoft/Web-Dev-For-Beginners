console.log(document)   //this document is a object that is responsible to connect html with javascript so that 
//our web page will function accordingly(javascript can control html by this document which is written in c++,
//c++is relatively a low level langauge than c++).
//DOM stands for document object model,when we load a page,the server sends the html code to the browser,then the browser needs to report two things,css and javascript
//css for designing and js for interactivity but before they dov their work browser needs to make a tree like structure of html for them such that
//css and js can work on the nodes they required to, quickly.
//that tree like structure is called DOM
//DOM is a programmatic representation of html made by browser and it is the view of what we see on the screen
//if remove an element form DOM thennit will not appear on the screen and vice versa.
//so js can mainpulate the DOM

//document.querySelector
const heading=document.querySelector('h1')    //single or double quotes both can be used,here inside queryselector,
//we can write anything that can be written inside css selector like id and class.
console.log(heading)    //text inside h2 will apear on console
heading.innerText="hi this is sapna"   //by using this property we can change the text of any selected element(single and double quotes)
console.log(heading)    //after changing the text ,new text will appear on console,but the upper line will also reflect the new text then.
const listitems=document.querySelector('ul li')
console.log(listitems)   //nut this will only give 1st list item bcz in js it search for the element that is in ul li and return 
//so its diffrent from css bcz css will be applied to all the element of ul li
//so to aplly js in all the elements we can use all
const listt=document.querySelectorAll('ul li')
console.log(listt)  //it will return nodelist of all the list items
//nodelist can be understandable as array though it snot exctlhy an array
//we can iterate in it just like array
for(let i=0;i<listt.length;i++)
{const u=listt[i]
 u.innerText="yo"  //iterating each element of nodelist and then changing it to yo
 console.log(u)

}


//now lets do some real world shitts
//in order to do something which can take place by some interaction of user to the web page,we uses event
const incbut=document.querySelector('#inc')
const deccbut=document.querySelector('#dec')
const show=document.querySelector('#count')
const ulele=document.querySelector('#list-items')
let cnt=0;
function inc(){
   cnt++
   show.innerText=cnt
   //create an element(that we want to show on the screen)
   const li=document.createElement('li')  //this is a func that takes the name of the tag we want to create as an argument
   li.setAttribute('data-counter',cnt)   //sets an attribute
   console.log(li)  //data-counter 1(whatever cnt it is at)
   if(cnt%2===0)
   {li.style.background='red'}  //using css style with javascript(many of the css style propertis are available)
      //li.setAtrribute('class','red')}
   else
   {li.style.background='yellow'}
      //li.setAtrribute('class','yellow')}
   const b=document.createElement('b')
   const text=document.createTextNode('sentence')   //it creates a text node,every element in html DOM is called a node
   b.appendChild(text)
   li.appendChild(b)   //since text should be written in li,so we need to append li
   const c=document.createTextNode(cnt)
   li.appendChild(c)
   //short way of doing this
   //li.innerHTML='<b>sentence</b>'+cnt
   
   //append that element
   ulele.appendChild(li)   //we want to add the element we have created in the ul tag that is in html(so now,dots will stat listing in ul)
   
}
function dec(){
    const l=ulele.querySelector('[data-counter="'+cnt+'"]')
    const number=parseInt(l.getAttribute('data-counter'),10)  //even if cnt is a number but it will be as a string in html 
    //so we use parseint, and we wrote 10 bcz we will pass a number with base 10
   
    if(number%2==0)
    {l.remove()}  //now it will only remove even listitems
   cnt--
    show.innerText=cnt
    
 }
incbut.addEventListener('click',inc)   //to add event,here the event is click
deccbut.addEventListener('click',dec)
//yay first real web page made successfully;)



//changing css styles with js




//new way to select any element from html 
//const uu=document.querySelector('#1')  //here we need to write with # bcz here we can write everything like id,class,var etc
const ul=document.getElementById('1')   //this func only works for id unlike queryselector,so do not write # here
//it creates a hash map(slightly faster)
//we can use queryselector again on the element bcz the tree that is made my browser have the nodes of elements that are parent and child of each other.
const u=document.querySelector('ul')
const l=u.querySelectorAll('li')  //but we cannot use getelementbyid like this bcz it can be used only with document
console.log(l)



//Destructuring
const arr1=[1,2,3]
const arr2=[4,5,6]
const arr3=[...arr1,...arr2]
console.log(arr3)  //[1,2,3,4,5,6]
const arr4=[...arr1,arr2]
console.log(arr4)  //[1,2,3,[4,5,6]]
const arr5=[arr1,arr2]   //[[1,2,3],[4,5,6]]
console.log(arr5)
const a1=[{
   name:'sapna'
}]
const a2=[{
   age:20
}]
const a3=[...a1,...a2]
console.log(a3)  //[{name:sapna},{age:20}]
//destructuring btw objects
const keyname="cool"
const obj1={
name:'ss',
keyname  //since we write keyname as keyname here,so it will search the value of keyname and place it there automatically
//we can also write keyname:keyname
}
const obj2={
name:'john',
   age:9
}
const obj3={
   ...obj1,
   ...obj2
}
console.log(obj3)   //{name:john,age:9},if properties collide then whatever comes last will be overwritten



//arrow functions
//there are two ways to craete a function
//1.(conventionl way)
likeThis()   //not give error as well
function likeThis(){

}
likeThis()  //not give error
//2.(arrow functions)
//arrowFunc()  //but func call for array func before its declaration will give an error
const arrowFunc=()=>{

}
arrowFunc()  //function call for array func after declaration wiill not give error as understood
//a speaciality of array func is that e need not to write its definition inside the cruly braces unlike conventional function
const vv=()=>2
console.log(vv())  //will return 2
//or
const vw=(arg)=>arg**2   //we need not to write return explicitly here,but if we use curly braces then we need to writ ereturn there
//we can also write single argument without braces,but in case of multiple arguments ,we must write it within braces otherwise it will not work.
console.log(vw(2))   //will return 4



//new array methods inES6
