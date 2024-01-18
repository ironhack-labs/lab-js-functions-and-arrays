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