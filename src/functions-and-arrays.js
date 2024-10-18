// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(smallerNum, biggerNum) {
    if (smallerNum <= biggerNum) {
        return biggerNum;
    }

    if (biggerNum < smallerNum) {
        return smallerNum;
    }

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArray) {

    if (wordsArray.length === 0) {
        return null;
    }

    const longestWordFound = ``;

    for (let i = 0; i < wordsArray.length; i++) {

        const eachWord = wordsArray[i];

        if (eachWord.length === longestWordFound.length) {
            longestWordFound = eachWord
        }

    }
    return longestWordFound;
}


// Iteration 3 | Sum Numbers

function sumNumbers(numbersArray) {
    let suma = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        suma += numbersArray[i];
    }
    return suma;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    let suma = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        suma += numbersArray[i];
    }
    return suma;
}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, searchWord) {

    if (wordsArray.length === 0) {
        return null;
    }

    let exsist = false;

    for (let i = 0; i < wordsArray.length; i++) {
        const eachWord = wordsArray[i];

    } if (eachWord === searchWord) {
        exsist = true;
    }

    return exist;

}
