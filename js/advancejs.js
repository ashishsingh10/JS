// console.log("ADVANCE JAVASCRIPT");

// //================ARROW FUNCTION==========

// //this is normal Function
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,5));

// //this is ARROW Function
// let sumA = (a,b) => {
//     return a+b;
// }
// console.log(sumA(2,7));

// //we can make Arrow Function further short by removing {} & return
// let sumB = (a,b) => a+b;
// console.log(sumB(2,9));


// //----- Arrow function without parameters
// function random(){ //this is normal function
//     return Math.random();
// }
// console.log(random());

// let randomA = () => Math.random();
// console.log(randomA());


// //-------Arrow function in Anonymous function

// // document.addEventListener("click" , function(){ //this is normal anonymous function
// //     console.log("Clicked is done");
// // });

// document.addEventListener("click" , () => console.log("Clicked is done")); // this is arrow function




//=================CALLBACK FUNCTION============

function sayHello(){
    console.log("Hello there!");
}

function sayHi(){
    console.log("Hi........!");
}



function add(b,a, maxi){//maxi is a callback function. we give the name callback
    console.log(a+b);
    maxi();
}

let a = 10;
let b = 8;

add(a,b, sayHi);

add(a,b, function(){ // anoumenous function here. it is also run because of call back function
    console.log("without callback function i will not run")
});


//==============Default Parameters in ES6 (part 80 Topgun youtube)

function talk(msg="hi"){ //default parameter gives a default value in the case of when we dont give any input 
    console.log(msg);
}

talk();



//====================Rest parameters in ES6===========

function sum(a,b){ //here parameters already defined (a,b)
    return a+b;
}

console.log(sum(4,5));

//Rest Parameters--

function sum2(...args){// used "..." to use rest parameters. we can give any name like args or tata
    let result = 0;
    for (let i = 0; i < args.length; i++){
        // result = result + args[i];
        result += args[i];
    }
    console.log(result);

}
sum2(4,5,1);



//============================Spread Operator in ES6=========

let array1 = [1,2,5,6];
let array2 = [8,9,11, ...array1];//we "..." to make spread operator. with spread operator we can add one array to another

console.log(array2);

let array3 = [...array1, ...array2];
console.log(array3);


//=============================for…of Loop in ES6

// let score = [80,75,89,91];
// let score = "Hello World"

// for(let x of score){// For..Of Loop is used to iterate the iterateble object like Array & String. is loop se array.length ki jrurt nhi hoti
//     console.log(x);
// }




//===========================Array Destructuring in ES6 (JavaScript)

let book = ["Advance JS", 200, 150];
// let name = book[0];
// let pages = book[1];
// let price = book[3];

let [name, pages, price] = book; // array destructing 
console.log(price);

//----
function bookD(){
    return ["Advance JS", 200, [110, 150]];  //we can use array within array  
}

let [bookTitle, pageD,[ebookPrice, hardcopyPrice]] = bookD();
console.log(ebookPrice);




//===============================Object Destructuring in ES6
console.log("OBJECT DESTRUCTING")
let book3 = {
    name3 : "Advance JS3",
    pages3 : 200,
    price3 : 210,
    publication : {
        publisher : "Penguin Books",
        year : 2023
    }
}

//down below i give "publisher" a another name "producer". 2nd naming only happen after using ":"
let {name3, pages3, price3, price4 = 400, publication : {publisher : producer, year}} = book3;
console.log(producer);

/*price4 ko upar wale object me difined nahi kiya he. 
lekin hamko alag se variable banana he toh usko VS code line 158 me declare karna rahega.
hum agar price4 me 400 nahi dalenge toh aur fir console log karenge toh undefined likh hua aayega.*/
console.log(price4); 




//===============JavaScript Map Function
//map function se kisi array me koi operation laga ke usko dusre array me result nikal sakhte he.
console.log("----Map Function")
let arrayMap = [2, 3, 5, 8]; //result required: [4, 6, 10 , 16]

//we are doubling the value of array without using map function
/*let arrayMap2 = [];

for (let i = 0; i<arrayMap.length; i++){
    arrayMap2[i] = arrayMap[i] * 2;
}
console.log(arrayMap2);*/ 

// we are doubling the value of array with using map function

// let arrayMap2 = arrayMap.map(function(val){//here we used annoymenous function
//     return val * 2;
// })

// console.log(arrayMap2);

let arrayMap2 = arrayMap.map((val) => val * 2);
console.log(arrayMap2);




//==========================JavaScript Filter Function
console.log("Filter Function");//it is used to filter 
let arrFilter = [2, 5, 12, 4, 21, 15]; //result required: number greater than 10[12, 21, 15]

// let arrFilter2 = arrFilter.filter(function(val){
//     return val > 10;
// });
// console.log(arrFilter2);

let arrFilter2 = arrFilter.filter(val => val > 10);//with arrow funcyion
console.log(arrFilter2);

//-----Filter function with array which contain object

let arrFilter3 = [
    {name: "Ashish",
    jobrole: "developer"},
    {
        name : "Max",
        jobrole: "UI designer"
    },
    {
        name : "Vishajeet",
        jobrole: "developer"
    },
    {
        name : "Roney",
        jobrole: "SEO Expert"
    },    
];

let developer = arrFilter3.filter(val => val.jobrole == "developer");
console.log(developer);


//======================Promises===========


//=================Async/Await, Promises, Callbacks (Techical Suneja Youtube)

//problem statement: humko getDatas() me createdata() wala data add krke function chalana he
console.log("Async/Await, Promises, Callbacks...")
const datas = [
    {name:"Ashish", profession: "software engineer"},
    {name:"Ajay", profession: "software engineer"}
];

//callback function ka use kiya he yaha
// function getDatas(){
//     setTimeout(() => {
//         let output="";
//         datas.forEach((data,index) => {
//         output+= `<li>${data.name}</li>`;                
//         })
//         document.body.innerHTML = output
//     }, 1000);  
// }

// function createdata(newdata, callback){
//     setTimeout(() =>{
//         datas.push(newdata);
//         callback();
        
//     },2000);
// }

// createdata({name:"Vishwajeet", profession: "software engineer"}, getDatas);


//Promise ka use kiya he yaha
// function getDatas(){
//     setTimeout(() => {
//         let output="";
//         datas.forEach((data,index) => {
//         output+= `<li>${data.name}</li>`;                
//         })
//         document.body.innerHTML = output
//     }, 1000);  
// }

// function createdata(newdata){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             datas.push(newdata);
//             let error=false;
//             if(!error){
//                 resolve();
//             } else {
//                 reject()
//             }
            
//         getDatas},2000);

//     })
    
// }
// function err(){
//     document.write("codes me dikkat hai")
// };


// createdata({name:"Vishwajeet", profession: "software engineer"}).then(getDatas).catch(err);


//Async/Await ka use kiya he yaha
function getDatas(){
    setTimeout(() => {
        let output="";
        datas.forEach((data,index) => {
        output+= `<li>${data.name}</li>`;                
        })
        document.body.innerHTML = output
    }, 1000);  
}

function createdata(newdata){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            datas.push(newdata);
            let error=false;
            if(!error){
                resolve();
            } else {
                reject()
            }
            
        getDatas},2000);

    })
    
}

//async/await
async function start(){
    await createdata({name:"Vishwajeet", profession: "software engineer"});
    getDatas()

};

start();
