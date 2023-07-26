console.log('Event Test');

// document.getElementById('heading').addEventListener('click', function(e){
//     console.log('You just click on the heading FELLA');
//     // location.href = '//globort.com'
//     console.log(e);
     

// });

let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);


function func1(e) {
    console.log("Thanks1", e);
    e.preventDefault();
}

function func2(e) {
    console.log("Thanks its double click", e);
    e.preventDefault();
}

function func3(e) {
    console.log("Thanks its MOUSEDOWN", e);
    e.preventDefault();
}

// document.querySelector('.child').addEventListener('mouseenter', function(){
//     console.log('You enter the area 51')
// })

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(0, 0, ${e.offsetX})`;
    console.log('you moving your mouse')
})