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
console.log(countries[middleArr]);

let lastCountry = countries.length -1;
console.log(countries[lastCountry]);

//Slice out the first 3 countriers from the array

let sliceFirst = countries.slice(0- 3);
console.log(sliceFirst);

let sliceLast = countries.slice(countries.length - 3);
console.log(sliceLast);

let sliceMiddle = countries.slice(middleArr, middleArr + 1);
console.log(sliceMiddle);

/* Write a function halve that copies the first half of an array. 
With an odd number of array elements, the middle element should belong to the first half. */
function halve(arr){
    let length = Math.floor((arr.length) / 2);
    let x = arr.slice(0, length);
  
    let length2 = Math.round((arr.length) / 2)
  
    if (length < length2){
      let y = arr.slice(0, length2);
      console.log(length2);
  
      return y;
    }
    return x;
   
  };
  
  console.log(halve(['a', 'b', 'c', 'd', 5]));


/* Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. 
An empty array should return an empty string.
Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'. */

function list(arr){
  let a = arr.slice(0, arr.length - 1);
  let last = arr[arr.length - 1]

  let y = a.join(', ');
  if(arr.length === 0){
    return "";
  }
  if(arr.length ===1){
  return arr[0]
  }
  return y + ' and ' + last;
}
console.log(list(['Huey', 'Dewey', 'Louie']));

