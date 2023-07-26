// let marks = [24, 54, 56, 42, 55, 25];
// const arr = Array(23, 121,234, 'Orange');
// const mixed = ['str', 76, 45, [4, 5]];
// console.log(marks);
// console.log(arr);
// console.log(mixed);
// arr[1] = 'Aster';
// console.log(arr);

// let value = marks.indexOf(55);
// console.log(value);
// marks.push(4545);
// console.log(marks);

// let marks2 = [1, 5, 7, 8];
// marks = marks.concat(marks2);
// console.log(marks);


// /* -------JAVASCRIPT OBJECT ------*/

// let myobj = {
//     'first name' : 'Ashish',
//     division : 1,
//     isActive : true,
//     points : [67, 78, 88]


// }
// console.log(myobj);
// console.log(myobj['first name']);
// console.log(myobj['isActive'])





//-----------ARRAY NEW Practice-----

// let company = ["microsoft", "amazon", "google", 1, 5.4];
// document.write(company);

// console.log(company[1]);
// console.log(company);




//=============OPERATION ON ARRAY===========

// let company = ["microsoft", "amazon", "google", 1, 5.4];

// company.push("flipkart"); // add new element in last postion or text of the array
// company.unshift("product based company:"); // add new element in first position
// company.pop(); // remove one element from the end

// company.shift(company); //remove the firt element of the array
// console.log(company);

// let findposition = company.indexOf("google"); // find the position of the element
// console.log(findposition);

// // Array.isArray() is used to check if the element is array or not. if i put (company) then it will show array
// let company2 = "paypal";
// console.log(Array.isArray(company2)); 

// // Add multiple array by using array.concat()
// let company2 = ["paypal, flipkart"];
// let company3 = ["tcs"];
// let addcompany = company.concat(company2, company3);
// console.log(addcompany);

// company.slice();
// console.log(company);



//------------MULTI-DIMENSIONAL ARRAY----------------

// i just add books array to understand the multi-dimesnsion array. otherwise no need of book array
let books = ["Phyics" , "Math", "Computer Science"]; 
let booksWithPages = [
    ["Phyics" , "240"], //first row/array start with 0 position and Physics have o position within the first row/array
    ["Math" , "180"], 
    ["Computer Science" , [["190"] ,["20"]]] // two books with 190 & 20 pages 
];

let fetchDetails = booksWithPages[2][1][0];
console.log(fetchDetails);


//-------automatic fetch the the all elements of the array---------

let books = ["math" , "physics" , "sst"];
let booklength = books.length;

for (i = 0; i <booklength; i++){
    console.log(`Element ${i} is ${booklength}`)
};

