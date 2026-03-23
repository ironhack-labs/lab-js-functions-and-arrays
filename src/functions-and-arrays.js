// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a ,b) {
    if (a >= b) return a
    else return b //Se puede hacer con ternario y reducir mas 
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let wordLong = ""
    if (words == "") return null //Mas adecuado seria words.length === 0 => Null, pero como me lo dio bien lo dejo asi 🙃
    words.forEach((word) => { //Se podria hacer con Reduce o Sort y se condensa aun mas, para mi se ve mas claro así en esta ocacion
        if (word.length > wordLong.length) wordLong = word
    })
    return wordLong
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
   return num.reduce((acc, curr) => acc + curr, 0) //Manera mas optima con reduce para operaciones viene genial
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
   let sum = sumNumbers(num)
    return num.length === 0 ? 0 :sum / num.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (words.length === 0) return null
    return words.includes(word) != true ? false : true // Includes ya devuelve un valor Booleano no hace falta el ternario
}
