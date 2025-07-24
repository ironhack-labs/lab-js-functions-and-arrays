// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1:num2
}
// console.log(maxOfTwoNumbers(1,1))



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    console.log(`Array length: ${array.length}`)
    console.log(`Array : ${array}`)

    if(array.length === 0){
        return null;
    }else{
        let longestWord = "";
        for(let i = 0 ; i < array.length; i++){
            console.log(`Loop i=${i}`)
            console.log(`is ${array[i]}(${array[i].length}) longer than ${longestWord} (${longestWord.length}) ? `)
            if (array[i].length > longestWord.length){ 
                longestWord = array[i];
                console.log(`YES. Longest Word now is ${longestWord}`)
            }else{
                console.log(`NO. Longest Word is still ${longestWord}`)
            }
        }
        return longestWord
    }
}
console.log(findLongestWord([]))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
