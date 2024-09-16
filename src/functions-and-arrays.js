// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else{
        return num1, num2;
    }
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    let longestWord = " ";

    if(words.length === 0){
        return 0;
    }

    for (let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    finalSum = 0;

    for(let i = 0; i < numbers.length; i++){
        finalSum += numbers[i];
    }

    return finalSum;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    
    if(numbers2.length === 0){
        return 0;
    }

    let averageNum = sumNumbers(numbers2) / numbers2.length;
    return averageNum;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToSearch) {

    let word = " ";

    if(words2.length === 0){
        return null;
    }

    for (let i = 0; i < words2.length; i++){
        if(words2[i] === wordToSearch){
            return true;
        } 
    }
    return false;
}
