// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        let maxNum=num1
        return maxNum;
    } else if (num1 < num2) {
        let maxNum=num2
        return maxNum;
    } else {
        let maxNum = num1 || num2;
        return maxNum;
    }
}





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length===0){
        return 0; // if the array is empty, sould return a 0
    }
    let longestWord= words[0]; // initiate the counter with the first word in the array

    for (let i=1; i<words.length; i++){
        let inProgress=words[i]; // make counter compare the actual word with the next

        if (inProgress.length>longestWord.length){ 
            longestWord = inProgress // changes the variable to the longest word
        }
    }
    return longestWord // return the longest
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    if (numbers.length===0){ // should return 0 if the array is empty
        return 0;
    }

    let countNumber= 0;

    for (let i=0; i<numbers.length; i++){ // add every number in the array to the counter
        let numberToAdd= numbers[i];
        countNumber += numberToAdd;
    }

    return countNumber; // return the total
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length===0){ // should return 0 if the array is empty
        return 0;
    }

    let average= sumNumbers(numbers2)/numbers2.length; // used the previous function
    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let wordToSearch= '';

function doesWordExist(words2, wordToSearch) {
    
    if (words2.length===0){ // should return 0 if the array is empty
        return null;
    } else if (words2.includes(wordToSearch)) {
        return true; // should return true if the word to search is in the array
    } else {
        return false; // should return false if not
    }


}
