// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {
    return Math.max(a,b);
}
// console.log(maxOfTwoNumbers(1, 10));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) return null;

    return words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    });
}
 
// console.log(findLongestWord());


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
}

console.log(sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numberArr) {
    if (numberArr.length === 0) {
        return 0; 
    }

    let sum = 0;
    
    for(let i = 0; i < numberArr.length; i++){
        sum += numberArr[i];
    }
    return sum / numberArr.length;
}

// console.log(averageNumbers(numbers2));




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, wordToFind) {
    if(arr.length === 0){
        return null;
    }
return arr.includes(wordToFind);
}

// console.log(doesWordExist(words2, "rat")); false 
// console.log(doesWordExist(words2, "machine")); true
// console.log(doesWordExist([], "machine"));  null
