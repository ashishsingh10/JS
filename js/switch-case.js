// Switch Case is used as a altrnate to if-else. we used it to get same result as the if else but in less code.

// const input = "goa";

// if (input === "nod"){         // here we used if else
//     document.write("IT City");
// } else if (input === "blr"){
//     document.write("IT City");
// } else if (input === 1){
//     document.write("IT City");
// } else if (input === "manali"){
//     document.write("Tourist place");
// } else if (input === "goa"){
//     document.write("Tourist Place");
// } else {
//     document.write("UNKNOWN CITY OR PLACE")
// }

// Document.write("<br>");
// Document.write("<br>");

// Here we used the Switch Case statement (Switch case use strick comparissorn operator (===) for comparing)

// switch(input){
//     case "nod" :
//     case "blr":        
//     case 1 :
//         document.write("IT Tech city");
//         break;
//     case "manali" :        
//     case "goa" :
//         document.write("Tourist destination");
//         break;
//     default:
//         document.write("UNknown PLACES or destination");                    

// }







//--------------------------

// const input = 1;

// if (input === "india"){
//     document.write("South Asian Country");
// } else if (input === 91){
//     document.write("South Asian Country");
// } else if (input === "Bharat"){
//     document.write("South Asian Country");
// } else if (input === "1"){
//     document.write("North American Country");
// } else if (input === "US"){
//     document.write("North American Country");
// } else {
//     document.write("UNKNOWN Country");
// }

const input = "US";

switch(input){
    case "india":
        // console.log("South Asian Country")
        // break;
    case "bharat":    
    case 91:
        console.log("South Asian Country");
        break;    
    case "US":
        // console.log("North American Country");
        // break;
    case 1:
        console.log("North American Country")
        break;
    default:
        console.log("UNKNOWN PLACE")            
}