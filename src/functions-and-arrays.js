// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(Value1, Value2) {
    if (Value1 > Value2)
        return Value1

    if (Value2 > Value1)
        return Value2

    if (Value1 === Value2)
        return Value1
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longword = ""
    if (!words.length) return 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longword.length) {
            longword = words[i]

        }
    }
    return longword

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum

}





// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0
    if (!numbers2.length) return 0
    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i]
    }
    return sum / numbers2.length


}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() { }
