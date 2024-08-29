// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {

    if (array.length === 0) {
        return null
    }
    
    let longestWord = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
    } // if si es igual += longestWord

    if ( array[i].length > longestWord.length) {
        console.log(`${longestWord[i].length} is longer than ${array.length}`);
      }
}

if (words.length === 0) {
    return null;
  }

return longestWord;
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let suma  = 0

    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }

    return suma

}

console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(numArray) {

    if (numArray.length === 0) {
        return 0
    }

    let average = sumNumbers(numArray) / numArray.length
    
    return average
}

console.log(averageNumbers(numbers2))


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {

    if(wordsArray.length === 0) {
        return null
    }

    if (wordsArray.includes(wordToSearch)) {
        return true
    } else {
        return false
    }
}

console.log(doesWordExist(words2, "subset"))
