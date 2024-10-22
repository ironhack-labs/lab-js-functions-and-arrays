// Iteration 1 | Find the Maximum

let num1 = 3
let num2 = 4
function maxOfTwoNumbers(a,b) {

    if(a>b){
        return a
    } else if (a<b){
        return b
    } else {
        return a
    }
    
}



// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

    if (arr.length === 0) return null

    let longestWord = ""
    
    for(i=0; i<arr.length; i ++){
        if(arr[i].length>longestWord.length){
            longestWord = arr[i]
        } else if(arr[i].length === longestWord.length){
            longestWord = longestWord
        } 
    }
    return longestWord
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) 
{
    let totalNumber = 0 

    for(i = 0; i<arr.length; i++){
        totalNumber += arr[i]
    }
    return totalNumber
    
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {

    let totalNumber = 0 
    if (arr.length === 0) return 0

    for(i = 0; i<arr.length; i++){
        totalNumber += arr[i]
    }
    return totalNumber/arr.length
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, keyWord) {

    if (arr.length === 0) return null
    if (arr.includes(keyWord) ===  false) return false 
    for(i=0; i<arr.length; i++){
        if(arr[i] === keyWord){
            return true
        }
    } 
        
}
