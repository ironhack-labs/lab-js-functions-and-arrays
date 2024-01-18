// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1;
    }
    else if (value1 < value2) {
        return value2;
    }
    else {
        return value1;
    }
}

maxOfTwoNumbers(5, 3);




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(longest) {
    let longestWord = "";
    longest.forEach((name) => { 
        if (name.length > longestWord.length) {
        longestWord = name;
        }
    });
    if (longestWord === "") {
        return 0;
    }
    return longestWord;
}

findLongestWord(words);




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sum) {
    let sumAll = 0;
    for (let i = 0; i < sum.length; i++) {
        sumAll += sum[i];
    }
    return sumAll;
}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNum) {
    if(arrNum.length === 0) return 0
        return sumNumbers(arrNum) / arrNum.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr, word) {
    if (wordArr.length === 0) {
        return null;
    }
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] === word) {
            return true;
        }
 }
    return false;
}
doesWordExist(words2, "trouble");