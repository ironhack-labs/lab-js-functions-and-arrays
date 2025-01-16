// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1, number2)
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


function findLongestWord(words) {
    if (words.length === 0) return null
    let longest_word = ""
    for (let i = 0; i < words.length; i++) {
        let checker = words[i]
        if (checker.length > longest_word.length) {
            longest_word = checker

        }
    }
    return longest_word
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    if (numbers.length === 0) return 0
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) return 0
    return sumNumbers(numbers2) / numbers2.length

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (words.length === 0) return null
    const wordExists = words.some(iterateWord => iterateWord === word)
    if (!wordExists) return false
    if (wordExists) return true
    return wordExist
}
