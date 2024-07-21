// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNum, secondNum) {

if (firstNum > secondNum) {
     return firstNum;
}
if (firstNum < secondNum) {
    return secondNum;
}
else {}
    return secondNum;
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArr) {

    let longestWord = " ";

    if (wordArr.length > 0) {
     for (let i = 0; i < wordArr.length; i++);{ 
       const word = wordArr[i];  
        if (word.length > longestWord.length) {
           longestWord= word;
        }
       if (word.length > longestWord.length); {
         longestWord = word;
       }
    }
     return longestWord;
    } else {
        return null;
}
} 
const result = longestWord

  
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sumTotal = 0 
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === "number") {
            sumTotal += arr[i]
        }
    
    }
    return sumTotal; 
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0;
    }
        let sumTotal = 0 
        for (let i = 0; i < arr.length; i++){
            if (typeof arr[i] === "number") {
                sumTotal += arr[i]
            }
        
        }
        return sumTotal / arr.length;
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr, searchWord) {
    if (wordArr.length = 0) {
        return null;
    }
    for (let i = 0; i < wordArr.length; i++) {
        if (word === searchWord) {
            return true;
        }
    
        }
        return false;
    }
    
