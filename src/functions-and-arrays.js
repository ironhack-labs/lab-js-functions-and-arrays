// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if(num1 > num2){
        return num1
    }else if (num1 < num2){
        return num2
    } else {
        return num1,num2
    }
}

console.log(maxOfTwoNumbers(2,3))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(Arr) {
    if (Arr.length === 0){
        return null
    }else{
    let word = Arr[0]
    for (const val of Arr){
        if (val.length > word.length){
            word = val
        }
    }
    return word
}
}

console.log(findLongestWord(words))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(Arr) {
    let sum = 0
    for (const val of Arr){
        sum +=val
    }
    return sum
}

console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(Arr) {
    if (Arr.length === 0){
        return 0
    }
    let sum = 0
    for (const val of Arr){
        sum +=val
    }
    return sum/Arr.length
}
console.log(averageNumbers(numbers2))




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(Arr,tWord){
   if (Arr.length === 0){
    return null
   }
    for (const val of Arr){
        if (val === tWord){
            return true
        } 
        }
    
        return false
    
    
   }
  
   console.log(doesWordExist(numbers,'hamid'))

