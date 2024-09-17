// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2){
        return number1
    }
    else if (number1 < number2){
        return number2
    }
    else{
        return number1
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord =""
    if (words.length === 0){
        return 0
    }
    if (words.length === 1){
        return words[0];
    }
    words.forEach((word)=>{
        if(word.length > longestWord.length){
            longestWord = word;
        }
    })
    return longestWord
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
    let sum = 0
    for (let i = 0; i<nums.length; i++){
        sum+= nums[i]
    }

    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
    if (nums.length === 0){
        return 0
    }
    return sumNumbers(nums)/nums.length;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.length === 0 || wordToSearch.length === 0){
        return null;
    }
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i] === wordToSearch) {
            return true;
        }
    }

    return false;
}