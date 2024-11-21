// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    
    if (arr.length === 0){
        return null;
    }

    let longestWord = arr[0];
    for (let i = 1; i < arr.length; i +=1){
        const currentWord = arr[i];
        if (currentWord.length > longestWord.length){
            longestWord = currentWord;
        }
    }
    return longestWord;
}

findLongestWord(words);




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let added = 0;
    for (let i = 0; i < arr.length; i += 1){
        const currentNum = arr[i];
        added += arr[i];
    }
    return added;
}

sumNumbers(numbers);


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if (arr.length === 0){
        return 0;
    }
    const summedNum = sumNumbers(arr);
    const average = summedNum / arr.length;
    return average
}

averageNumbers(numbers2);


// Iteration 5 | Find Elements
/* Return true if the word exists in the array; otherwise, return false.*/


const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArr, wordToSearch) {
    if (wordArr.length === 0){
        return null;
    }

    for (let i= 0; i < wordArr.length; i +=1){
        const currentWord = wordArr[i];
        if (currentWord === wordToSearch){
            return true;
        } 
    }
    return false;
}

doesWordExist(words2,"bazooka");