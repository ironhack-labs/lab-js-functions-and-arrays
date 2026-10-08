// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
if(num1 > num2){
    return num1
}
else if (num2 > num1){
    return num2
}
else {
    return num1
}

}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if( array.length === 0){
        return null
    }
   let longestWord = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
           longestWord = array[i];
}
    }
    return longestWord;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    
    if (array === 0){
        return 0
    }
    if(array.length === 1){
        return array[0]
    }

    let total = 0;
    for (let index = 0; index < array.length; index++) {
        total += array[index]
    }
    
return total 
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
     if (array.length === 0){
        return 0
    }

    let total = 0;
    for (let index = 0; index < array.length; index++) {
        total += array[index]
    }
    let average = total / array.length
    return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];



function doesWordExist(array,word) {

     if (array.length === 0){
        return null
    }
    else if (array.includes(word)){


        return true 
    }
    else {
        return false
    }
}
