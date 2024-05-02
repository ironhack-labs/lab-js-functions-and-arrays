// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

    let max;

    num1 > num2 ?  max = num1 : max = num2;

    return max
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

    if(arr.length === 0) return null

    const sorted = arr.sort((a, b) => b.length - a.length)
    return sorted[0]
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    let sum = 0; 

    for(i=0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if(numbers.length === 0) return 0

    return sumNumbers(numbers) / numbers.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {

    if(array.length === 0) return null

    return array.includes(word) ? true : false 

}
