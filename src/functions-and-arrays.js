// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numbers1,numbers2) {
    if ( numbers1 > numbers2){
        return numbers1
    }else if (numbers1 < numbers2) {
        return numbers2
    } else { 
        return [numbers1 = numbers2]
    }
}
console.log(maxOfTwoNumbers(9, 13)); 
console.log(maxOfTwoNumbers(9, 7));  
console.log(maxOfTwoNumbers(9, 9));  


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(wordsArray) {
    let longestWord = '';
    for (let word of wordsArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord(words));






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numberArray) {
    let total = 0; 
    for (let number of numberArray) {
        total += number; 
    }
    return total; 
}

console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArray) {
    let total = sumNumbers(numberArray); 
    let average = total / numberArray.length; 
    return average;
}
console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, word) {
    if (wordsArray.length === 0) {
        return null; 
    }for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === word) {
            return true;
        }
    }
    return false;
}

console.log(doesWordExist(words2, "machine")); 
console.log(doesWordExist(words2, "phone"));   
console.log(doesWordExist([]," ")); 

