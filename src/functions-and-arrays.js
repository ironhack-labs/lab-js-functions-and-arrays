// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    const result = num1 > num2 ? num1 : num2;
    return result;
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    const lengthArray = [];
    if (words.length === 0) {
        return 0;
    }
    else {
        for (i = 0; i < words.length; i++) {
            lengthArray.push(words[i].length);
        }
        const maxLength = Math.max(...lengthArray);
        const longestWord = words[lengthArray.indexOf(maxLength)];
        return longestWord;
    }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;
    const arraySize = numbers.length;
    if (arraySize === 0) {
        return 0;
    }
    else if (arraySize === 1) {
        return numbers[0];
    }
    else {
        numbers.forEach((number) => {
            total += number;
        })
        return total;
    }

}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let total = 0;
    const arraySize = numbers2.length;
    if (arraySize === 0) {
        return 0;
    }
    else if (arraySize === 1) {
        return numbers2[0];
    }
    else {
        numbers2.forEach((number) => {
            total += number;
        })
        const average = total / arraySize;
        return average;
    }
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    const arraySize = words2.length;
    let count = 0;
    if (arraySize === 0) {
        return null;
    }
    else {

        words2.forEach((element) => {
            if (word === element) {
                count++;
            }
        })
        const exist = count > 0 ? true : false;
        return exist;
    }
}
