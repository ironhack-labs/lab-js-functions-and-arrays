// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2)
        return number1

    else if (number2 > number1)
        return number2

    else (number1 === number2)
    return number1 || number2

}


// Iteration 2 | Find the Longest Word  (first method)
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    let longest = " "

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length)
            longest = array[i]

        return array.sort(function (a, b) { return b.length - a.length })[0];
    }
    if (longest)
        return null

}
findLongestWord(words);

// Iteration 2 | Find the Longest Word  (second method)

/*

let longerString = arrayOfwords[0]
if (arrayOfwords.length === 0){
return null
}
    for (i = 0; i < arrayOfwords[i].length >longerString.length){
        counter += arrayOfNumbers[i]
    }
    return counter
}

*/



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let counter = 0

    for (let i = 0; i < array.length; i++) {
        counter += array[i]
    }

    return counter
}
sumNumbers(numbers)

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {

    let sumTotal = 0
    let result = 0

    if (array.length === 0) {
        return 0
    }


    for (let i = 0; i < array.length; i++) {
        sumTotal += array[i]
    }

    result = sumTotal / array.length

    return result

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {

    if (array.length === 0) {
        return null
    }
    let founded = false
    for (i = 0; i < array.length; i++) {
        if (array[i] === word) {
            founded = true
        }
    }
    return founded
}
