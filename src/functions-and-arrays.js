// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return (num1 > num2 ? num1 : num2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArr) {
    if (wordArr.length === 0) {
        return null;
    }
    
    let longestWord = [];

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > longestWord.length) {
            longestWord = wordArr[i];
            } 
        }
        return longestWord;
    }

console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let result = 0;

    for (i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr2) {
    if (arr2.length === 0) {
        return 0;
    }
    
    let result = 0;

    for (i = 0; i < arr2.length; i++) {
        result += arr2[i];
    }
   return (result / arr2.length);
}






// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr3, word) {
    if (arr3.length === 0){
        return null;
    }
    for (i = 0; i < arr3.length ; i++){
       if (arr3[i] === word) {
       return true;
       } else {arr3[i] !== word};
    }
    return false;
}
