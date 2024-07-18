// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {

    if (a < b) {
        return b;
    } else if (a > b) {
        return a;
    } else {
        return a;
    }

}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

const emptyArray = [];

function findLongestWord(words) {
    const longestWord = "";
    for (let i = 0; i < words.length; i++) {

      if (words[i].length > longestWord.length) {

        return words[i];
      }

    } 

    return longestWord;

}

findLongestWord("mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot");
findLongestWord("");


   /* it("should return the longest word when called with an array of words", () => {

    words.forEach(findLongestWord); 

    const longestWord = "";

        if (words[i].length > longestWord.length) {
            longestWord.push(words[i]);
            return longestWord;
        }
findLongestWord();

    } */


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

/* const sum = [];
numbers.forEach(sumNumbers) {
    sum.push(numbers[i]);
}; */

/* let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
} */

}

sumNumbers(6, 12, 1, 18, 13, 16, 2, 1, 8, 10);


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

return sumNumbers/numbers2.length;

}

averageNumbers(2, 6, 9, 10, 7, 4, 1, 9);


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, machine) {

    if ("machine" === words2[i] && true) {
        return "true";
    } else {
        return "false";
    }

}

doesWordExist("machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience");