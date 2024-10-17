// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(value1, value2) {
    if (value1 > value2) {
        return value1;
    } else if (value2 > value1) {
        return value2;
    } else if (value1 === value2) {
        return value1, value2;
    }

}





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    for (let i = 0; i < words.length; i++);
    if (words.length === 1) {
        return words[0]
    }

    else if (words.length === 0) {
        return null
    }
    longWord = " ";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longWord.length) {
            longWord = words[i]
        }
    }
    return longWord
}






// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0
    }
    else if (numbers.length === 1) {
        return numbers[0]
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0
    }

    else if (numbers2.length === 1) {
        return numbers2[0]
    }

}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() { }
