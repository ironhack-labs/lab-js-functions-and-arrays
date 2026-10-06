// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1
    }else{
        return num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrWords) {

    if(arrWords.length === 0){
        return null;
    }


    let longestWord = arrWords[0];
    
    arrWords.forEach(function(word) {
        if (word.length > longestWord.length){
            longestWord = word
        }

    })
    return longestWord;
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
    let sum = 0;

    arrNum.forEach(function(num){
        sum = sum + num;
    })
    return sum
}

console.log(sumNumbers(numbers))




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNum2) {
    if(arrNum2.length === 0){
        return 0
    }
    let average = sumNumbers(arrNum2)/arrNum2.length

    return average
}

console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords2, wordExist) {
    if(arrWords2.length === 0){
        return null
    }
    let exist = false;
    arrWords2.forEach(function(word){
        if(wordExist === word){
            exist = true;
        }
    })

    return exist
}

console.log(doesWordExist(words2, "machine"))
