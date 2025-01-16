// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    return Math.max(a, b)
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longestWord = "";
    if (array.length == 0) { return null };

    array.forEach(function (element) {
        if (element.length > longestWord.length) {
            longestWord = element} }
    )
    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberList) {
    let sum = 0;

    for(let i = 0; i < numberList.length; i++) {
        sum += numberList[i]
    }
    return sum
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberList2) {
    if (numberList2.length == 0) {
        return 0
    }
    let nbAvg = 0
    for(let i = 0; i < numberList2.length; i++){
        nbAvg += numberList2[i]
    }
    return nbAvg / numberList2.length
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(elements, word) {
    let finalValue = false
    
    if (elements.length == 0) {return null}
    
    for(let i = 0; i < elements.length; i++){
        if (elements[i] == word){
            finalValue = true;
            break
        }
    }
    return finalValue
}
