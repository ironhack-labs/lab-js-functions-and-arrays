// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1>num2){
        return num1;
    }else if (num1<num2){
        return num2;
    } else if(num1===num2){
        return num1;
    }
    
}
maxOfTwoNumbers()





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {

    let longestWord = "";

    if(arrayWords.length  === 0) return 0;


    for (let i = 0 ; i < arrayWords.length; i++){
        if (arrayWords[i].length > longestWord.length){
            longestWord = arrayWords[i];
        } 
    }
    return longestWord

}

findLongestWord()




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;

    for (i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum

}

sumNumbers()




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(value1) {

    if(value1.length === 0) return 0;
/*     let sum1 = 0;

    for (i = 0; i < value1.length; i++){
        sum1 += value1[i];
    } */

    return sumNumbers(value1)/value1.length
    
}

averageNumbers()






// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArr, wordMatch) {

    if(wordsArr.length === 0){
        return null;
    } 

    for ( let i = 0 ; i < wordsArr.length; i++){
        if(wordsArr[i] === wordMatch){
            return true;
        }
        }
return false

        }
    
console.log(doesWordExist(words2, 'machine'))

findLongestWord();
