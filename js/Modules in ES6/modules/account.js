// export let accountNumber = "Saving"
// export let accountType = "Saving"

// export function widthdraw(){
//     console.log("Money is widthdraw...")
// }

// export function deposit(){
//     console.log("Money is updated...")
// }



//-------------- 2nd way to Export (mass Export hota he). upar wale code ko hi mass export kiya he

let accountNumber = "Saving"
let accountType = "Saving"

function widthdraw(){
    console.log("Money is widthdraw...")
}

function deposit(){
    console.log("Money is updated...")
}

export { widthdraw, deposit, accountNumber, accountType}// mass export

