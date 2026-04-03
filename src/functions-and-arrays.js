// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1>num2){
        return num1
    } else if (num1<num2){
        return num2
    } else {
        return num1
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(words) {
    if (words.length === 0){
        return null
    } else if (words.length === 1){
        return words[0]
    } else {
        let longestWord = words[0]
        for (let i=0; i<words.length;i++){
         if (words[i].length>longestWord.length){
                longestWord = words[i]
            }
        }
        return longestWord
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let finalSum = 0
    for (let i=0;i<numbers.length;i++){
        finalSum+=numbers[i]
    }
    return finalSum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0
    } else {
    let finalSum2 = 0
    for (let j=0;j<numbers2.length;j++){
        finalSum2+=numbers2[j]
    }
    return finalSum2/numbers2.length
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const specificWord = "machine"
function doesWordExist(words2, specificWord) {
    if (words2.length === 0){
        return null
    } else {
    for (let k=0;k<words2.length;k++){
        if(words2[k] === specificWord){
            return true
        }
    } return false
    }
}
