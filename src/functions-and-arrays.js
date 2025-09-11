// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    
   if (a > b){
    return a; }
    else if (b > a) {
        return b; 
    } else {
        return a;
    }
    
    
}
console.log(maxOfTwoNumbers(2, 10));
    console.log(maxOfTwoNumbers(20, 10));
    console.log(maxOfTwoNumbers(2, 2));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words. length === 0) return null
    let longest = words[0];
    //pretend the longest word in the array is 0 for now and designate it as longest and for comparism
    // now i should loop through all the word to find the longest
    //looping through each element which is (word) in the words array.
    //word. length is the number of characters in the current array of words
    for(let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;    
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) return 0;

    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumNumbers([6, 12, 1, 18]));
console.log(sumNumbers([6]));





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) return 0;

    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}
console.log(averageNumbers([2, 6, 9, 10]));
console.log(averageNumbers([]));





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToFind) {
    if (words.length === 0) return null;
    return words.includes(wordToFind);    
}

console.log(doesWordExist(words2, "machine"))
console.log(doesWordExist(words2, "hello"))