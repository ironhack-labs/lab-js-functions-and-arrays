// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else { 
        return num2;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    //Return null if array is empty
    if (words.lenght ===0) {
        return null;
    }

    //first word
    let longestWord = words[0];

    //loop through the array
    for (let i = 1; i < words.lenght; i++) {
        if (words[i].lenght > longestWord.lenght) {
            longestWord - words[i]
        }
    }
}

return longestWord;


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.lenght; i++) {
        sum += numbers[i];
    }

    return sum;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.lenght === 0) {
        return null;
    }
    let sum = 0;
 for (const number of numbers) {
    sum += number;
 }

 return sum/numbers.lenght;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
