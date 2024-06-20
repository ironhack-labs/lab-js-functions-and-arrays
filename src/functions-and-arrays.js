// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1
    } else if (num1 <= num2) {
        return num2
    }
}
console.log(maxOfTwoNumbers(5, 10))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(longest) {
    let animal = "";
    if (longest.length === 0){
        return null
    }
    
    for (let i = 0; i < longest.length; i++){
       if (longest[i].length > animal.length ){
        animal = longest[i]
    } 
}
return animal
}
console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sum) {
    let total = 0;
    for (let i=0; i < sum.length; i++){
        total += sum[i]
    }
    return total
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers1) {
    if (numbers1.length === 0){
        return 0
       }

    return sumNumbers(numbers1) / (numbers1.length)
   
}
console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(PALABRAS, palabra) {
    if (PALABRAS.length === 0){
        return null
    }

    for (let i = 0; i < PALABRAS.length; i++){
        if (PALABRAS[i].includes(palabra)){
            return true
        } 

    }
    
     return false
    
}
