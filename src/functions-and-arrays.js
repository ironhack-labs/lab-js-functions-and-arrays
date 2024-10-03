// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    
    if (num1 > num2) {
        return num1
    } else if  
        (num1 < num2){
        return num2
        } else {
            return num1, num2
        }
    
    }

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = ""
    if (!arr.length) {
        longestWord = null
    }
    for (let i=0; i<arr.length; i++) {
         if (arr[i].length > longestWord.length) { //usamos el bucle, para iterar string por string dentro del array
             longestWord = arr[i]                // llenamos la variable longestWord con la palabra mas larga que hayamos encontrado en ese momento  
        } 
        }
    
        return longestWord;
    }
        
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let result = 0
    for (let i = 0; i<arr.length; i++) {
        result += arr[i] 
    }
    return result
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let totalResult = 0
    for (let i = 0; i < arr.length; i++ ) {
        totalResult += arr[i]
}   if (!arr.length){
    return 0
}
    return totalResult / arr.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr,word) {

    let result = false
    if (!arr.length) {
        result = null 
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === word) {
            result = true
        }  
    }
        return result
    }

