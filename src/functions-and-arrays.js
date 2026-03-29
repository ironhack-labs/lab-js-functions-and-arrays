// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 === num2) {
        return num1, num2
    } 

    if (num1 > num2) {
        return num1
    }

    return num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let result = ""
    let count = 0

    if (arr.length === 0) {
        return null
    }

    for (let i = 0; i < arr.length ; i++) {
        let word = arr[i]
        
        if ( word.length > count) {
            count = word.length
            result = word
        }

    }

    return result
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNums) {

    let resultNum = 0

    if (arrNums.length === 0) {
        return resultNum
    }

    for (let i = 0; i < arrNums.length ; i++) {    
        resultNum += arrNums[i]
    }

    return resultNum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNums) {

    let averageResult = sumNumbers(arrNums) / arrNums.length
    
    if (arrNums.length === 0 ) {
        averageResult = 0
    }

    return averageResult
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, searchWord) {

    const wordKey = searchWord
    let result = false

    if (arr.length === 0 ) {
     result = null
    }

    if (arr.includes(wordKey)) {
        result = true
    }

    return result

}
