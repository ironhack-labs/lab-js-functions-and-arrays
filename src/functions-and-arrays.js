// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numb1, numb2) {
    return numb1 > numb2 ? numb1 : numb2;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length === 0){
        return null;
    }
    let longestWord = ``;
    words.forEach(element => {
        if(element.length > longestWord.length){
            longestWord = element;
       }
    });
    return longestWord;    
}

findLongestWord(words)

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    numbers.forEach(element =>{
        sum += element;
    });
    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if(numbers.length === 0){
        return 0
    }
    let sum = 0;
    numbers.forEach(element =>{
        sum += element;
    });
    return sum/numbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
   return words.length ===0 ? null : words.includes(word)
}
