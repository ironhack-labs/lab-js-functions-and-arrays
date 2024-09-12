// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let longestWord = "";

    if (arr.length === 0) {
            return 0;
        }

    arr.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        } 
    })
    return longestWord;

}

console.log(findLongestWord(words))


// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;

    for (number of numbers) {
        total += number;
    }
    
    return total;

}

console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
    let totalSum = sumNumbers(numArray);
    let totalNums = numArray.length;
    let avarageNum = totalSum / totalNums;

    if (totalNums > 0) {
        return avarageNum
    } else {
        return 0;
    }
}
console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.includes(wordToSearch)) {
        return true;
    } else if (arrayOfWords.length === 0) {
        return null;
    } else
     {
        return false;
    }
}

console.log(doesWordExist(words2, "machine"))