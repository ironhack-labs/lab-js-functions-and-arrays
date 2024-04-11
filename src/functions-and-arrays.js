// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(arg1, arg2) {

    if (arg1 > arg2) {
        return arg1;
    } else if (arg2 > arg1) {
        return arg2;
    } else {
        return arg1;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {

    if (wordArray.length === 0) {
        return null;
    }

    let longestWord = '';
    for (let word of wordArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    if (numbersArray.length === 0) {
        return 0;
    }

    if (numbersArray.length === 1) {
        return numbersArray[0];
    }

    const sum = numbersArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return sum;
}



// Iteration 4 | Numbers Average
function averageNumbers(numbersArray) {
    if (numbersArray.length === 0) {
        return 0;
    }

    if (numbersArray.length === 1) {
        return numbersArray[0];
    }

    const sum = numbersArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    const average = sum / numbersArray.length;

    return average;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, word) {
 
    if (wordArray.length === 0) {
        return null;
    }

    return wordArray.includes(word);
}
