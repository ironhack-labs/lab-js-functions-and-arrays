// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return a;
    }
}

// function howManyTime(arr, search) {
//     let count = 0;
//     for (word of arr) {
//         if (word === search) {
//             count++;
//         }
//     } return count
// }

// function howManyTime(arr, word){
//     return arr.filter(search=>search === word).length

// }

// console.log(howManyTime(["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"], "pearl"))

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = '';
    if (arr[0] === undefined) {
        return null
    }
    for (word of arr) {
        if (word.length <= longestWord.length) {
            continue
        }
        longestWord = word
    } return longestWord
}

// console.log(findLongestWord(["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"]))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {
    let sum = 0;
    for (number of arrNumbers) {
        sum += number
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNumbers) {
    let sum = 0;
    let average;
    if (arrNumbers[0] === undefined) {
        return 0
    }
    const anonymous = function (element) {
        sum += element
    }
    arrNumbers.forEach(anonymous)
    average = sum / arrNumbers.length
    return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

// function doesWordExist(arrWords, search) {
//     if (!arrWords[0]) {
//         return null
//     }
//     return arrWords.includes(search);
// }


function doesWordExist(arrWords, search) {
    if (!arrWords[0]) {
        return null
    }
    for (let i = 0; i < arrWords.length; i++) {
        const word = arrWords[i]
        if (word === search) {
            return true
        }
    } return false
}