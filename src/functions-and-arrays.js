// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 <= num2){
        return num2
    }else if(num1 > num2){
        return num1
    }else{
        return "not a valid input"
    }
}

console.log(maxOfTwoNumbers(4,5))
// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if (arr.length=== 0){return null}
    let result = ""
    for (let i = 0;i< arr.length;i++){
        if(result.length < arr[i].length){
            result = arr[i]
        }else if( result.length === arr[i].length){
            result = result
        }
    }
    return result
}

console.log(findLongestWord(words))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numArr) {
    let sum = 0
    for (let j = 0; j < numArr.length ;j++){
    sum += numArr[j]
    }
    return sum
    }
    console.log(sumNumbers(numbers))

// function sumNumbers(numArr) {
//     for (let j = 1; j < numArr.length;j++){
//       numArr[0] 
//     }
//     return numArr
// }
// console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avArr) {
    if (avArr.length === 0){return 0}
    const sumInt = 0 + sumNumbers(avArr)
    const total = sumInt/avArr.length
    return total
}
console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(finalArr,word) {
    if (finalArr.length=== 0){return null}
    for (let x = 0; x < finalArr.length ;x++){
        if(finalArr[x]=== word){
            return true
        }
    }
    return false
}
console.log(doesWordExist(words2,"eating"))
