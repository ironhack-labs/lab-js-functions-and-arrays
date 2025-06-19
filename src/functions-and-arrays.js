// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        return num1
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(arr) {
    let longest = "";
    if (arr.length === 0) {
                return null;
            };
    for (let i = 0; i < arr.length; i++) {
        

         if (arr[i].length > longest.length) {
            longest = arr[i];
        } else if (arr[i].length === longest.length) {
            continue;
        } 
    }
    return longest;
}
    
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let findSum = 0;
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        findSum += arr[i];
    }
    return findSum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let findSum = 0;
    let findAvg = 0;
    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        findSum += arr[i];
        findAvg = findSum / arr.length;
    }
   
return findAvg;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null;
    } else if (arr.includes(word)) {
        return true
    } else {
        return false
    }
}
