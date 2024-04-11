// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if( a>b ) {
    return a;
} else if (a<b) {
    return b;
}
else {
    return a, 'is equal to', b;
}

}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
if (words.length === 0) {
    return null;

}
let theLongestWord = words[0];
for (let i = 0; i < words.length; i++) {
    if (words[i].length >theLongestWord.length) {
        theLongestWord = words[i];
    }
}
return theLongestWord;

}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
let sum = 0;
for(let i = 0; i<numbers.length;i++){
    sum += numbers[i] ;
}
return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0;
    }
    const sum = sumNumbers(numbers2);
    return sum/numbers2.length;

}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, checkWord) {
    const theCheckWord = "trouble"
    if(words2.length ===0 ) {
        return null;
    }
    if ( words2.includes(checkWord)) {
            return true;
            
        } else {
            return false;
        }
    }
