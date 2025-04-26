// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
        if (num1 >= num2) {
           return num1;
        }
           else {
             return (num2);
           }
    }


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
if(words.length === 0) {
    return null;
}
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length > longestWord.length){
            longestWord = currentWord;
           }
        else if (currentWord == "") {
            longestWord = "null"
        }
      
    } return longestWord;

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {
    let total = 0;
    for(let i = 0; i < arrNumbers.length; i++) {
        const currentNumber = arrNumbers[i];
        total += currentNumber;
    }
      return total;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function sumNumbers(arrNumbers) {
    let total = 0;
    for(let i = 0; i < arrNumbers.length; i++) {
        const currentNumber = arrNumbers[i];
        total += currentNumber;
    }
      return total;
}

function averageNumbers(arrNumbers) {
    if (arrNumbers.length === 0) {
        return null;
    }
    const total = sumNumbers(arrNumbers);
    const average = total / arrNumbers.length;
    return average;
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords, wordToFind) {
    if (arrWords.length === 0) {
        return null;
    }

    return arrWords.includes(wordToFind);
}
