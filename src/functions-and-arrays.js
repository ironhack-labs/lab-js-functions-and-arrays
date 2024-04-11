// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
return num1 > num2 ? num1 : num2
}

// Iteration 2 | Find the Longest Word
const words = ["bbb", "aaa"];
function findLongestWord(words) {
    if (words.length === 0) {
        return null
    };
    let longest = '';
    for (let i = words.length -1; i >= 0; i-- ) {
        if (words[i].length >= longest.length) {
            longest = words[i]
        }
    };
    return longest
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
    }
    return result;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers) {
    if (!numbers.length) {
        return 0
    }
    let result= 0;
    for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
    }
    return result/numbers.length;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
function doesWordExist(array, word) {
    if (!array.length) {
        return null
    }

    for (term of array) {
        if (term === word) {
            return true
        }
    }
    return false
}
