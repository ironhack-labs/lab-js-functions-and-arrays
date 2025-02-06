// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1
    }
    else if(num2 > num1){
        return num2
    }
    else{
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

 function findLongestWord (wordsArr) {
    let longestWord = ""
    if(wordsArr.length === 0){
        return null
    }
    for(let i = 0; i < wordsArr.length; i++){
        if(wordsArr[i].length > longestWord.length){
           longestWord = wordsArr[i]
        }
    }

    return longestWord
 }

console.log(findLongestWord(words))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
    let sumNum = 0
for(let i = 0; i < num.length; i++){
    sumNum += num[i]
}
return sumNum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num2) {
if(num2.length === 0){
return 0
}

 let numSum = 0
for(let i = 0; i < num2.length; i++){
    numSum += num2[i]
}
return numSum / num2.length
  

}
console.log(averageNumbers(numbers2))




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr2, word) {
    if(wordsArr2.length === 0){
        return null
    }
    
    for(let i =0;i < wordsArr2.length; i++){
        if(wordsArr2[i] === word){
            return true

        }
        
            

}
return false
}
