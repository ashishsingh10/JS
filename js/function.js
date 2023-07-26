console.log('This is Function tutorial');

// function greet(name, thank){
//     console.log(`JavaScript is stable programming ${name} for web application development ${thank}`);
//     return 1;
// }

// const name = 'Aster';
// let name2 = 'Cooper';


// let val = greet(name, 'hello marker');
// console.log(val);

// let num = 5;
// let num2 = 2;
// let result = num + num2;
// console.log(result);

// function calc(number1, number2){
    
     
//     console.log(number1 + number2);
    
    


// }

// let number1 = 2;
// let number2 = 8;
 
// let ans = function calc;
// console.log(ans);

// console.log('addition of two number is:' +  `${calc (2, 4)}`);


// function sroot(squares){
//     let chn = squares * squares;
//     return chn;


// }

// let value = sroot(4);
// console.log(`${value}`);


// function subtract(num1, num2){
//     console.log(num1 - num2)
// }

// subtract(9, 7);

// function table(num){
//     for(let i=0; i<=10; i++){
//         console.log(`${num} x ${i} = ${num * i}`)
//     }
    
    
    
// }

// table(9);

// function wish(name){
//     for(let w = 'Happy Birtday'){
//         console.log()
        
//     }
// }

// function add(){
//     if(arguments.length == 0){
//         console.log('no arguments');
//     } else {
//         let sum = 0;
//         for(let i = 0; i < arguments.length; i++){
//             sum = sum + arguments[i];
//         }
//         console.log(sum);
//     }

// }

// add(7);

// var q = function(event) {
//     alert('Button is clicked!')
// };

// q();




//===================APRIL 2023====================

//-----------Function-----------------

// let num = 2; // this is wthout function
// for (i = 1; i <= 10; i++){

    
//     console.log(2 * i);
    

// }

//yaha function banake upar wale code ko kayi bar use kr sakhte he

// function multiplyTableKaro(){
//     for(i = 1; i <= 10; i++){
//         console.log(`2 x ${i} = ${2 * i}`)
//     };
// };

// multiplyTableKaro();



// --------Parameters & Arguments-----

// upar wale hi function me parameter aur arguments use kiya he
// function multiplyTableKaro(num){ //num is parameter
//     for(i = 1; i <= 10; i++){
//         console.log(`${num} x ${i} = ${num * i}`)
//     };
// };

// multiplyTableKaro(4); // 4 is arguments

// console.log("<br>");

// multiplyTableKaro(5);


//==============Arguments Object in JavaScript==========

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(2, 5)

// -----its show arguments(means number 2, 5)-----
// function add(){
//     console.log(arguments);
// }

// add(2, 5);

// -----its show arguments length(means there are 4 arguments)-----
// function add(){
//     console.log(arguments.length);
// }

// add(2, 5, 8, 7);


/* Create a function which using to do addition (sum) 
of the given number */

// function numberjodoAdd(){
//     if(arguments.length == 0){
//         console.log("no arguments given")
//     } else{
//         let sum = 0;
//         for(let i = 0; i < arguments.length; i++){
//             sum = sum + arguments[i];
//         }
//         console.log(sum);
//     }
// }

// numberjodoAdd(5, 2);


//---yaha mene upar wale code me arguments se minus wala function banaya he

// function subtractArguments(){
//     if(arguments.length === 0){
//         console.log("no tables prints");
//     } else {
//         let subtract = arguments[0];
       
//         for (let i = 1; i < arguments.length; i++){
            
//             subtract = subtract - arguments[i] ;
            
            
//         }
//         console.log(subtract);
//     }

// }

// subtractArguments(15, 2, 2); 


//---yaha mene upar wale code me arguments se minus wala function banaya he

// function multiplyKaro(){
//     if(arguments.length === 0){
//         console.log("no tables prints");
//     } else {
//         let multipli = 1;
       
//         for (let i = 0; i < arguments.length; i++){
            
//             multipli = multipli * arguments[i];
            
            
//         }
//         console.log(multipli);
//     }

// }

// multiplyKaro(15, 2); 





//===========Returning a value in JavaScript==========


// function sum(num1, num2){
//     return num1 + num2;  

// }

// let max = sum(12, 4);
// console.log(max);

//using return in more complicated function-----
//here i create 2 fuction. first gives total marks of the all subject and 2nd function gives percentages of the subjects

// function marks(science, sst, math){
//     let subjectMarks = science + sst + math;
//     return subjectMarks;
// }

// let totalMarks = marks(80, 80, 80);
// console.log(totalMarks);

// function percentages(){
//     let percentSubjects = totalMarks /300 * 100;
//     return percentSubjects;
    
// }

// let totalPercentages = percentages();
// console.log(totalPercentages);


//==============Anonymous Functions in JavaScript

// let dell = function(){
//     console.log("Dell is company")
// }
// setTimeout(dell, 2000);


// setTimeout(function(){ //anonymous function used here. anonymous function mean function without name
//     console.log("Dell is company")
// }, 2000);


//======Immediately Invoked Function in JavaScript

// (function bangalore(){  // use (function....)(); to invoke function imediately
//     console.log("IT City of India")
// })();

(function IT(){
    let city = "IT City of India";
    function bangalore(){
    console.log(city);
    };

    bangalore();


})();
