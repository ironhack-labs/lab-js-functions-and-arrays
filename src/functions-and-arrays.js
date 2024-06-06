// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    
    // check if arguments provided
    if (!num1 || !num2) {
        return "Please provide 2 numbers as arguments";
    }
    // determine the greater number
    if (num1 > num2) {
        return num1;
    }
    else if (num1 < num2) {
        return num2;
    }
    else {
        // return either value, determined by random chance
        const choice = Math.random();
        if (choice > 0.4) {
            return num1;
        }
        return num2;
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(wordsArr) {
    
    // check if array provided, and is not empty
    if (!wordsArr || wordsArr.length < 1) {
        return null;
    }
    // keep track of current longest word
    let longestWord = "";

    // use forEach method to compare length uf current word to longest word
    wordsArr.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
    // check if array provided and not empty
    if (!numbersArr || numbersArr.length < 1) {
        return 0;
    }

    let sum = 0;
    
    // use forEach method to add each nr to sum
    numbersArr.forEach( number => {
        sum += number;
    });

    return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArr) {
    // check if array provided
    if (!numbersArr || numbersArr.length < 1) {
        return 0;
    }
    // call function to get sum
    const total = sumNumbers(numbersArr);
    // divide by amount of nrs to get avg
    const averageNumber = total / numbersArr.length;

    return averageNumber;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, word) {
    // check if array provided
    if (!wordsArr || wordsArr.length < 1) {
        return null
    }
    // check if word to check is included in array
    if (wordsArr.includes(word)) {
        return true;
    }
    else {
        return false;
    }
}
