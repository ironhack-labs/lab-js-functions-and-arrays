/////// Iteration 1 | Find the maximum /////////

function maxOfTwoNumbers(a = 1, b = 1) {
    if (a > b) {
        return a
    }
    else if (a < b) {
        return b
    }
    else {
        return a
    }
}



//////// Iteration 2 | Find the Longest Word /////////

const wordsArr = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let longestWord = arr[0];

    for (let i = 0; i < arr.length; i++) {
       if (longestWord.length < arr[i].length){
        longestWord = arr[i]
       }
    }
    return longestWord;
}


const result = findLongestWord(wordsArr)
console.log(result)


//////// Iteration 3 | Sum Numbers ////////

const numbersArr = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;

    arr.forEach(function(a) {
        sum += a;
    });
    return sum
}


////////// Iteration 4 | Numbers Average ///////////

const numbersArr2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0) {
        return 0
    }
    let average = 0;

    const total = sumNumbers(arr)
    average += total / arr.length

    return average
}


////////// Iteration 5 | Find Elements ////////////

const wordsArr2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null
    }

    for (let i = 0; i < arr.length; i++) {
        if (word.localeCompare(arr[i]) === 0) {
            return true;
        }
    }
    if (compare != 0) {
        return false
    }
}