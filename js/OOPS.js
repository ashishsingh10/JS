//============================Prototype and Prototypal Inheritance

// console.log("Prototype and Prototypal Inheritance");

// //--Prototype
// let person1 = {};
// console.log(person1);

// let person2 = {
//     name: "ashish"
// };
// console.log(person2);

// function Person(n){ //Constructor function ko capital letter se start karte he. ye jruri nabi he but ye yaad rakhane ke liye

//     this.name = n;
// };

// let person3 = new Person("ashish");
// console.log(person3);


// //--Prototype Inheritance
// console.log("----Prototype Inheritance----------------")
// function Creature(ls){//ls mean lifespan
//     this.lifeSpan = ls;
// }

// Creature.prototype.breath = function(){
//     console.log("breathing...");
// }

// let creature1 = new Creature(100);
// console.log(creature1);

// function Human(first, last, a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;
// }

// Human.prototype.fullNames = function(){
//     console.log(this.firstName + " " + this.lastName);

// }

// Human.prototype.__proto__ = Object.create(Creature.prototype);

// let human1 = new Human("ashish", "singh", 28);
// let human2 = new Human("vishwajeet", "kumar", 25);

// console.log(human1);
// console.log(human2.breath());
// console.log(human2.fullNames());




//====================ES6 Class, Object and Inheritance in JavaScript

class person{
    constructor (n, a){//name, age
        this.name = n;
        this.age = a;
    }

    sayHi(){
        console.log("Hi...");
    }

    static hello(){ 
        console.log("hello");
    }

    static sproperty = "this is static property";

}

let person1 = new person("Ashish", 28);

person1.sayHi();

person.hello();//static method class se call hota he, object se nahi
// person1.hello() ---> wrong XXX
console.log(person1);

console.log(person.sproperty);// static property also run from class (not object)



//----Inheritance in ES6

class emp{
    constructor(n){
        this.name = n;
    }
}

class manager extends emp{ //extends se manager class emp class se link ho gaya hai (prototype chaining)

}

let mng1 = new manager("Ashish");

console.log(mng1);


//-==kaunsa constructor function call hoga

// console.log("kaunsa constructor function call hoga?");
// class emp2{
//     constructor(n){
//         this.name = n;
//     }
// }

// class manager2 extends emp2{
//     constructor(p, d){ // d se pata chal raha hai ki department wala baad me call karega
//         super(p);//super() se decide hoga ki pehle kaunsa function call hoga. p se constructor(n) function target ho raha hai
//         this.department = d;
//     }
// }


// let mng2 = new manager2("Vishwajeet" , "web development");

// console.log(mng2);

/*
------Nice wala constructor function upar wale code me add karke nahi chal raha

class jobrole extends manager2{
    constructor(d, w){ // d se pata chal raha hai ki department wala baad me call karega
        super(d);//super() se decide hoga ki pehle kaunsa function call hoga
        this.work = w;
    }
}

let mng2 = new manager2("Vishwajeet" , "web development", "testing");

console.log(mng2);


*/



//nice hum dusri class ka function aur property dusri class me call (use) karenge

// class emp2{
//     constructor(n){
//         this.name = n;
//     }

//     msg(){
//         console.log("hi......");
//     }

// }

// class manager2 extends emp2{
//     constructor(p, d){ // d se pata chal raha hai ki department wala baad me call karega
//         super(p);//super() se decide hoga ki pehle kaunsa function call hoga. p se constructor(n) function target ho raha hai
//         this.department = d;
//     }

//     msg(){
//         console.log("hello......");
//     }

//     info(){
//         super.msg();//super se parent class (emp2) ka call hoga
//         this.msg();// this keyword se isi class (manager2) ka call hoga
//         console.log(this.name + " is manager of department "+ this.department);
//     }
// }


// let mng2 = new manager2("Vishwajeet" , "web development");

// console.log(mng2.info());






//===============niche hum 3 class ko ek sath use karenge

// class emp2{
//     constructor(n){
//         this.name = n;
//     }

//     msg(){
//         console.log("hi......");
//     }

// }

// class manager2 extends emp2{
//     constructor(p, d){ // d se pata chal raha hai ki department wala baad me call karega
//         super(p);//super() se decide hoga ki pehle kaunsa function call hoga. p se constructor(n) function target ho raha hai
//         this.department = d;
//     }

//     msg(){
//         console.log("hello......");
//     }

//     info(){
//         super.msg();//super se parent class (emp2) ka call hoga
//         this.msg();// this keyword se isi class (manager2) ka call hoga
//         console.log(this.name + " is manager of department "+ this.department);
//     }
// }

// class admin extends manager2{//admin manager2 class se jud gaya hai
    
// }

// let admin1 = new admin("Vishwajeet" , "web development");

// console.log(admin1);




//===========Public & Private properties & methods

// private property aur ya method "#" se declare hoti hai
class emp3{
    #name = "";
    constructor(n){
        this.#name = n;
    }
    #getName(){
        console.log(this.#name);
    }

    pubfun(){
        this.#getName();
    }

    pubfun2(){
        console.log("ye public property hai!");
    }


}

let Emp1 = new emp3("Vishwajeet");

Emp1.pubfun2();//public property or method direct object se use karke hoti hai

console.log(Emp1.pubfun());// private property or method ko direct object se call nahi kara sakhte hai. usko hum indirect class ke under ek aur method banake call karate hai (google it!)




//============Mixin
//Mixin me hum kisi object ko kisi class me add karte hai. upar wale codes me humne kisi class ko dusri class me extend kiya tha but hum yaha object ko extend kar rahe hai

// let usefullMethod = {
//     sayHi(){
//         console.log("Hi....");
//     },

//     sayHola(){
//         console.log("Hola...");
//     }
// };

// class user{
//     constructor(){
//         this.name = "ashish"
//     }
// }

// Object.assign(user.prototype, usefullMethod);
// let usr1 = new user();
// console.log(usr1)




// Niche hum 2 object aur aur ek class ko kisi dusri class me call (use) karange

let usefullMethod = {
    sayHi(){
        console.log("Hi....");
    },

    sayHola(){
        console.log("Hola...");
    }
};

let usefullMethod2 = {
    sayHi2(){
        console.log("Hi2....");
    },

    sayHola2(){
        console.log("Hola2...");
    }
};

class user{
    constructor(){
        this.name = "ashish"
    }
}

class admin extends user{

}

Object.assign(admin.prototype, usefullMethod);
Object.assign(admin.prototype, usefullMethod2);

let admin1 = new admin();
console.log(admin1)
