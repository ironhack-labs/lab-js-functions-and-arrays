// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num2, num3) {
    return num2 > num3 ? num2 : num3;
}

const result = maxOfTwoNumbers(10, 5);


console.log("The bigger number is", result);



// Iteration 2 | Find the Longest Word
let words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }

    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers

function sumNumbers(words) {
    let sum = 0;

    for (let i=0; i<words.length; i++){
        sum += words[i];
    }

    return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let num1 = 2;
let num2 = [];

console.log(sumNumbers(num1)); 
console.log(sumNumbers(num2)); 
console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNum) {
    if (arrNum.length === 0) {
        return 0;
    }
    return sumNumbers(arrNum) / arrNum.length;

}


// Iteration 5 | Find Elements

function doesWordExist(wordArray, searchWord) {
    if (wordArray.length === 0) {
        return null;
    }
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === searchWord) {
            return true;
        }
    }

    return false;
}

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];