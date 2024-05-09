// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(maxOfTwoNumbers(10,20));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words){
    if (words.length == 0){
        return null;
    }
    let longestWord = " ";
    for (let i = 0; i < words.length; i++){
        if (longestWord.length < words[i].length){
            longestWord = words[i]
        }
    }
    return longestWord

}
console.log(findLongestWord(["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"])); 
console.log(findLongestWord([]));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    let sumTotal = 0;
    for (let i =0; i<numbers.length; i++){
        sumTotal += numbers[i];
    }
    return sumTotal;
}

console.log(sumNumbers([6, 12, 1, 18, 13, 16, 2, 1, 8, 10]));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length == 0){
        return 0;
    } 
    let sum = sumNumbers(numbers); 
    return sum / numbers.length;  
}
console.log(averageNumbers(numbers2));
console.log(averageNumbers([]));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWord, searchWord){
    if (arrayWord.length == 0){
        return null;
    }
    for (let i = 0; i < words2.length; i++ ){
        if (arrayWord[i] === searchWord){
            return true
        } 
    }
    return false;
}
console.log(doesWordExist(words2, "machine")); 
