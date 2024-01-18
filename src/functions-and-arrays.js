// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(no1, no2) {
    if (no1 > no2) {
        return no1;
    } else {
        return no2;
    }
}
const result = maxOfTwoNumbers(2, 5);
console.log(result);


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(arr) {
    if (arr.length === 0) {
        return 0
    }

    let longestWord = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }

    return longestWord;
}
const longestLength = findLongestWord(words);
console.log(longestLength);

// Iteration 3 | Sum Numbers


const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(arr){
let total= 0
arr.forEach(function(numbers){
total += numbers;
});
return total;
}
console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];



function averageNumbers(arr) {
   
    const totalSum = sumNumbers(arr);


    if (arr.length === 0) {
        return 0;
    }

    
    const average = totalSum / arr.length;

    return average;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, targetWord) {
    if (wordArray.length === 0) {
        return null;
    }

    for (const word of wordArray) {
        if (word === targetWord) {
            return true;
        }
    }

    return false;
}

