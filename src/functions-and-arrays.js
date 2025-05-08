// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1;
    } else {
        return num2;

    }
    }

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longestWord = ""; 
    
    if (array.length === 0) {
        return null;
    }

    array.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word; 
    
        }
    
    }); 

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let total = 0;

    array.forEach((number) => {
        total += number;
    });

    return total;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(itens) {
        let sum = sumNumbers(itens);
        if (itens.length === 0){
            return 0}
        return sum / itens.length
        }

//   
// 




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
    if (array.length === 0) {
        return null
    }
    for (let i=0; i < array.length; i++){
        if (array[i] === word) {
            return true 
        }
    }
    return false 
}
