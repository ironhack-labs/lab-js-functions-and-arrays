// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 >= num1)
        return num2
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
let max = 0

function findLongestWord(arrayOfWords) {
    for (let i=0; i<arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > max) {
            max = arrayOfWords[i]
            return max
        }else if (arrayOfWords[i] = max) {
            return arrayOfWords[i]
        }else {
            return null
        }

    }
}

console.log (findLongestWord())


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNumbers) {
   let sum = 0
    for (i=0; i<arrNumbers.length;i++) {
        
        sum = sum + arrNumbers[i]

    }
    return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrAverage) {
    if (arrAverage.length === 0) {
        return 0;
    }
    
    let media = 0
    for (i=0; i<arrAverage.length;i++) {
        media += arrAverage[i]
    }
    media = media / arrAverage.length

    return media

}

averageNumbers(arrAverage)





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {
    if (arrayOfWords.includes(word) === true){
        return true
    } else if (arrayOfWords.includes(word) === false){
        return false
    }
    else {
        return null
    }
}
