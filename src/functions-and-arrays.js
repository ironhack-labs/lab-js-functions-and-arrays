// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrOfWords) {
    let longestWord = "";

    if (arrOfWords.length === 0) {
        longestWord = null;
    }

    for (let word of arrOfWords) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrToSum) {
    let sumTotal = 0;
    arrToSum.forEach((number) => {
        sumTotal += number;
    });
    return sumTotal;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrToAvg) {
    let avgTotal;
    if (arrToAvg.length === 0) {
        avgTotal = 0;
    } else {
        avgTotal = sumNumbers(arrToAvg)/arrToAvg.length
    }
    return avgTotal;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.length === 0) {
        return null
    } else {
        for (let word of arrayOfWords ) {
            if (wordToSearch === word) {
                return true;
            }
        }
        return false;
    }
}


