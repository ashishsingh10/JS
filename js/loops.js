// console.log('Loops');

// for(let i=0; i<10; i++)
// {
//     console.log(i);

// }

// let j = 0;
// while(j<10){
//     console.log(j);
//     j++;
// }

// let k = 0;
// do {
//     if(k===5){
//         break;
//     }
//     console.log(k);
//     k ++;
// } while (k<10);

// let k = 0;
// do {
//     if(k===5){
//         k++;
//         continue;
//     }
//     console.log(k);
//     k ++;
// } while (k<10);

// let arr = [2,5,7,9];

// arr.forEach(function(element){
//     console.log(element);
// });

// console.log('OTHER METHOD');

// for(let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }
// console.log('codeisdone');

// let obj = {
//     name: "Aster Denner",
//     age: 78,
//     lang: "javascript",
//     os: "windows"

// }

// for(let key in obj)
// {
//     console.log(`${key} of object is ${obj[key]}`)
// }




// NEW CODING PRACTICE
// const n = 7;
// for (let i=1, n >= i; i++;){
//     console.log("Hello JS File");
// }




// ----- While Loop ---------- 20/12/2022

// let counter = 1;

// while(counter <= 5){
//     document.write("Ashish", counter);
//     counter++;
// };


// let num = 1;
// let sum = 0;

// while(num <= 100){
//     if(num % 2 == 0){
//         sum = sum + num;
//     }
    
//     num++;
    
// }
// document.write(sum);

// -------DO WHILE LOOP----------

// let counter = -5;

// do{
//     document.write(counter);
//     counter++;
// } while (counter <= 10);


// ----------FOR LOOP-----------

// for(let i = 1; i <=10; i++){
//     if(i % 3 == 0){
//         document.write(i);

//     }
    
// }


//===============APRIL=====

// let counterChalu = 1;

// while(counterChalu <= 5){
//     document.write("ibm", "<br>");
//     counterChalu++; //you can also write counterChalu = counterChalu + 1
    

// }

//-----------SUM OF EVEN NUMBER 10
// let counter = 1;
// let sum = 0;

// while(counter <= 100){
//     if(counter % 2 == 0){
//         sum = sum + counter;
//     }
//     counter++;
// }

// document.write(sum);

// =====DO WHILE LOOP

// let counter = 1;

// do{
//     document.write("hp", "<br>");
//     counter++;
// } while(counter <= 10)

// ========FOR LOOP======

// for(let counter = 1; counter <= 10; counter++){
//     document.write("dell", " ", "ibm", "<br>");
// }





//============FOR Loop Practices

// let displayNum = 5;

// for(let i = 1; i <= displayNum; i++){
//     console.log(`at postion ${i}, print Dell.`);
// }


// let displayNum = 5;

// for(let i = 1; i <= displayNum; i++){
//     console.log(i);
// }

// let sum = 0;
// let endNum = 100;
// for (let i = 1; i <= endNum; i++ ){
//     sum += i;
//     console.log("sum is " + sum);
// }

//======While loop

// let displayNum = 1;
// let num = 5;

// while(displayNum <= num){
//     console.log(displayNum);
//     displayNum++;
// }


// ++++++++Sum of Positive Numbers Only
// let sum = 0; // have to revisit this proble
// let n = 100;
// let i = 0;
// while(i <= n){
//     sum = sum + n;
    
//     console.log(sum);
//     i++;
    
// }



//=======DO WHILE Loop

// let display = 1;
// let counter = 5;

// do{
//     console.log(display);
//     display++;
// } while(display <= counter);





//-------JavaScript for/while loop exercises

//1. Write a JS code to print a 2D array

function printArray(){
    let arrData = [
        ["Max" , 25],
        ["Jack" , 29]
    ];
};

printArray();