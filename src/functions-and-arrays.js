// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    return Math.max(a, b)
}
console.log(Math.max(10, 5))






// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0)  {
        return null
    }

    let longer = words[0];
    for (let i=0; i <words.length; i++){
        if (words[i].length > longer.length){
            longer=words[i];
        }
    }
    return longer

}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let numb = 0;

    for (let number of numbers) {
        numb += number;
    }
    return numb;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (!numbers2 ) {
        return 0;
    } else {
        return sumNumbers(numbers2) / numbers2.length;
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (words.length === 0) return null
const findWord = words.some(iterateWord => iterateWord === word)
if (!findWord) return false

return findWord
}
