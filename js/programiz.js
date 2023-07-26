//3. JavaScript Program to Find the Square Root
// const numb = prompt('Enter the number - ');
// const result = Math.sqrt(numb);
// console.log(`The square root of ${numb} is ${result}.`);

//second try
// const numb1 = 100;
// const numb2 = -4;
// const numb3 = 'Hello';

// const result1 = Math.sqrt(numb1);
// const result2 = Math.sqrt(numb2);
// const result3 = Math.sqrt(numb3);

// console.log(` sqaure root of ${numb1} is ${result1}`);
// console.log(`square root of ${numb2} is ${result2}`);
// console.log(`square root of ${numb3} is ${result3}`);

//4. Calculate the Area of a Triangle
// const base = 6;
// const height = 4;
// const area = (base * height) / 2;
// console.log(area);

// Program to Swap Two Variables
// let a = 5;
// let b = 7;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b); 

// let a = 4; //Swaping two numbers Using es6(ES2015) Destructuring assignment
// let b = 9;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

// let a = 5;  //Swaping two numbers Using arthemitic operator
// let b = 2;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);


// 6. Convert Kilometers to Miles
// const km = 160;
// const factor = 0.621371;
// const miles = km * factor;
// console.log(miles);

// const miles = 100; // miles to kms
// const factor = 0.621371;
// const km = miles / factor;
// console.log(km);

//9.Generate a Random Number

// const tv = Math.random();
// console.log(tv);

//10. Javascript Program to Check if a number is Positive, Negative, or Zero
// const num = -25;

// if (num > 0){
//     console.log(`${num} is a postive`);
// } else if (num == 0){
//     console.log(`${num} is zero`);
// } else{
//     console.log(`${num} is negative`);
// }

// ii

// const num = -2;

// if (num >= 0){
//     if (num == 0){
//         console.log("num is zero");
//     }
//     else{
//         console.log("num is positive");
//     }
// } else {
//     console.log("num is negative");
// }



//11. Check if a Number is Odd or Even

// const num = 17;

// if (num % 2 == 0 ){
//     console.log("number is even");
// } else{
//     console.log("number is odd");
// }

//by Ternary Operator
// const result = num % 2 == 0 ? "even" : "odd";
// console.log(result);




//12. Find the Largest Among Three Numbers

// const num1 = 7;
// const num2 = 9;
// const num3 = 9;

// if(num1 >= num2 && num1 >= num3){
//     console.log("Num1 is greater.");
// } else if(num2 >= num1 && num2 >= num3){
//     console.log("Num2 is greater.");
// } else{
//     console.log("Num3 is greater.");
// }

// const num1 = 24;
// const num2 = 6;
// const num3 = 7;

// const maxNum = Math.max(num1, num2, num3);
// console.log(maxNum);


// -------Programmiz example of LOOP----------

// let i = 1;
// let n = 5;

// while(i <= 5){
//     console.log();
//     i++;
// }



// EX-2

// let sum = 0;
// let num = parseInt(prompt('enter the first number: '));
// while (num >= 0){
//     sum += num;
//     num = parseInt(prompt('enter the num: '));
//     sum++;

// }

// console.log(sum);

//Display a text 5 times with FOR  loop

// for (let num = 1; num <= 5; num++){
//     console.log("Hello H5");
// }

//display a sum of n natural numbers

// let sum = 0;
// const num = 100;

// for (let i = 1; i <= 100; i++){
//     sum += i;
    
// }
// console.log(sum);

//13. JavaScript Program to Check Prime Number

// ------------Javascript problem solving---------------------

//1. add two numbers

// let num1 = 4;
// let num2 = 5;

// let result = num1 + num2;

// console.log(result);

//2. Find the Square Root
// let num = 625;
// let root = Math.sqrt(num);

// console.log(root);

//3. Calculate the Area of a Triangle
// let height = 5;
// let base = 8;
// let area = height*base/2;
// console.log(area);

// 4. Program to Swap Two Variables
// let num1 = 7;
// let num2 = 5;
// let temp = num1;

// num1 = num2;
// num2 = temp;

// console.log(num1);
// console.log(num2);

// Swap Two Variables using es6 DESTRUCTING
// let numA = 9;
// let numB = 4;

// [numA, numB] = [numB, numA];

// console.log(numA);
// console.log(numB);

//========Function

// 1. Javascript Program to Generate a Random Number (FUNCTION)

// let randomNum = Math.random();

// console.log(randomNum);

// //Get a Random Number between 1 and 10
// let randomNum2 = Math.floor(Math.random() * 10);

// console.log(randomNum2);


// Convert Minutes into Seconds

function timeConverter(minutes){
    return minutes * 60;
}
console.log(timeConverter(2));
