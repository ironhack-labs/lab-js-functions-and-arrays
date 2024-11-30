// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1,n2) {
    return n1 > n2 ? n1 : n2; // I f the first one is bigger, return it; Otherwise return the second.
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if(words.length < 1 ){
        return 0;
    }
    let biggestword = "";
    words.forEach(function(word) {
        biggestword = word.length > biggestword.length ? word : biggestword;
    });
    console.log(biggestword);
    return biggestword;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    });
    return sum; 
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if(numbers2.length < 1 ){
        return 0;
    }
    return sumNumbers(numbers2)/numbers2.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2,wordToSearch) {
    if (words2.length === 0) {
        return null; // Return early array is empty. keeping it performant :)
    }
    let found =false;
    words2.forEach(
        function(word){
            if (word === wordToSearch) {
                found = true;
            }
        }
    )
    return found;
    
}
