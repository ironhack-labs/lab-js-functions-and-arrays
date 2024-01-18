// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    if (num1 < num2) {
        return num2
    }
    else {
        return num1 || num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayofWords) {

    let longestWordInArray = ""

    if (arrayofWords.length === 0) {
        return 0
    }

    for (let i = 0; i < arrayofWords.length; i++) {
        if (arrayofWords[i].length > longestWordInArray.length) {
            longestWordInArray = arrayofWords[i]
        }
    }
    return longestWordInArray

}
console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {

    let totalSum = 0

    if (arrayOfNumbers.length === 0) {
        return 0
    }

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        totalSum += arrayOfNumbers[i]

    }

    return totalSum
}








// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageNumbers) {

    if (averageNumbers.length === 0) {
        return 0
    }
    let arraySum = 0

    for (let i = 0; i < averageNumbers.length; i++) {
        arraySum += averageNumbers[i]
        return arraySum
    }



    const result = arraySum / averageNumbers.length

    return result
    ///no entiendoo como no sale

}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(list) {
    if (list.length === 0) {
        return null
    }

    for (let i = 0; i < list.length; i++) {
        if (list.length[i] !== list) {
            return false
        }
        else if (list.length[i] === list) {
            return true
        } // como es que no sale, si es lo mismo que el return false...

    }



}


