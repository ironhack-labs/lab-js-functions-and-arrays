// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num1 < num2) {
        return num2
    } else {
        return num2
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(longestWord) {

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (typeof numArr[i] === "number")
        sum += numArr[i]
    
    }
    return sum
}
 //console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numeArr) {
    return sumNumbers(numeArr) / numeArr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, word ) {

    if (wordsArr.length === 0)
    return null

    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i] === word) {
            return true;
            } /*else if (wordsArr[i] === word) {
            return true
             }*/
        
        } 
        return false

}
  


console.log(doesWordExist(words2, "machine"))