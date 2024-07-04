// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else if(num1 < num2) {
        return num2;
    } else if (num1 === num2){
        return num1;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = "";
    if(words.length === 0) {
        return null;
    }

    for(i = 0; i < words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
    
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let total = 0;
    if(numbers2.length === 0) {
        return 0;
    } else {
        for(i = 0; i < numbers2.length; i++) {
             total += numbers2[i];
         }
        const avg = total / numbers2.length;
        return avg;
    }
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    if(words2.length === 0) {
        return null;
    }

    for(i = 0; i < words2.length; i++) {
        if (words2[i] === word) {
            return true;
        }
    }

    return false;

}
