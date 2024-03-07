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
        return null;
    }
    let longestWord = words[0];
    for(let i = 0; i < words.length; i++) {
        if (words[i].length> longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
    let sum = O;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum; 
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
    let sumNUm = 0; 
    let averageNum = 0;
    for (i = 0; i < numbers2.length; i++) {
        sumNUm += numbers2[i];
    }
    averageNum = sumNUm / numbers2.length; 
    return averageNum;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(existedWord) {
for (let i = 0; i < words2.length; i++) {
    if (existedWord === words2[i]) {
        return true;
    }
}
return false;
}
