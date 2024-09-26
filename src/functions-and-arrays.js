// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    return Math.max(a, b);
}

console.log(maxOfTwoNumbers(3, 5)); 
console.log(maxOfTwoNumbers(7, 2));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
return longestWord;

}

const longestWord = findLongestWord(words);
console.log(longestWord);



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
 
const totalSum = sumNumbers(numbers);
console.log(totalSum);



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

// reusing function sumNumbers from Interation 3
function averageNumbers(numbers) {
   const sum = sumNumbers(numbers);
   const average = sum / numbers.length;

   return average;
}

const averageResult = averageNumbers(numbers2)
console.log(averageResult);


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,searchWord) {
    if (!words2 || words2.length === 0) {
        return null;
    } 
    return words2.includes(searchWord);
}

console.log(doesWordExist(words2, "truth")); // will be true
