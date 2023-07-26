console.log('JS EXAMPLES Practices');

// const num1 = 5;
// const num2 = 2;
// const result = num1 + num2;
// console.log(result);



// const num = 4;
// const output = Math.sqrt(num);
// console.log(`${output}`);

// const number = prompt('Enter the value');

// const result = Math.sqrt(number);
// console.log(`${number} ${result}`);

// AREA OF TRIANGLE
// const base = 2;
// const height = 10;
// const base = prompt('type the base - ');
// const height = prompt('type the height');
// const area = (base * height) / 2;

// console.log(`${area}`);

// Swap the value
// let a = 5;
// let b = 7;

// let temp = a;
// a = b;
// b = temp;
// console.log(`${a}`);
// console.log(`${b}`);

// let a, b;
// [a, b] = [5, 8];
// [b, a] = [5,8];
// console.log(`${a}`);
// console.log(`${b}`);

// CONVERT Kilometers to Miles
// const km = prompt('enter the kilometer value:  !');
// const factor = 0.621371;
// const miles = km * factor;
// console.log(`${miles}`);

// Convert Celsius to Fahrenheit
// const celsius = 35;
// // const tempFactor = 1.8 + 32;
// const fahrenheit = (celsius * 1.8) + 32;
// console.log(`${fahrenheit} degree`);


// {
//     const a = 50;
//     console.log(a);
// }



// const b = ['Mark', 75, 'Tome' , 'Luice'];
// console.log(b);

// b[3] = 'Jon';
// console.log(b);

// const arr = ['work' , 'exercise', 'eat'];
// // arr[3] = 'hello';
// console.log(arr);

// console.log(2);

// function pumps(){
//     return 'FoosterThePeople'
// }
// console.log(pumps());

// const name5 = 'john';
// console.log('Hellllooo' + '   ' +   name5);

// let obj = {
//     pg: 'javascript',
//     framework: 'react',
//     ver: 4

// }
// console.log(obj);


// IF ELSE

// const number = parseInt(prompt('Enter the number'));

// if (number > 0) {
//     console.log('number is postive');
// }
// else if (number == 0) {
//     console.log('number is zero');
// } else {
//     console.log('number is negative');
// }


// NESTED IF ELSE

// const num = prompt(' enter the number');
// if (num >= 0){
//     if (num == 0){
//         console.log('num is zero')
//     } else {
//         console.log('numb is positive')
//     }
    
// } else {
//     console.log('num is negative')
// }

// const number = 11;
// const result = number % 2;
// if (number % 2 == 0 ) {
//     console.log('the result is even');
// } else {
//     console.log('the result is odd');
// }

// const number = 11;
// const result = (number % 2 == 0) ? 'even' : 'odd';
// console.log(result); 

// const num1 = 22;
// const num2 = 18;
// const num3 = 15;
// let largest 
// if (num1 > num2 && num1 > num3){
//     largest = num1;
//     console.log(largest = num1);
// } else if(num2 > num1 && num2 > num3){
//     largest = num2;
//     console.log(largest = num2);
// } else {
//     largest = num3;
//     console.log(largest = num3);
// }

// console.log(`The largest number is ${largest}`);

// const num1 = 55;
// const num2 = 14;
// const num3 = 8;
// let result = Math.max(num1, num2, num3);
// console.log(result);


// ============MISCELLENEOUS PRACTICE============

// Check if a number is odd or even in JavaScript

// let num = 24;

// if (num % 2 == 0){
//     console.log("even number");
// } else {
//     console.log("odd number");
// }


//Find the largest of two number

let num1 = 25;
let num2 = 45;
let num3 = 15;

if (num1 > num2 && num1 > num3){
    console.log("num1 is largest");
} else if (num2 > num1){
    console.log("num2 is big")
} else {
    console.log("num3 is big boss");
}