// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2){
        return num2;
    } else {
        return num2;
    }
}
// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
        if(words.length === 0){
        return null
    }
    let longestWord = words[0];

    for (let i = 0 ; i < words.length ; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        } else if (words[i].length === longestWord.length && words.indexOf(words[i]) < words.indexOf(longestWord)) {
            longestWord = words[i];

        }

    }
    return longestWord;
}

console.log(longestWord)




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
    let sum = 0;

    for (let j = 0 ; j < numbers.length; j++){
            sum += numbers[j];
           
    
    } return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let averNum = 0;
    let averNumMed = 0;

    if (numbers2.length === 0){
        return 0;
    }

    for (let k = 0 ; k < numbers2.length; k++){
           averNum = (averNum + numbers2[k]);
         
        }
        averNumMed = averNum / numbers2.length;
        return averNumMed

} 

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {

    if (words.length === 0){
        return null;
    }

    let foundWord= false;

    words.forEach(wordToFind => {
        if (wordToFind === word){
            foundWord = true;
        }
    });
    return foundWord
}
