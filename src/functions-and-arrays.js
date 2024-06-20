// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2){
        return num1
    }else if ( num1 < num2){
        return num2
    }else{
        return num1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrLong) {
    if(arrLong.length === 0){return null}
let long= "";
 
    for(let i=0; i< arrLong.length;i++){
        let palabra = arrLong[i]
        if( palabra.length > long.length){
        long = arrLong[i]
        }
        
    }    
    return long
    }




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrSum) {
let total = 0
    for(let i=0; i< arrSum.length;i++){
        total += arrSum[i]        
    }
return total
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrDiv) {

    if(arrDiv.length === 0){return 0}

   let suma = sumNumbers(arrDiv)
   let divisor = arrDiv.length
  return suma/divisor
   }




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrB, palabra) {
    if(arrB.length === 0){return null}

    for(let i=0; i< arrB.length;i++){
        if (arrB[i] === palabra){
            return true
        }
    }
    return false
}
