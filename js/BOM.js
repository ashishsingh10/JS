// console.log("BOM");

// //====================Window Object in JavaScript=======
// console.log(window.innerHeight); //check inner height
// console.log(window.innerWidth); //check inner width

// console.log(window.outerHeight);

// //----------create Pop page in the website
// //pop page open automatic like it is open in Torrent website

// let winBtn1 = document.getElementById("btn4");
// let winBtn2 = document.getElementById("btn5");
// let winBtn3 = document.getElementById("btn6");


// let urlAdrs = "https://www.google.com/";
// let khobiFeatures = "height=500,width=700";
// let win;

// winBtn1.addEventListener("click", function(){
//     win = window.open(urlAdrs, 'google', khobiFeatures);//(URL=urlAdrs, Name=Google, Features=khobiFeatures)
// });

// winBtn2.addEventListener("click", function(){
//     window.open('https://youtube.com/', 'google');
// });

// winBtn3.addEventListener("click", function(){ //code is not working properly
//     win.close();
// });



//=============================Time out and Time Interval in JavaScript

// setTimeout(meraFunction, 5000);
// let timeoutVarible = setTimeout(meraFunction, 5000);// upar wale ko variable dal diya

// function meraFunction(){
//     alert("Subscribe to the channel");
// }
// clearTimeout(timeoutVarible);// cleartimeout ko if else condition ke time pe practical usekrte he


//---Time Interval function

// setInterval(fun, 2000);

// function fun(){
//     document.write("I am printing FUN after 2 sec")
// }