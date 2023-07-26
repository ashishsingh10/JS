/* Console Practice ---
console.log("Hello World");
console.log(4+5);
console.log(true);
console.log([34, 5, 2, 5]);
console.warn('This is true');
console.table({harry: 'this', marks:34});
console.timeEnd('Your code Took')
console.clear();
console.time('Your code took');
console.assert(566>189, 'age>119 is not possible');*/

// var, const, let ----

// var city = 'Delhi';
// // city = 'mumbai';
// console.log(city);

// const itcity = 'blr';
// // itcity = 'hyd';
// console.log(itcity);

// {
//     let city = 'pune';
//     city = 'surat'
//     console.log(city);
// }

// console.log(city);

// let myarr = [1, 2, 3, 4, false, "string"];
// console.log("Data type is" + (typeof myarr));

// let marks = {
//     harry: 45,
//     tommy: 77,
//     marker:67

// }
// console.log(marks)

// function findNames(){

// }
// console.log(typeof findNames);

// let date = new Date();
// console.log(date, (typeof date));

// let myVar;
// myVar = '34';

// console.log(myVar, typeof(myVar));

// let arr = String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

// let arr = [1,2,3,4,5];
// console.log(arr.length, (typeof arr));

// let ab = 56;
// console.log(ab);
// console.log(ab.length);

// let stri = Number("3434");
// stri = Number("123456789");
// console.log(stri, (typeof stri));

// let mystr = "248";
// let mynum = Number("45");
// console.log(mystr + mynum);

let html;
html = "<h1> this is heading </h1>"
+ "<p> this is paragraph </p>";

html = html.concat(' this is able')
console.log(html)

// console.log(html[2]);
// console.log(html.endsWith('able'));
// console.log(html.charAt(5));
// console.log(html.substring(1,10));
// console.log(html.split(' '));
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let myHtml = `Hello ${name}
// <h1> This is my heading </h1>
// <p> You like ${fruit1} and ${fruit2}</p>`;

// document.body.innerHTML = myHtml;
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml2 = `Hello ${html}
            <h1> This is heading</h1>
            <p> You like ${fruit1} and ${fruit}  


     
            `;

document.body.innerHTML = myHtml2;
