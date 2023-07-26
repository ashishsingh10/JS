console.log("DOM Learning");

//==== Select an element by ID
// let idTest = document.getElementById("list1");
// // console.log(list1); //isko bas aese hi test karne ke liye likha he
// list1.innerHTML = "<p> hello </p>"
// // console.log(list1.innerHTML); //isko bas aese hi test karne ke liye likha he


//==== Select an element by CLASS

// let classTest = document.getElementsByClassName("head"); //yaha bas ek class use ki he
// console.log(classTest.length);
// for(let i = 0; i < classTest.length; i++){
//     classTest[i].innerHTML = "<i> Class se heading change </i>";
// };

//yaha 2 class ko use kiya he
// let classTest2 = document.getElementsByClassName("head head2"); //yaha 2 class ko use kiya he
// console.log(classTest2.length);
// for(let i = 0; i < classTest2.length; i++){
//     classTest2[i].innerHTML = "<b> bold text </b>";
// };


//==== Select an element by TAG

// let tagTest = document.getElementsByTagName("p");
// for(let i = 0; i < tagTest.length; i++){
//     tagTest[i].innerHTML = "<h4> dell n intel </h4>";
// };


//==== Select an element by Query 

// let queryTest = document.querySelectorAll("p.head");

// for(let i = 0; i < queryTest.length; i++){
//     queryTest[i].innerHTML = "<h1> Java </h1>";
// }



//===========Traversing elements in JavaScript

//selecting Parent element
// let traversTest = document.getElementById("tParent");
// let parnt = traversTest.parentElement;
// parnt.innerHTML = "<p> Parent element changed </p>";


//selecting Children elements 
// let traversTest = document.getElementById("tChildrens");
// let chldrn = traversTest.children; //we can also select first child, last child of the elemnets for ex- by using "firstElementById"

// for(let i = 0; i < chldrn.length; i++){
//     chldrn[i].innerHTML = "<i> Children elements changed ID </i>";

// }


//selecting Siblings elements 
// let traversTest = document.getElementById("tSiblings");
// let siblngs = traversTest.nextElementSibling; //we can also select previous sibling. by using - "previousElementSibling"

// siblngs.innerHTML = "<p> Siblings element changed </p>";




//=================Create and Append Element in JavaScript===================

let crAp1 = document.getElementById("marvel");
let create = document.createElement("h1");
let textNode = document.createTextNode("Create and Append Element with H1"); //used for adding text content in element 1
create.appendChild(textNode);
crAp1.appendChild(create);
// document.getElementById("heading").appendChild(create); //isko use krke bhi append (jodna) kar sakhte he elements ko bager variable ko use krke



//===================Insert Before an Element in JavaScript

let iBefore = document.getElementById("insertBefore");
let iBefore_Create = document.createElement("li");
iBefore_Create.textContent = "new List 8"; //used for adding text content in element 2

let positionI = iBefore.firstElementChild.nextElementSibling.nextElementSibling;
iBefore.insertBefore(iBefore_Create, positionI);



//=======================Remove Child Element in JavaScript

let removeElmnt = document.getElementById("tChildrens");
let position2 = removeElmnt.firstElementChild.nextElementSibling.nextElementSibling;
document.getElementById("tChildrens").removeChild(position2);



//==========================Clone or Copy Element in JavaScript

let cloneElmnt = document.getElementById("marvel");
let letCloneIt = cloneElmnt.cloneNode(true);
document.getElementById("marvel").appendChild(letCloneIt);




//==========================Replace Element in JavaScript

let replaceElmntJs = document.getElementById("marvel");
let createNewElmnt = document.createElement("h1");
createNewElmnt.textContent = "Replace Element in Javascript";

let replace = replaceElmntJs.firstElementChild.nextElementSibling; //here we targetting the postion of the element which we replace
replaceElmntJs.replaceChild(createNewElmnt, replace);



//=====================Insert Adjacent HTML in JavaScript

let insertAdjHtml_Js = document.getElementById("marvel");
let createNewElmnt2 = "<h1> Insert Adjacent HTML </h1>";

insertAdjHtml_Js.insertAdjacentHTML('beforebegin', createNewElmnt2); //beforebegin, afterbegin, beforeend & after are used to inser html on the required position




//========================Change Attribute in JavaScript

// let chngAttribute_Js = document.getElementById("btn");
// chngAttribute_Js.setAttribute("class2", "neon"); //used to SET attutribe

// let getAttr_js = chngAttribute_Js.getAttribute("btnName"); //used to GET attutribe
// let removeAttri_Js = chngAttribute_Js.removeAttribute("btnName"); //used to remove attribute
// let checkAttri_Js = chngAttribute_Js.hasAttribute("mical"); //iused to check availblity of attribute
// console.log(getAttr_Js);











//  ------------------this space is left for learn CSS from the javascript via DOM


//======================Change Inline Style in JavaScript

let rngKare = document.getElementById("btns");

rngKare.style.cssText = "background-color:#000000;color:blue;"; //used to add multiple css style
/* style.css me += operator ka use bhi hota he. += se elemnet ki dusri css style change nahi hoti. google karo */

rngKare.setAttribute('style', 'background-color:blue; color:black'); //setAttribute se bhi css dal sakhte he 



//====================== Get Computed CSS in JavaScript

let cssStylePataKare = document.getElementById("btns");

let cssStyleCheckingNow = getComputedStyle(cssStylePataKare);
console.log(cssStyleCheckingNow.color);
console.log(cssStyleCheckingNow.fontSize);



//====================== Change CSS Classes in JavaScript

let modifyCssClasses_Js = document.getElementById("box");
// console.log(modifyCssClasses_Js.className); //it is used to find the CSS class name 
// modifyCssClasses_Js.className += " textFont"; // used to add new CSS class. += operator ke use se pehle se mojood CSS class me naya css jud jayega. += ke bina purane wali css hath jayegi aur nayi jud jayegi

//-----
console.log(modifyCssClasses_Js.classList); //it is another way to find the CSS class name. yaha array ki tarah dikhta he CSS class 

//ek ek karke CSS class ka pata karne ke lite
for (let cscl of modifyCssClasses_Js.classList){
    console.log(cscl);
}

modifyCssClasses_Js.classList.add("textFont"); //used to add new css class in the element
// modifyCssClasses_Js.classList.remove("text1"); // used to remove css class
// modifyCssClasses_Js.classList.replace("text1" , "textFont"); //use to replace css class









//==========================DOM Events in JavaScript


//this is to add dom event from HTML (check HTML file also)
// function dompeclick1(){
//     alert( "Just Clicked on DOM button");
// }


//this is to add DOM event from javascript (addEventListener) 
let domEvnt_Js = document.getElementById("btn2");
function domPeClick(){
    alert( "Just Clicked on DOM button");
}
domEvnt_Js.addEventListener("click" , domPeClick);


//here we used the anonymous function
domEvnt_Js.addEventListener("mouseover" , function (){
    console.log( " Mouse cursor on the button");
});

domEvnt_Js.addEventListener("mouseout" , function (){
    console.log( " Mouse cursor out of the button");
});



//=========================Key Down Event in JavaScript (Key Up is also another event)

window.addEventListener("keydown" , keybrd);

function keybrd (koiBhiNamm){
    console.log(koiBhiNamm);

}