// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2){
        return num1
    }
    else if (num2 > num1){
        return num2
    }
    return num1 
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longestWord = " "
    for (let i=0; i < words.length; i++){
        if (words[i] > longestWord){
            longestWord += words[i]
        }
    }

    if (words.length === 0){
        return 0
    }

    else if (words.length === 1){
        return words[0]
    }

    return longestWord

}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for (let i=0; i < numbers.length; i++){
        sum += numbers[i]
    }
     
    if (numbers.length === 0){
        return 0
    }

    else if (numbers.length === 1){
        return numbers[0]
    }

    return sum
}
  




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0){
        return 0
    }

    let sum = 0
    for (i=0; i < numbers2.length; i++){
        sum += numbers2[i];
    }

    return sum/numbers2.length;

}



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, myWord) {
    if (!words2.length){
        return null
    }

   let wordExists= false
    words2.forEach(element =>{
        if (element === myWord){
            wordExists= true 
        }

    })
    return wordExists
   }



