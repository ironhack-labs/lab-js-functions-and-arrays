// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2){
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num1
    } 
}   
    // return Math.max(num1,num2)





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let biggestWord = ''
    let temp = 0
    if (arr.length === 0) {
        return null
    } 

    for (let i = 0; i < arr.length; i++){
       let letterNum = arr[i].length
       if (letterNum>temp){
        temp = letterNum
        biggest = arr[i]
       
       }
    }
  return biggest
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr1) {
    if (arr1.length === 0){
        return 0
    } else if (arr1.length === 1){
        return arr1[0]
    } else {
        let sumNum = 0
        for (let i=0; i<arr1.length; i++) {
            sumNum += arr1[i]  
        }
      return sumNum  
    }
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr2) {
    if (arr2.length === 0){
        return 0
    } 
    else {
        let sumNum1 = 0
        for (let i=0; i<arr2.length; i++){
            sumNum1 += arr2[i]
        }
        return sumNum1/arr2.length
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr3, toFind) {
    if (arr3.length === 0 ){
        return null
    } else {
        return arr3.includes(toFind)
    }
}
