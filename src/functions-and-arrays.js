// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    }

    else {
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if (array.length === 0) {
        return null
    }

}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    if (nums.length === 0) {
        return 0
    }

    return nums.reduce((sum, num) => sum + num, 0)
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
    if (nums.length === 0) {
        return 0
    }

    const sumNumbers = nums.reduce((sum, num) => sum + num, 0)
    const average = (sumNumbers / nums.length)
    return average

}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordToSearch) {
    if (words2.length === 0) {
        return null
    }
    else if (words2.includes(wordToSearch)) {
        return true
    }
    else {
        return false
    }
}
