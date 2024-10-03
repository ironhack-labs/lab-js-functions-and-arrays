// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(greaterNumber, smallerNumber) 
{ 
    if (greaterNumber > smallerNumber) {
    return greaterNumber;
}else if (smallerNumber > greaterNumber) {
    return smallerNumber;
}else { return greaterNumber;
}
}

console.log(maxOfTwoNumbers(5,19))
console.log(maxOfTwoNumbers(15,10))
console.log(maxOfTwoNumbers(5,5))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordCount) {
    if (wordCount.length === 0) {
        return null;
    } if (wordCount.length === 1) {
        return wordCount[0];
    } 
    let longestWord = wordCount[0];
    for (let i = 1; i < wordCount.length; i++) {
        if (wordCount[i].length > longestWord.length) {
            longestWord = wordCount[i];
        }
    }

return longestWord;
}

 console.log(findLongestWord(["pearl", "orchard", "crackpot"]));
 console.log(findLongestWord([]));
 console.log(findLongestWord(["pearl"]));
 console.log(findLongestWord(["mystery", "brother", "aviator"]));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.lenght === 1) {
        return 0;
    }
    if (numbers.length === 1) {
        return numbers[0];
    }
    let sum = 0;
    for (let i= 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
if (numbers.length === 0) {
    return 0;
} if (numbers.lenght === 1 ) {
    return numbers[0];
} 
let sum = 0;
for (let i = 0; i < numbers.lenght; i++) {
    sum += numbers[i];
}
return sum / numbers.length;
}
console.log(averageNumbers(numbers2));
console.log(averageNumbers([]));
console.log(averageNumbers([10]));
console.log(averageNumbers([5, 10, 15]));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordyWord, targetWord) {
    if (wordyWord.length === 0) {
        return null;
    }
    for (let i = 0; i < wordyWord.length; i++) {
        return true;
    }
    return false;
}
console.log(doesWordExist(words2, "machine"));
console.log(doesWordExist(words2, "unkown"));
console.log(doesWordExist([], "test"));
console.log(doesWordExist(words2, "truth"));
console.log(doesWordExist(words2, "matter"));
console.log(doesWordExist(words2, "example"));

