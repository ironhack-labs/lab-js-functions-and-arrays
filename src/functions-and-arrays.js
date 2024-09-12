// Iteration 1 | Find the Maximum
// function maxOfTwoNumbers() {}
const maxOfTwoNumbers = (num1, num2) => {
    if (num1 === num2) {
        return num1, num2;
    } else if (num1 > num2){
        return num1;
    } else if (num1 < num2){
        return num2;
    } else {
        console.error("Cannot compare");
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

// function findLongestWord() {}
    const findLongestWord = (words) => {
        let longestWord = "";
        if (words.length === 0) {
            return null;
        } else {
            words.forEach(word => {
                if (longestWord.length < word.length){
                    longestWord = word;
                }
            })
        } return longestWord;
    }




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// function sumNumbers() {}
    const sumNumbers = (numbers) => {
        initialValue = 0;
        const sum = numbers.reduce((total, currentNumber) => total + currentNumber, initialValue);
        return sum;
    }




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

// function averageNumbers() {}
    const averageNumbers = (numbers2) => {
        initialValue = 0;
        if (numbers2.length === 0) {
            return 0;
        }
        const sum2 = numbers2.reduce((total, currentNumber) => total + currentNumber, initialValue);
        return sum2 / numbers2.length;
    }



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

// function doesWordExist() {}
    const doesWordExist = (array, word) => {
        if (array.length === 0 ){
            return null
        }
        return (array.includes(word));
    }
