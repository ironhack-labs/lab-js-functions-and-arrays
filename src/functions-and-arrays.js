// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    }
    else if (b > a) {
        return b;
    }
    else if (a === b) {
        return a && b;
    }
}
maxOfTwoNumbers(156, 47);







// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }

    let longestWord = "";

    words.forEach(function (element) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    });

    return longestWord;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let sum = 0;

    arr.forEach(function (element) {
        sum += element;
    });

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(arr) {
    let sum = 0;

    arr.forEach(function (element) {
        sum += element;
    });
    if (arr.length === 0) {
        return 0
    }
    const average = sum / arr.length

    return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }

    return false;

}
console.log(doesWordExist(words2, "machine"));