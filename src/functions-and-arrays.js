// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    if (a>b) {
    return a;
    }
    else if (a<b) {
        return b;
    }
    else {
        return a;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

    if (arr.length === 0) {
        return null
    }

    let longestWord = arr[0]

    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {

    if (arrNumbers.length === 0) {
        return 0;
    }

    let sum = 0

    for (let i=0 ; i<arrNumbers.length ; i++) {
        sum += arrNumbers[i]
    }

    return sum

}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNumbers2) {

    if (arrNumbers2.length === 0) {
        return 0;
    }

    let sum = 0

    for (let j =0; j<arrNumbers2.length ; j++) {
        sum += arrNumbers2[j]
    }

    return sum/arrNumbers2.length
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords,arrSearch) {

    if (arrWords.length === 0 || arrSearch.length === 0) {
        return null;
    }

    for (let k= 0 ; k<arrWords.length ; k++) {
        if (arrWords[k] === arrSearch) {
            return true;
        }
    }

    return false;

}
