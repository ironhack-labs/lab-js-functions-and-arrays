// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(a, b) {
    if(a>b){
        return (a)
        console.log(a);
    }
    else if (b>a){
        return (b)
        console.log(b);
    }
    else if (a=b){
        return (a, b)
        console.log(`a et b sont égaux`);
    }
}
maxOfTwoNumbers(11,10);

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length === 0){
        return null
    }
    let longestWord = words[0];
    for (const word of  words){
        if (word.length > longestWord.length){
            longestWord = word;

        }
    }
    return longestWord
}
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (const a of numbers){
        sum += a;
    }
    return sum

}
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    for (const a of numbers2){
        sum += a;
    }
    if (sum === 0){
        return 0
    } else{
        return sum/numbers2.length
    }
}
// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const searchWord = "truth"

function doesWordExist(words2, searchWord ) {
    if (words2.length === 0){
        return null;
    }
    for (const words of words2){
        if(words === searchWord){
            return true;
        }
    }
    return false;
}
