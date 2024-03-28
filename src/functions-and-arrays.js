// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    }else {
        return num2
    }
}
console.log(maxOfTwoNumbers(num1, num2))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }
    let longestWord = words[0];
    for(let i = 1; i < words.length; i++) {
        if (words[i].length> longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArr) {
    let sum = 0;
    for(let i = 0; i < numberArr.length; i++) {
        sum += numberArr[i];
    }
    return sum; 
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numOfArray) {
    if (numOfArray.length === 0) {
        return 0;
    }
    let sumNum = 0; 
    let averageNum = 0;
    for (i = 0; i < numOfArray.length; i++) {
        sumNum += numOfArray[i];
    }
    averageNum = sumNum / numOfArray.length; 
    return averageNum;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordInArr, wordToCheck) {
    if (wordInArr.length === 0) {
        return null; 
    }
for (let i = 0; i < wordInArr.length; i++) {
    if (wordInArr[i] === wordToCheck) {
        return true;
    }
}
return false;
}
