// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num, num2) {
    return math.max(num, num2);
}
// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });

    return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return null;
    }

    return sumNumbers(numbers2) / numbers2.length;
}


// Iteration 5 | Find Elements

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (words.length === 0) {
        return null;
    }

    const wordExist = words.some(iterateWord => iterateWord === word);
    return wordExist;
}

