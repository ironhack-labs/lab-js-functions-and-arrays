// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(argument1, argument2) {
    if(argument1 > argument2) {
        return argument1
    } else if(argument1 < argument2) {
        return argument2
    } else {
        return argument1 || argument2
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longest = "";

    for(let i = 0; i < words.length; i++) {
        const current = words[i];

        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest ? longest: 0
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(sumArray) {
    let sum = 0;

    for(let i = 0; i < sumArray.length; i++) {
        sum += sumArray[i];
    }
    return sum
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(avNum) {
    if (!(avNum && avNum[0])) return 0; 
    let sumAvNum = 0;

    for (let i = 0; i < avNum.length; i++) {
        sumAvNum += avNum[i];
    }
    return sumAvNum / avNum.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (!(words && words[0])) return null;
    let answer = false

    for (let i = 0; i < words.length; i++) {
        const element = words[i];

        if (element === word) {
            answer = true
            break;
        }
    }
    return answer
}
console.log("hello world")
console.log("hello world")