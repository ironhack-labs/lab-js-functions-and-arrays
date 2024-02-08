// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
            return num1
    } else if (num2 > num1) {
            return num2
    } else {
        return num1, num2
    }
    
}
console.log(maxOfTwoNumbers(5,5));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(word) {
    let longestWord = "";
    for (let i= 0; i < words.length; i++) {
        if (longestWord.length < word[i].length ) {
                longestWord = word[i];
        } 
    }
    return longestWord;
}

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let i = 0;
    let sum = 0;
    do {
        sum += arr[i]
        i++
    } while (i < arr.length);
      return sum;
}

console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    return sumNumbers(arr)/arr.length;
}

console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0 || word.length === 0) {
        return null;
    }
    if (arr.includes(word)) {
        return true
    }
}
console.log(doesWordExist(words2, "trouble"));
