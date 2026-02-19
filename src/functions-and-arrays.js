// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if(arr.length === 0){
        return null
    }

    let longest = '';

    arr.forEach(element => {
        if(element.length > longest.length){
            longest = element
        }
    });

    return longest
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr2) {
    let sum = 0;
    arr2.forEach(element => {
        sum += element
    })

    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr3) {
    if(arr3.length === 0) return 0

    let sum = 0;
    arr3.forEach(element => {
        sum += element
    })

    return sum/arr3.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr4, word) {
    if(arr4.length === 0) return null
    return arr4.includes(word) 
}
