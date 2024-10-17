// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1
    }
    else if (value1 < value2) {
        return value2
    }
    else {
        return value1, value2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    let longerWord = ""
    if (words.length === 0) {
        return null
    }
    for (let i = 0; i < words.length; i++) {
        if (longerWord.length < words[i].length) {
            longerWord = words[i]

        }

    }
    return longerWord

}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sumNum = 0
    for (let i = 0; i < numbers.length; i++) {
        sumNum += numbers[i]
    }
    return sumNum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    let sumNum2 = 0;
    if (numbers2.length === 0) {
        return sumNum2
    }
    for (let i = 0; i < numbers2.length; i++) {
        sumNum2 += numbers2[i]
    }
    return sumNum2 / numbers2.length

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {
    if (words2.length === 0) {
        return null
    }
    for (let i = 0; i < words2.length; i++) {
        if (words2[i] === wordToSearch) {
            return true
        }
    }
    return false
}
