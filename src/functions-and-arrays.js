// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num1
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    
    if (array.length === 0 || array === undefined){
        return null
    } else {

        let longestWord = ""
        
        for (let i = 0; i < array.length; i++){
            
            if (array[i].length > longestWord.length) {
                longestWord = array[i]
            }
        }  
        return longestWord
    }

}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let totalSum = 0
    for(let i = 0; i < array.length; i++){
        totalSum += array[i]
    }
    return totalSum
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    let numbersAverage
    if (array.length === 0 || array === undefined){
        return numbersAverage = 0    
    } else {
        numbersAverage = sumNumbers(array) / array.length
    return numbersAverage
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
    let verifyWord
    if(array.length === 0 || array === undefined){
        return null
    } else {
    for (let i = 0; i < array.length;i++){
        
        if (array[i] === word){
            verifyWord = true
            break
        } else {
            verifyWord = false
        }

    }
    }
    return verifyWord
}

