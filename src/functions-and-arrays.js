// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {

    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    else {
        return num1;
    }
}

maxOfTwoNumbers(num1, num2);



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(word) {

    let longestWord = "";

    if (word.length === 0) {
        return 0;
    }


    word.forEach((word1) => {

        if (word1.length > longestWord.length) {
            longestWord = word1;
        }
    })



    return (longestWord);
}












// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    let sumNum = 0



    for (i = 0; i < numbers.length; i++) {

        sumNum = sumNum + numbers[i];
    }

    return sumNum;

}








// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {

    let sum = 0

    if (numbers2.length === 0) {

        return 0
    }

    else {
        for (let j = 0; j < numbers2.length; j++) {

            sum = sum + numbers2[j];
        }
    }

    return (sum / numbers2.length)


}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

let wordInside = "machine";




function doesWordExist(arrWords, wordExist) {
    if (arrWords.length === 0) return null;

    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i] === wordExist) {
            return true
        }
    }

    return false

}





