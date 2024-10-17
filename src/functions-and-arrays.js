// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {

    if (n1 > n2) {
        return n1
    }
    else return n2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {

    if (array.length === 0) {
        return null;
    }

    let longword = "";

    for (let i = 0; i < array.length; i++) {

        if (array[i].length > longword.length) {
            longword = array[i];
        }
    }

    return longword;
}

const result = findLongestWord(words);
console.log(result);



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {

    let multiarray = 0


    for (let i = 0; i < array.length; i++) {

        multiarray += array[i]

    }

    return multiarray
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(array) {

    if (array == 0) {

        return 0

    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }


    let average = sum / array.length;


    return Math.floor(average);
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, Find) {

    if (array == 0) {
        return null
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === Find) {
            return true;
        }

    }
    return false
}

