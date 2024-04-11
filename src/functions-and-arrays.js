// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    if(a > b){
        return a;
    } else if (a < b) {
        return b;
    } else if (a === b) {
        return b;
    }
    
}
console.log(maxOfTwoNumbers(4, 4));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0){
        return null;
    }
    let sizeIs = "";
    for(i = 0; i < arr.length; i++){
        if (sizeIs.length < arr[i].length){
            sizeIs = arr[i];
    }
 }
    return sizeIs;
}
console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for(i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if(numbers2.length === 0) {
        return 0;
    }
    let sum = 0;
    for(i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }
    return sum/numbers2.length;
}

console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordToSearch) {
    if (arr.length === 0){
        return null;
    }
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === wordToSearch){
            return true;
        }
    }
    return false;
}
console.log(doesWordExist(words2, "machine"))