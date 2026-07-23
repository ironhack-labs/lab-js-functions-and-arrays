// Iteration 1 | Find the Maximum
//*
function maxOfTwoNumbers(a,b) {
if (a > b){
return a;
}
else if (a < b){
return b;
}
else {
return a;
}
}
console.log(maxOfTwoNumbers(-200,19));

// *
// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
if (arr.length === 0){
    return null;
}
let longest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
        longest = arr[i];
    }
}
return longest;
}
console.log(findLongestWord(words));

//*
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(n) {
    let sum = 0;
    for (let i = 0; i<n.length; i++){
    sum = sum+ n[i];
    }
    return sum
}
console.log(sumNumbers(numbers));


//*
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(input) {
    if (input.length === 0){
        return 0
    }
    let count = 0;
    for (let m = 0; m <input.length; m++){
        count ++
    }
    let average = sumNumbers(input)/count;
   return average;
}
console.log(averageNumbers(numbers2));



//*
// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrW,wSearch) {
    if (arrW.length === 0) {
    return null;
}
    for (let i = 0; i <arrW.length; i++){
        if (arrW[i] === wSearch) {
            return true;
        }
             }
    return false;
        }
console.log(doesWordExist(words2 ,"machine"));