// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numero1, numero2) {
if (numero1 > numero2){
    return numero1
} else if (numero1 < numero2){
    return numero2
}else {
    return numero1
}

}

maxOfTwoNumbers(3, 4)


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    let longestWord = " "
    if (arrayOfWords.length === 0){
        return 0
    }else if (arrayOfWords.length === 1){
        return arrayOfWords[0]
    }
   
    for (let i=0; i < arrayOfWords.length; i++);
    if (arrayOfWords[i].length > longestWord.length){
      return arrayOfWords[i]
    }
}

findLongestWord(words)


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
let result = 0
    for (let i = 0; i < arrayOfNumbers.length; i++)
    result = result + arrayOfNumbers[i]
return result
}

sumNumbers(numbers)


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers2) {
    if (arrayOfNumbers2.length === 0){
        return 0
    }
    let result = 0
        for (let i = 0; i < arrayOfNumbers2.length; i++)
        result = result + arrayOfNumbers2[i]
    return result / arrayOfNumbers2.length
    }
    
    averageNumbers(numbers2)




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let word3 = []
function doesWordExist (arrayOfWords2, wordToSearch) {
    //let word = "machine"
    if (arrayOfWords2.length === 0){
        return null
    }else if (wordToSearch.length === 0){
        return null
    }
    
    for (let i=0; i < arrayOfWords2.length; i++)
    if (arrayOfWords2[i].includes(wordToSearch) === true){
        return true
    }
    else if ((arrayOfWords2[i].includes(wordToSearch) === true)){
       return false
    }

}
doesWordExist(words2,word3)