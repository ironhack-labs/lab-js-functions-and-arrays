// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
console.log(maxOfTwoNumbers(3,6))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(arr) {
    let longestWord = ""
    for (let i = 0; i < arr.length; i++){
        if (longestWord.length < arr[i].length) {
            longestWord = arr[i]
        }
    }
return longestWord

}

console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let total = 0;
        for (let i = 0; i < arr.length; i++){
            total += arr[i]
        }
        return total
}
let result 
result = sumNumbers(numbers)
console.log(result) 




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let total2 = 0;
        for (let i = 0; i < arr.length; i++){
            total2 += arr[i]
        }
        return total2
}
const average = averageNumbers(numbers2) / numbers2.length
console.log(average) 


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordToSearch) {
    let word = ""
    for (let i = 0; i < arr.length; i++){
     if (word === arr[i])
        return true
    } return false 
    
}
console.log(doesWordExist("machine"))