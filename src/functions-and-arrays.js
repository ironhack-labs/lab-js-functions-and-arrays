// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(first,second) {
    return first > second ? first : second;
}
console.log(maxOfTwoNumbers(2,5));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    words.forEach(word =>{
        if(word.length > longestWord.length){
            longestWord = word;
        }
    });
    return longestWord;
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    return numbers.reduce((total, current) =>{
        return total + current;
    },0);
}
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  return sumNumbers(numbers2) / numbers2.length;
 
}
console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];


function doesWordExist(words2,target){
    return words2.length === 0 ? null : words2.includes(target);
}

console.log(doesWordExist(words2,"machine"));
console.log(doesWordExist(words2,"pizza"));
console.log(doesWordExist([],"machine"));
