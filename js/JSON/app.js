console.log("JSON...")

//================Parse JSON Data in JavaScript (server se liye data ko javascript object me badle)
let data = `{
    "name": "ashish", 
    "agae": 27,
    "is_student": true,
    "passport_no": null,
    "p_lang": ["c", "javascript", "java"],
    "address": {
        "city": "noida",
        "state": "uttar pradesh",
        "pincode" : 201312
    }

}`;

let dataObject = JSON.parse(data); //JSON.parse is used to convert JSON String into JavaScript Object
console.log(dataObject["name"]);
console.log(dataObject["p_lang"][1]);
console.log(dataObject["address"]["pincode"]);



//=========================create JSON string in JavaScript (server pe data bhejne ke liye javascript ke data ko JSON String me convert karna)
let data2 = {
    name: "max",
    age: 25,
    city: "gurgaon"
}

let dObject = JSON.stringify(data2);//JSON.stringify convert javascript object in JSON String
console.log(dObject);