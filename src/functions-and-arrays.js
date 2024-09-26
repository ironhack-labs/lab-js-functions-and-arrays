// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1,n2) {
    if(n1 > n2){
        return n1;
    }else {
        return n2;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longestWord= array[0];
    console.log(longestWord)
    if(array.length == 0){
        return 0;
    }
    array.forEach(currentElement => {
        if(currentElement.length > longestWord.length){
            longestWord = currentElement
        }
    });
    console.log(longestWord)
    return longestWord;
    
}

findLongestWord(words)


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {

    if(array.length == 0){
        return 0;
    }
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });

    return sum;
}

sumNumbers(numbers)


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {

    if(array.length == 0){
        return 0;
    }
    let average = 0;
    array.forEach(element => {
        average += element;
    });

    return average / array.length;
}

averageNumbers(numbers2)



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {

    if(array.length === 0){
        return null;
    }
    let found = false;
    array.forEach(element => {
        if (element === word) {
            found = true;
        }
    });

    return found; 

}


doesWordExist(words2, "subset")