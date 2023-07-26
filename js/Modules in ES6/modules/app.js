import { name } from '/modules/user.js'; 
import {age} from '/modules/user.js';
import {widthdraw as wd, bankdetail} from '/modules/user.js';// we can give another name to same element with using "as". here i give name second name of widthdraw as "wd".


// import { widthdraw, deposit, accountNumber, accountType } from '/modules/account.js'; // short method to import multiple file (Mass Import)
import * as accountdetails from '/modules/account.js';//its use for Mass Import. Its is used for Big Projects. hete we have to give whole import file name like here i did  as a "accountdetails"

console.log(name);
console.log(age);
// widthdraw();
wd();

accountdetails.widthdraw();//14th line of command working with 6th line of code. 

bankdetail();

//Note - search use of Defaul function in module



//====================Aggregating Modules

import { square, circle } from '/modules/aggregatingModule/shapes.js';

square();