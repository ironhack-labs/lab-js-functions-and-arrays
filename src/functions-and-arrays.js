// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else { 
        return num1
    }
}


console.log(maxOfTwoNumbers(9, 9))


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordArray) {
    if(!wordArray || wordArray.length === 0){
        return null

}
let LongestWord = wordArray[0];
for(let i = 0; i < wordArray.length; i++){
 if (wordArray[i].length > LongestWord.length){
    LongestWord = wordArray[i];
 }
}
    return LongestWord

}
console.log(findLongestWord());
console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
    if (!numbersArray || numbersArray.length === 0) {
        return 0;
    }

    let sumTotal = 0; 

    for (const number of numbersArray) {
        sumTotal += number; 
    }

    return sumTotal;
}

console.log(sumNumbers(numbers));
console.log(sumNumbers([]));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (!numbersArray || numbersArray.length === 0) {
        return 0; 
    }

    const sum = sumNumbers(numbersArray);
    const count = numbersArray.length;

    return sum / count;
}

console.log(averageNumbers(numbers2));
console.log(averageNumbers([]));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {
    if (!wordsArray || wordsArray.length === 0) {
        return null;
    }

    for (const currentWord of wordsArray) {
        if (currentWord === wordToSearch) {
            return true;
        }
    }

    return false;
}

console.log(doesWordExist(words2, "truth"));
console.log(doesWordExist(words2, "laptop"));
console.log(doesWordExist([], "test"));
