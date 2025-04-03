// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    const maxNumber = Math.max(num1, num2);
    return maxNumber;
}





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length > 0) {

        let longestWordCount = 0;
        let longestWordIndex;
        words.forEach(function(element, index){
            if (element.length > longestWordCount) {
                longestWordCount = element.length;
                longestWordIndex = index;
            }
        })
        let longestWord = words[longestWordIndex];
        return longestWord;
    } else {
        return null
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(arr) {
    let sum = 0;
    if (arr.length > 0) {
        
        arr.forEach(function(element){
            sum += element;
        })
        return sum;
    } else {
        return 0;
    }
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let sum = 0;
    if (arr.length > 0) {
        
        arr.forEach(function(element){
            sum += element;
        })
        return sum/(arr.length);
    } else {
        return 0;
    }

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    let result = 0;
    if (arr.length > 0) {
        
        for (let element of arr) {
            if (element === word) {
                return true
            }
        }
        return false

    } else {
        return null;
    }
}
