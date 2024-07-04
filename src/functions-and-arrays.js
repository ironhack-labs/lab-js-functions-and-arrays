// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    //console.log(Math.max(num1, num2))
    return Math.max(num1, num2)


}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord() { }




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
    let result = 0

    numbers.forEach(element => {
        result += element
    });

    return result
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let i = 0;
    let sum = 0;
    let result = 0;

    arr.forEach(element => {
        sum += element

    });
    if (arr.length === 0) {
        return 0
    }

    i = arr.length

    result = sum / i;
    return result



}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, findWord) {
    let result = ""
    arr.forEach(function (wor) {

        if (wor === findWord) {
            result = true
        }
        else
            result = false
    });

    return result

}













