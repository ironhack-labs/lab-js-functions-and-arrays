// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else if (num1 = num2) {
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    let longName = ""
    if (arrayWords.length === 0) {
        return null
    }
    for (let i = 0; i < arrayWords.length; i++) {
        if (longName.length < arrayWords[i].length) {
            longName = arrayWords[i]
        }
    }
    return longName
}
console.log(findLongestWord(words))

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNum) {
    let sumaTotal = 0
    for (let i = 0; i < arrayNum.length; i++) {
        sumaTotal += arrayNum[i]
    }
    return sumaTotal
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNum) {

    let sumaTotal = 0
    let resultadoFinal = 0
    for (let i = 0; i < arrayNum.length; i++) {
        sumaTotal += arrayNum[i]
        resultadoFinal = sumaTotal / arrayNum.length
    }
    return resultadoFinal

}
console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWord, word) {
    if (arrayWord.length === 0) {
        return null
    } else if (arrayWord.includes(word)) {
        return true
    } else {
        return false
    }

}