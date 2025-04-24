// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let max;
    if (num1 > num2) {
        max = num1
    } else if (num2 > num1){
        max = num2
    } else {
        max = num1
    }
    return max
}



// Iteration 2 | Find the Longest Word
 const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

 function findLongestWord(words) {
    if (words.length === 0){
        return null
    }

    let maxWord = words[0];
    for (let i = 0; i < words.length; i++){
    if (maxWord.length < words[i].length){
          maxWord = words[i]
        }           
} 
  return maxWord;
}


console.log(findLongestWord(words)) 

  // maxWord = longueur du mot le plus long trouvé jusqu'à present 
  // word[i].length = longueur du mot qu'on regarde maintenant


// Iteration 3 | Sum Numbers


const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumber) {
    if (arrayOfNumber.length === 0) {
        return 0
    }
    let result = 0
    for (let i = 0; i < arrayOfNumber.length; i++){
        result += arrayOfNumber[i]
    }
return result
} 

 
console.log(sumNumbers(numbers))






// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumber2) {

if (arrayOfNumber2.length === 0) {
    return 0
}

let result2 = 0;
for (let i = 0; i < arrayOfNumber2.length; i++){
    result2 += arrayOfNumber2[i]} 
    let average = result2 / arrayOfNumber2.length
    return average
} 



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, wordToSearch) {
    if (arrayOfWords.length === 0) {
        return null
    }
    
    for (let i = 0; i < arrayOfWords.length; i++ ){
        if (wordToSearch === arrayOfWords[i] ) {
           return true 
         }
        } 
           return false
        }
         
        


