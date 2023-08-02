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

// let pattern = "";
// counter = 1;
// do{
//     pattern += "#";
//     console.log(pattern);
//     counter++;

// } while (counter <= 7);


//Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for(let i = 0; i <=10; i++){
    console.log(`${i} x ${i} = ${i*i} `);
}
