// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length === 0) {
        return null
    }
    if (arr.indexOf === 1) {
        return arr
    }
    let longest = 0
    arr.forEach((word) => {
        word.length > longest
        longest = word.length
    })
    return longest
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbe) {
    if (numbe.length === 0) {
        return 0
    }

    if (numbe.length === 1) {
        return numbe[0]
    }

    let sum = 0
    numbe.forEach((num) => { sum += num })
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbe) {
    if (numbe.length === 0) {

        return 0
    }

    const average = sumNumbers(numbe) / numbe.length

    return average


}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {

        return null
    }
    if (arr.includes(word)) {
        return true
    } else {
        return false
    }
}
