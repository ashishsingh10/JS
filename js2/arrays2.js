//Write a function getFirstElement that takes an array and returns the first element of the array.
// function getFirstElement(arr){
//     return arr[0];
// }
// console.log(getFirstElement([1, 2]));

// Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.
// function rotate(arr){
//     let x = arr.shift();
//     arr.push(x);
//     return arr;
// }

// console.log(rotate([1, 2]));


// Declare an empty array;
let emptyArr = [];
console.log(emptyArr)

// ----------------------------------------
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

// Find the length of your array
console.log(countries.length);

// Get the first item, the middle item and the last item of the array
console.log(countries[0]);

let middleArr = Math.floor(countries.length / 2);
console.log(middleArr);
console.log(countries[5]);

let lastCountry = countries.length -1;
console.log(countries[lastCountry]);

