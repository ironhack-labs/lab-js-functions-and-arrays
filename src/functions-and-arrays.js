// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1>n2)
    {
        return n1;
    } else {
        return n2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = null;

    for(let i = 0; i < words.length; i++) {
        const word = words[i];

        if(!longestWord || word.length > longestWord.length) {
            longestWord = word;
        }
                }

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let result = 0;

    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if(numbers.length === 0) {
        return 0;
    } else {
        return sumNumbers(numbers)/numbers.length;
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, search) {
    if(words.length === 0 ) {
        return null;
    }

    let found = false;

    for(let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        if(currentWord === search )
        {
            found = true;
            break;
        }
    }

    return found;
}