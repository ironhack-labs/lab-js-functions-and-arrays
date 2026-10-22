// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(5, 6));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }

    let longestWord = words[0];

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; ++i) {
    total = total + numbers[i]; 
}
return total; 
}
console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < numbers2.length; ++i) {
        total = total + numbers2[i];
    }
    const averageNumbers = total / numbers2.length;
    return averageNumbers; 
}
console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    if (words2.length === 0) {
        return null;
    }
    return words2.includes(word);
}
console.log(doesWordsExist.includes("machine"));
console.log(doesWordsExist.includes("apple"));
console.log(doesWordsExist.includes([], "machine"));