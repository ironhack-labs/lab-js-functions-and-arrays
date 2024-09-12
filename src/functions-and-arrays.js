// Iteration 1 | Find the Maximum
function maxOfTwoNumbers() {}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord() {
    if (words.length === 0) {
        return "no word";
    }
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord());



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(sumNumbers());




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
    
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordsToSearch) {
    if (arrayOfWords.length === 0){
        return null;
    }
    return arrayOfWords.includes(wordsToSearch);
}
const wordToSearch = "matter";
const exists = doesWordExist(words2, wordToSearch);

if (exists === null) {
    console.log("The array is empty.");
} else {
    console.log(`The word "${wordToSearch}" ${exists ? "exists" : "does not exist"} in the array.`);
}
