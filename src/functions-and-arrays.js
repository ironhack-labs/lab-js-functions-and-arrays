// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,  num2) {
    if (num1>num2) {
        return(num1)
    }
    else if (num2>num1) {
        return(num2)
    }
    else {
        return(num1||num2)
    }

}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArr) {
    if (wordsArr.length === 0) {
        return null
    }
    let palabraLarga = wordsArr[0]

        for (let i =0; i < wordsArr.length; i++) {
            if (wordsArr[i].length > palabraLarga.length) {
                palabraLarga = wordsArr[i]
            }
        }
    return(palabraLarga)
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
    let count = 0
    for (let i =0; i < numbersArr.length; i++) {
        count += numbersArr [i]
        
    }
    return count
}

console.log(sumNumbers(numbers))

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numerosArr) {
    let suma2= 0
    for (let i=0; i<numerosArr.length; i++) {
        suma2+=numerosArr [i]
    }
    return(suma2)
}

console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2Arr, wordToSearch) {
    let wordINArr = false
    if (words2Arr === 0) {
        return null
    }
    for (let i=0; i<words2Arr.length; i++) {
        if (words2Arr[i].includes(wordToSearch)) {
            wordINArr = true
        }
    }
    return wordINArr

}

console.log(doesWordExist(words2, "vdfgd"))