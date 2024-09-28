// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else if ( n2 > n1) {
        return n2;
    } else {
        return n1;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    if (arrayWords.length === 0) {
        return null;
    }
    let result = '';
    for(let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i].length > result.length) {
            result = arrayWords[i];
        }
    }
    return result;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
    let result = 0;
    for(let i = 0; i < arrayNumbers.length; i++) {
        result += arrayNumbers[i];
    }
    return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNumbers2) {
    if (arrayNumbers2.length === 0) {
        return 0;
    }
    return sumNumbers(arrayNumbers2)/arrayNumbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWords2, wordToSearch) {
    if (arrayWords2.length === 0) {
        return null
    }
    for (let i = 0; i < arrayWords2.length; i++) {
        if (wordToSearch === arrayWords2[i]) {
            return true;
        }
    }
    return false;
}
