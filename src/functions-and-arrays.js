// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;

    } else if (num2 > num1) {
        return num2;
    } else if (num1 === num2) {
        return num1;
    }
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot", "crocodile"];
function findLongestWord(words) {
    
    if (words.length=== 0){
        return null;
    }

    let longestWord = words[0];
    for (let i = 1; i<words.length; i++) {
        
        if (words[i].length > longestWord.length) {

        console.log("word is: ", words[i]);
        longestWord = words[i];
            
        }
    }
    return longestWord;        
}
console.log(findLongestWord(words));





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    if (numbers.length === 0) {
        return 0; //return sum won't pass the test
    }
    else if (numbers.length === 1) {
        return numbers[0];
    }

    else {
        for (let i=0 ; i< numbers.length; i++) {
            sum = sum + numbers[i];
        }
    }

    return sum;

}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }
    else {
        return sumNumbers(numbers2)/numbers2.length;
    }
    
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const word2Search = "trouble";

function doesWordExist(words2, word2Search) {

    if (words2.length ===0) {
        return null;
    }
    if (words2.includes(word2Search)) {
        return true;
    }
    else  {
        return false;
    }
    

}
