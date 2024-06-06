// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2){
        return n1
    } else if(n1 < n2){
            return n2
    } else {
        return n1, n2
    }
};




// Iteration 2 | Find the Longest Word

const words1 = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {

        let longestWord = [];

        if (words.length === 0){
            return null;
        }

        for (let i = 0; i < words.length; i++){
            if (words[i].length > longestWord.length){
                    longestWord = words[i];
            }
        }
      return longestWord;
}




// Iteration 3 | Sum Numbers


function sumNumbers(numbers) {

    if (numbers.length === 0){
return 0;
    }

    let finalNum = numbers.reduce(function(total, numbers) {
        return total + numbers;
    })

    return finalNum;
}
    




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {

    if (numArr.length === 0){
        return 0;
    }

    let sum = sumNumbers(numArr); 
    let average = sum / numArr.length; 
    return average;
    }


// Iteration 5 | Find Elements


function doesWordExist(array, word) {

    for (let i = 0; array.length; i++){
     if (array.includes(word)){
                return true;
            } else {
                return false;
            } 
            }
            if (array.length === 0) {
                return null;
            }
    }





