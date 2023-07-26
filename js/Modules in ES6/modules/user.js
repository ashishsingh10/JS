export let name = "Ashish";
export let age = 27;

import {deposit} from '/modules/account.js';

export function widthdraw(){
    console.log("User Widthdraw...")

}

export function bankdetail(){
    console.log("----2 modules combine (user.js + account.js)");
    deposit();
}

