
// const vari = 34;
// const doesDrive = true;

// if (age!=19){
//     console.log('Age is correct')
// }
// if(age==70){
//     console.log('They are old')
// }
// else{
//     console.log('Age is wrong')
// }

// if(typeof vari !== 'undefined'){
//     console.log('vari is defined');
// }

// else{
//     console.log('vari is not defined');
// }

// if (doesDrive && age==18){
//     console.log('you can drive');
// }
// else{
//     console.log('you cannot drive');
// }
// console.log('writing code while playing music');

// let age = 45;
// console.log(age==45? 'Age is 45':'Age is not 45');  




// const car = 'bmw';

// console.log(car=='bmw'? 'Car is bmw':'Car is from other brand');

// console.log('noida');

// switch (age) {
//     case 18:
//         console.log('he is young');
//         break;
//     case 28:
//         console.log('he is 28');
//         break;
//     default:
//         console.log('your age is unknown');
//         break;       




// }

// switch (car){
//     case 'audi':
//         console.log('audi 1');
//         break;

//     case 'bmw':
//         console.log('bmw2');
//         break;
//     default:
//         console.log('tesla roadster');
//         break;



// }




// NEW CODING PRACTICES


// if...else statement

// const number = 25;
// if (number > 0) {
//     console.log("The number is postive");
// } else {
//     console.log('the number is negative');
// }



//if...else if statement

// const num = 05;
// if (num > 0){
//     console.log('the num is postive');
// } else if (num == 0) {
//     console.log('number is zero');
    
// } else {
//     console.log('num is negative');
// }




// Nested if...else Statement

// const num = 01;
// if (num >= 0) {
//     if (num == 0){
//         console.log("num is zero");
//     } else {
//         console.log("num is positive");
//     }
// } else {
//     console.log("num is negative");
// }









//Again practicing javascript

// const bankExamAge = 22;
// const haveAdmitCard = "yes";
// const havePen = "yes"
// if(bankExamAge >= 21 && haveAdmitCard =="yes" && havePen == "yes"){
//     console.log("can give Bank exam");
// } else if(bankExamAge>=21 && haveAdmitCard != "yes"){
//     console.log('get a admit card buddy!');
// } else if (bankExamAge >= 21 && haveAdmitCard == "no" && havePen == "no"){
//     console.log("You need a Pen to write the exam");
// }
// else{
//     console.log("CANNOT give exam");
// } 


//-----NESTED IF---------------------
// const age = 15;
// const hasVoterId = "yes";

// if(age >= 15){
//     if(hasVoterId == "yes"){
//         console.log("you can vote");
//     } else{
//         console.log("First GET yOUR Voter ID");
//     }
// } else{
//     console.log("YOU CANNOT VOTE THIS TIME AMIGO");
// }


// const city = "bangalore";

// if (city == "bangalore"){
//     console.log("Sillicone Valley of India ");
// } else if (city == "noida"){
//     console.log("developing IT city");
// } else {
//     console.log("unknown city");
// }


//check postive number (if else)
// const num = 02;
// if (num > 0){
//     console.log("this is postive num");
// } else {
//     console.log("negative number");
// }

//topgun ytube

// const age = 20;
// const voterid = "no"

// // if (age >= 20 && voterid == "yes"){
// //     console.log("You can vote");
// // } else if (age >= 20 && voterid == "no"){
// //     console.log("Get your VoterId card");
// // } else {
// //     console.log("you cannot vote");
// // }

// if (age >= 20){
//     if(voterid == "yes"){
//         console.log("you can vote");
//     } else {
//         console.log("get your voter card buddy");
//     }
// } else {
//     console.log("you CANT vote");
// }

let marks = 33;

if(marks > 90){
    console.log("AA");
} else if (marks <= 90 && marks > 80){
    console.log("AB");
} else if (marks <= 80 && marks > 70){
    console.log("BB");
} else if (marks <= 70 && marks > 60){
    console.log("BC");
} else if (marks <= 60 && marks > 50){
    console.log("CC");
} else if (marks <= 50 && marks > 40){
    console.log("CD");
} else if (marks <= 40 && marks > 30){
    console.log("DD");
} else{
    console.log("FF");
}