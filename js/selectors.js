console.log("Selector test");

// let element = document.getElementById("myfirst");
// console.log(element);

// let elent = document.getElementsByClassName("red");
// console.log(elent);

// let multi = document.getElementsByClassName("child");
// console.log(multi);

let element = document.createElement('h2');
element.className = 'childul';
element.id = 'head1';
element.setAttribute('title', 'mytitle');
element.innerHTML = '<b>This is created by Aster<b>';
element.style.color = 'red';
console.log(element);

let head5 = document.querySelector('div.container');

head5.appendChild(element);
console.log(div);
console.log(element);

let backg = document.getElementsByClassName('container');
backg.style
console.log(backg);


