console.log("Lets learn about Object");

// let studentData = {
//     firstname : "Atul",
//     lastname : "marvel",
//     university: "mit"
// }

// // console.log(studentData);
// // document.write(studentData); //did not see object details print by using it

// // //we can accessthe object by 2 methods
// // console.log(studentData.firstname); //by using dot (.) notation
// // console.log(studentData['university']); //by using array ([]) notation


// //add new property in a javascript object
// studentData.age = 25;

// //change property in a javascript object
// studentData.firstname = "Tony";

// console.log(studentData);

// //delete a property in object
// delete studentData.lastname;
// console.log(studentData);

// //find a property in a object if it exist by using "IN" operator true or false
// console.log('age' in studentData); //if i use any diffeent property over the age or other property showing in the studentData object then it will not show


//-----Access the all property of the object

console.log("<br>");
console.log("<br>");


// let company = {
//     carName : "Tata",
//     launchDate : 2021,
//     carType: "petrol"
// }

// console.log(company);

// for(let key in company){
//     console.log(key + ": " + company[key]); // we cant use company.key. it is not work. use only company[key]
// }


//========== Object Methods in JavaScript
// Object Methods is object function which mean adding function in the Object.
// we can add method in object by 4 ways


// let person = {
//     firstName : "Mike",
//     weight : 75,
//     hometown : "Texas"
    
// };


// person.sayHi = function(){ //by creating anounymenous function
//     console.log("Hi there!");
// };
// person.sayHi();


// function greet(){ //by creation a function with name
//     console.log("Hello there!");
// }
// person.sayHello = greet();


// let person2 = { // by creating anonymenous function in the object
//     firstName : "Tim",
//     weight : 71,
//     hometown : "California",
//     sayHola: function(){
//         console.log('Hola Amigo');
//     }
// };

// person2.sayHola();


// let person2 = { // THIS IS ES6 Way. by creating function without using "function" in the object
//     firstName : "Tim",
//     weight : 71,
//     hometown : "California",
//     sayHola(){
//         console.log('Hola Amigo');
//     }
// };

// person2.sayHola();




//=======THIS keyword

// let person3 = { // THIS IS ES6 Way. by creating function without using "function" in the object
//     firstName : "Tim",
//     weight : 71,
//     hometown : "California",
//     sayHola(){
//         console.log(this.firstName + " have a car of " + company.carName + " company.");

//     }
    
// };


// let company = {
//     carName : "Tata",
//     launchDate : 2021,
//     carType: "petrol"
// }

// person3.sayHola();
// document.write(person3);



//=======Math Object in JavaScript

// console.log(Math.PI);//print Pi ki value

// let y = Math.round(4.7); // Math.round give round figure
// console.log(y);

// let x = Math.ceil(4.1); // ciel give maximum number and floor give lower number
// console.log(x);

// let z = Math.max(76, 2, 8, -1); //.max give maximum num and .min show minimum number
// console.log(z); // search on google for more Math objects 


//=========Generate Random Number in JavaScript

// let num = Math.random();
// let num = Math.random() * 10; // 10 se multiply karne pr number points me aayega

// let num = Math.floor(Math.random() * 10); //print number between 0 -10
// console.log(num);




//============JavaScript Accessors (Getters and Setters)===========xxxxxxxxxxxx

//still have to learn more about Javascript Accessors. did not understand it

let person1 = {
    name: "arizona",
    type : "desert",
    code: 1,
    getname : function(){ //without Getter, we use property name like "getname"
        return this.name.toUpperCase();
    }    
}

console.log(person1.getname()); //without Getter, we print getname method by using "getname()".


let person2 = {
    name2: "arizona",
    type : "desert",
    code: 1,    
    get getname2(){ //with Getter, we use property name like "getname2"
        return this.name2.toUpperCase();
    }
    
}
// person2.getname2 = "max";
console.log(person2.getname2); //with Getter, we print getname method by using "getname2".

//---Setter function--------
let person3 = {
    name3: "arizonas",
    type : "desert",
    code: 1,    
    set setname3(n){ 
        return this.name3.toUpperCase();
    }
    
}
person3.setname3 = "atul";
console.log(person3.setname3); 