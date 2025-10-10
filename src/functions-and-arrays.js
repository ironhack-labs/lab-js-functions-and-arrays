// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
if(a > b) {
    return a
} else if (b > a) {
    return b
} else {
    return a, b
}

}

console.log(maxOfTwoNumbers(3,99))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodileeeee", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longest = ""
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longest.length){
            longest = array[i]
        }
    }

    if(array.length === 0){
        return null
    }
    
    return longest
}

console.log(findLongestWord(words))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sumNumbers(numbers))




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    if(arr.length === 0){
        return 0
    }
    return sum / arr.length
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr, word) {
 if(wordArr.includes(word)){
    return true
 } else if (wordArr.length === 0) {
    return null
 } else {
    return false
 }
}
