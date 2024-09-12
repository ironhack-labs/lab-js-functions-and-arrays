// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else if (num1 === num2) {
        return num1;
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(setOfWords) {
    let longestWord = ""
    if (setOfWords.length === 0) {
        return 0;
    }

    setOfWords.forEach((word)=>{
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
    let result = 0

    num.forEach((number)=> {
        result += number
    })
    return result
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
    if (num.length === 0) {
        return 0
    } else {
    return (sumNumbers(num) / num.length) }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(setOfWords, wordToSearch) {
    let wordFound = false
    
    if (setOfWords.length === 0) {
        return null;
    }

    setOfWords.forEach(word => {
        if (word === wordToSearch){
            wordFound = true
        }
    });

    if (wordFound === true) {
        return true
    } else {
        return false
    }



}
