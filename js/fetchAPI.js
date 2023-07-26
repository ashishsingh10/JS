//=========================Fetching the data from Text file

// fetch("js/api/readme.txt")
// .then((response)=>{
//     return response.text();
// })
// .then((data)=>{
//     document.write.log(data);
// })

//------upar wale code ke arrow function ko aur chota kr diya he
// fetch("js/api/readme.txt")
// .then(response=> response.text())
// .then(data=> document.write(data));

//=========================Fetching the data from JSON file (FROM WEBSITE)

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=> response.json())//upar wale code ke arrow function ko aur chota kr diya he
// .then(data=> console.log(data))
// .catch((error) => console.log(error));

//-----yaha mene json data se ek ek karke user ka data nikala hai
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=> response.json())//upar wale code ke arrow function ko aur chota kr diya he
// .then(data=> {
//     console.log(data);
//     for(let x in data){
//         // document.write(`${data[x].name} - ${data[x].email} - ${data[x].address.city} <br>`);
//         let a = `${data[x].name} - ${data[x].email} - ${data[x].address.city} <br>`;//line 34 wale code ko variable me dal ke run kiya he
//         document.write(a);

//     }
// })
// .catch((error) => console.log(error));

//=========================Fetching the data from JSON file (FROM LAPTOP)

// fetch("js/JSON/studentdata.json")
// .then((respnd) => respnd.json())
// .then((datas)=> {
//     console.log(datas);
//     for(let i in datas){
//         document.write(`${datas[i].name} - ${datas[i].age} - ${datas[i].city} <br>`)
//     }
// })
// .catch((error) => console.log("error"));

//=========================INSERT, UPDATE, DELETE (how to save data on server)

/* when we have to work with JSON DATA

fetch(file/url, {
    method : "POST", 
    body : data,
    header : {
        'Content-Type' : 'application/json',
    },
});

---------------------------------------------------------
"POST" ----> when we have to insert data to server then we have to use POST 
"PUT" ----> used for update the data
"Delete" ----> use for delete the data 
---------------------------------------------------------
data ----> Form Data / JSON Data / Text (yaha hum server ko bata rahe he ki data kis form me)
---------------------------------------------------------
'application/json' ----> yaha hum server ko bata rahe ki ye ki jo 
'application/x-www-form-urlencoded' ----> is se ye pata chal raha he form data he
---------------------------------------------------------*/

//nice wale code me hamne json data ko insert kiya he server pe
// let nfsData = {
//     title: 'NEED FOR SPEED',
//     body: 'bar',
//     userId: 1,
// }
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: 'POST',
//     body: JSON.stringify(nfsData),
//     headers: {
//         'content-type' : 'application/json',
//     },
// })
// .then((response) => response.json())
// .then((data3) => console.log(data3));


//nice wale code me hamne HTML FORM ka data ko JSON data ki form me insert kiya he server pe

// document.getElementById("saveForm").addEventListener("click", function(e) {
//   e.preventDefault();

//   var obj = {
//     title: document.getElementById("titleText").value,
//     body: document.getElementById("bodyText").value,
//     userId: document.getElementById("userid").value,
//   };

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(obj),
//     headers: {
//       "content-type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data4) => console.log(data4));
// });




//nice wale code me hamne HTML FORM ka data ko form hi ki form me insert kiya he server pe (check code line - 66 & 68)

document.getElementById("saveForm").addEventListener("click", function(e) {
    e.preventDefault();
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: new FormData(document.getElementById("myForm")),// yaha new FormData use kiya he. is se hame varible banane ki jrurt nahi he jaisa code line 94 me banaya he. ye sidha data html file se utha he
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data5) => console.log(data5));
  });
  