// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(maxOfTwoNumbers(3, 6));
console.log(maxOfTwoNumbers(8, 6));
console.log(maxOfTwoNumbers(3, 3));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

let = ""

function findLongestWord(arrayOfWord) {
    let longestWord = ""
    if (arrayOfWord.length === 0) {
        return null
    }
    else {
        arrayOfWord.forEach((element) => {
            if (element.length > longestWord.length)
                longestWord = element
        })
        return longestWord
    }
}




// Iteration 3 | Sum Numbers;

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(element3) {
    let sum = 0;
    for (let i = 0; i < element3.length; i++) {
        sum += element3[i];
    }
    return sum
}

console.log(numbers);




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array1) {
    let sumTotal = 0;
    let result = 0;
    for (let i = 0; i < array1.length; i++) {
        sumTotal += array1[i]
        result = sumTotal / array1.length
    }
    return result
}






// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordArray, word) {

    if (wordArray.includes(word)) {
        return true;
    } else if (wordArray.length === 0) {
        return null;

    } else {
        return false;
    }

}
