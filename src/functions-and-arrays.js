
// Iteration 1,Find the Maximum

function maxOfTwoNumbers(n,x) {
    if(n>x){
        return n;
    }else {
        return x;
    }
}
console.log(maxOfTwoNumbers(5,7))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length === 0) {
        return null;
    }
    let longestWord = "";
    for(i = 0; i<words.length; i++){
        if(words[i].length >longestWord.length){
            longestWord = words[i];
        }

    }
    return longestWord
}

console.log(findLongestWord[words]);




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if(numbers === 0){
        return null;
    }
    let sum = 0;
    for(i = 0; i<numbers.length; i++){
        sum += numbers[i]
    }
    return sum;
}
console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if(numbers2.length === 0){
        return 0;
    }
    const sum = sumNumbers(numbers2)
    const average = sum / numbers2.length;
    return average
}
console.log(averageNumbers([5,4,3,4]));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordsToSearch) {
    if(wordsArray.length === 0){
        return null;
    }
    for(i = 0; i<wordsArray.length; i++){
        if(wordsArray[i] === wordsToSearch){
            return true;
        }

    }
    return false;

}
