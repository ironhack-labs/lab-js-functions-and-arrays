// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a , b) {
    let max = 0
    return (a > b)? (max = a) : max = b;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let maxLength = 0;
    let index = 0;
    let other = []
    if(words.length === 0){
        return 0;
    }
    for(let i=0;i< words.length;i++){
        let myLength = words[i].length
        if(myLength > maxLength){
            maxLength = myLength;
            index = i;
            other.push(words[i])
        }
    }
    return other.pop();
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for(let i=0;i< numbers.length;i++){
        sum += numbers[i]
    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    for(let i=0;i< numbers2.length;i++){
        sum += numbers2[i];
    }
    if(sum === 0){
        return 0;
    }
    return sum/numbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    if(words2.length === 0){
        return null;
    }
    return words2.includes(word)
}
