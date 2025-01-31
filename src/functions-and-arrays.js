// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {

    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log(maxOfTwoNumbers(10, 14));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

    if (words.length === 0) {
        return null;
    }

    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

return longestWord || 0;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    let counter = 0;
    numbers.forEach((numbers) => {
        counter += numbers
    })
    return counter

}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {

    if (numbers.length) {
        return sumNumbers(numbers) / numbers.length;
    } else {
        return 0;
    }
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const search = "machine"

function doesWordExist(words2, search) {
    if (words2.length === 0 || words2 === []) {
        return null;
    } else {
        for (let i = 0; i < words2.length; i++) {
            if (words2[i] == search) {
                return true;
            }
        } return false
    }
}

console.log(doesWordExist(words2, "machine"));
