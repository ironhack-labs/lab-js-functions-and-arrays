// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(nb1,nb2) {
    if (typeof nb1 === "number" && typeof nb2 === "number"){
        if(nb1>nb2){
            return nb1;
        } else if (nb1<nb2){
            return nb2;
        } else {
            return nb1, nb2;
        }
    } else {
        return 'Insert a number!'
    }
}
// console.log(maxOfTwoNumbers(2,2));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpottttttttttt"];
// const words_dummy = [];
function findLongestWord(array2) {
    let longestWord;
    if (!array2.length){
        return null;
    } else {
        array2.forEach(element => {
            if(typeof longestWord === "undefined"){
                longestWord=element;
            } else {
                if(element.length>longestWord.length){
                    longestWord=element;
                }
            }
        });
        return longestWord;
    }
}

// console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array3) {
    let calculation = 0;
    for (let eachNumber of array3){
        calculation += eachNumber;
    }
    return calculation;
}
// console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array4) {
    const arrayLength = array4.length;
    if (arrayLength===0){
        return 0;
    } else {
        let calculation4 = sumNumbers(array4) / arrayLength;
        return calculation4;
    }
}

// console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array5, wordToSearch) {
    if (!array5.length){
        return null;
    } else {
        for (let eachWord of array5){
            if(eachWord===wordToSearch){
                return true;
            }   
        }
        return false;
    }
}

// console.log(doesWordExist(words2,"machine"));