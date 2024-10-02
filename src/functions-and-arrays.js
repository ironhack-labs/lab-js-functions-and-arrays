// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let numMax;

        if (num1 < num2) {
            return num2;
        } else if ( num2 < num1) {
            return num1;
        } else if ( num1 === num2) {
            return num1
        }
}

maxOfTwoNumbers(3, 7)



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    } 
    let longestWord = words[0]; 
    for ( i = 0; i < words.length; i++) {
        const word = words[i];
        if ( word.length > longestWord.length) {
            longestWord = word;
        }

    }
    return longestWord;
}

findLongestWord()



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if ( numbers.length === 1){
        return numbers[0];
    }
    let sum = 0;
    for( let i = 0; i < numbers.length; i++) { 
        sum += numbers[i];
    }
    return sum;
}

sumNumbers()



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if ( numbers2.length === 0 ) {
        return 0;
    }
    let sum = 0;
    for ( let i = 0; i < numbers2.length; i++ ) {
        sum += numbers2[i];
    }
    const avarage = sum / numbers2.length;
    return avarage;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToCheck) {
    if ( words2.length === 0) {
        return null;
    } 
    for (let i = 0; i < words2.length; i++) {
        if (words2[i] === wordToCheck) {
            return true;
        }  
    }
    return false;

}


/* 

function doesWordExist(words2) {
    if ( words2.length === 0) {
        return null;
    } 
    for ( let i = 0; i < words2.length; i++) {
        let wordExists = words2[i];
        if ( wordExists = words2[i]) {
            return true;
        } 
    }
    return false;

}
*/