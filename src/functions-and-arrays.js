// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) 
    return num1
    else if (num1 < num2)
    return num2
    else return num1 || num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(array) {
    if (array.length === 0){
        return 0
    }
    let longest = ''
    array.forEach((e) => { 
        if (e.length > longest.length){
            longest = e
        }
    })
    return longest
}
    const iteration2 = findLongestWord(words)
    console.log(iteration2)



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numArray) {
    if (numArray.length === 0){
        return 0
    }
    let total = 0
    numArray.forEach((numE,) =>{
        total += numE
    })
    return total
}
const iteration3 = sumNumbers(numbers)
console.log(iteration3)



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numArray2) {
    if (numArray2.length === 0){
    return 0
}   
    let sumTotal = 0
    let average = 0
    numArray2.forEach((numAverage,) =>{
        sumTotal += numAverage
    })
        average = sumTotal / numArray2.length
    return average
}
const iteration4 = averageNumbers(numbers2)
console.log(iteration4)

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let word = "machine"
function doesWordExist(wordsArray) {
    if (wordsArray.length === 0){
        return null
    }
    wordsArray.forEach((eWord) => {
       eWord === word
    })
}
const iteration5 = doesWordExist(words2, word)
console.log(iteration5)