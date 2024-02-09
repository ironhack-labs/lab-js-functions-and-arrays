// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else return num2;
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
//const words = [];
function findLongestWord(words) {
    const wordsLength = []
    let longestWord = ""
    for (i = 0; i < words.length; i++) {
        wordsLength.push(words[i].length)
    }
    const maxLength = Math.max(...wordsLength) 

    for (j = 0; j < words.length; j++) {     
        if (words[j].length === maxLength) {
            longestWord = words[j]
            break;    
        }
    }   
    
    return longestWord ? longestWord : 0 //return 0 if longestWord = "" (falsey) //This method is called ternary operator
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10] ;

function sumNumbers(numbers) {
    let totalSum = 0
    for (i = 0; i < numbers.length; i++){
        totalSum += numbers[i]
    }
   
    return totalSum
}

// Iteration 4 | Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    let average = 0
    if (numbers.length > 0) {
        average = sumNumbers(numbers) / numbers.length
    }

    return average

}

console.log(averageNumbers(num))


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const words1 = []
const searchFor = "subset"

function doesWordExist(words, searchFor) {
    let result = false
    if (!words.length) {
        result = null
    }
    for (i = 0; i < words.length; i++) {
     if (searchFor === words[i]) {
       result = true
     }
    }
    return result 
}

console.log(doesWordExist(words1, searchFor));