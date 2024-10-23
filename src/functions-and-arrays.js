// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a , b) {
        if(a > b){
            return a
        }
        else if(a < b) {
            return b
        }
        else {
            return a = b 
        }
    }





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;
    let longestWord = words[0];

   for (let i = 0; i < words.length; i++){
    if (words[i].length > longestWord.length){
        longestWord= words[i];
    }
}    
   return longestWord;
}
 



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (i =0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}

   



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    for (i = 0; i < numbers2.length; i++){
        sum += numbers2[i]  
    }
    return sum
}
function averageNumbers(numbers2){
    if (numbers2.length === 0) return 0;
    return sumNumbers(numbers2)/ numbers2.length;
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, searchWord) {
 if (wordsArray.length === 0) return null;

 for (let i =0; i < wordsArray.length; i++){
    if (wordsArray[i] === searchWord){
        return true;
    }
 }
 return false;
}
