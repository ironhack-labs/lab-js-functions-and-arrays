// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2){
        return num1;
    }else {
        return num2;
    }  
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longuestWord = "";
    words.forEach((currentElement) => {
        if(currentElement.length > longuestWord.length){
            longuestWord = currentElement
        }else if(currentElement.length == longuestWord.length){
            return currentElement;
        }else if (words == null){
            return 0;
        }
    });

    return longuestWord;
    }


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;
    numbers.forEach((currentNumber) => {
        total += currentNumber;
    });
    return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

// function sumNumbers(numbers2) {
//     let total2 = 0;
//     numbers2.forEach((currentNumber2) => {
//         total2 += currentNumber2;
//     });
//     return total2;
// }

function averageNumbers(numbers2) {
    let sum = 0;
    let averageTotal = 0;
    numbers2.forEach((currentNum, indexNum) => {
        sum += currentNum;
        averageTotal = sum / indexNum;
    });
    return averageTotal;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let searchWord = "machine";
function doesWordExist(words2, searchWord) {
    let booleanResult = null;
     words2.forEach((currentWord) => {
        if(searchWord === currentWord) {
            booleanResult = true;
         }else {
            booleanResult = false;
         }
     }); 
     return booleanResult;
}

