// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
return num1;
    }
    else if (num1 < num2) {
        return num2;
}
else {
    return num1;
}
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if (array.length === 0) {
        return 0;
    }
    let theLongestWord = " ";
    array.forEach(function(currentWord) {
        if (currentWord.length > theLongestWord.length) {
            theLongestWord = currentWord
        }
    });
    return theLongestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
      let total = 0;
      array.forEach((element)=>{
        total += element;
      })
      return total
}

const whatTheRobotSummedUp = sumNumbers(numbers)
console.log(whatTheRobotSummedUp)

 // if (array.length === 0) {
    //     return 0;

    // }
//     let sum = 0
//     for (let i=0; i<numbers.length; i++) {
//         sum += numbers[i]
//     }s
// return sum;


// Iteration 4 | Numbers Average
// const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

// function averageNumbers(numbers) {
//     let sum = 0;
//     for (let i=0; i<numbers2.length; i++) {
//         sum += numbers2[i];
//     }
//     return sum;
// }

// function sumNumbers(numbers) {
//     const sum = sumNumbers(numbers2)
//     const average= sum/numbers.length
//     return average
// }




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words,word) {
    if (words2.length === 0) {
        return null
    } 
    for (let i=0; i<words2.length; i++) {
        if (words2[i] === word) {
            return true
        }
    }
    return false
}
