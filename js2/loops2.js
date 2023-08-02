// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//while loop
// let counter = 1;
// while (counter <= 10){
//     console.log(counter);
//     counter++;
// }

//do while loop
// let counter = 1;
// do {console.log(counter);
//     counter++;
// } while(
//     counter <=10
// );


// 2. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

// let pattern = "";
// for(let i = 1; i<=7; i++){
//     for(let j = 1; j <= i; j++){
//         pattern = pattern + "#";
        
//     }
    
//     pattern += "\n";  

    
// }
// console.log(pattern);


//----while loop
// let pattern2 = "";
// let counter = 1;
// let counter2 = 1;
// while(counter <=7){
   
//     pattern2 += "#";
//     console.log(pattern2);
//     counter++;
    
// }

//---do while loop

let pattern = "";
counter = 1;
do{
    pattern += "#";
    console.log(pattern);
    counter++;

} while (counter <= 7);
