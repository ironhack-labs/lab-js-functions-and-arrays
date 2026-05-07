// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numA, numB) {

    if (numA > numB) {
        return numA
    }
    else if (numB > numA) {
        return numB
    }

    return numA
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(listWords) {
    let longWord = ""
    let longLength = 0

    if (listWords.length === 0) {
        return null
    }
    
    listWords.forEach(function (elem, idx, arr) {
        if (elem.length > longLength) {
        longLength = elem.length
        longWord = elem
        }
    })

    return longWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(listNums) {

    let totalSum = 0;

    listNums.forEach( (element) => totalSum += element)

    return totalSum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(listNums2) {
    const totalSum = sumNumbers(listNums2);
    
    let average = 0;

    if (listNums2.length === 0) {
        average = 0
    } 
    else if (listNums2.length > 0) {
        average = totalSum/listNums2.length        
    }
            
    return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(listWords2, searchWord) {

    if (listWords2.length === 0) {
        return null
    }

    let wasFound = false

    for (let i=0; i < listWords2.length; i++) {
        if (listWords2[i] === searchWord) {
            return true
        }
    }

    return false
}
