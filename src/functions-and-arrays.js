// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
if (num1 > num2) {
 return num1;
} else if (num2 > num1) {
    return num2;
} else {
    return num1, num2;
}
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
if (words.length === 0) {
    return null;
}

let longestWord = " ";
for (let i = 0; i < words.length; i++) {
if (words[i].length > longestWord.length) {
longestWord = words[i];
}
}
return longestWord;
}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArr) {
if (numberArr.length === 0) {
    return 0;
}
    let sum = 0
    for (let i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
    }
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageNumArr) {
    if (!averageNumArr.length) {
        return 0;
    }

    return sumNumbers(averageNumArr) / averageNumArr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, checkWord) {
    if(!wordsArr.length) {
        return null;
    }

    for (let i = 0; i < wordsArr.length; i++) {
        if(wordsArr.includes(checkWord)) {
            return true;
        } 
    }
    return false;
}
