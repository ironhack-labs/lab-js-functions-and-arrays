// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return(number1 >= number2 ? number1 : number2 );
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
                   
function findLongestWord(words) {
    let longestWord = "";

    if(words.length === 0 ){
        return 0;
    }

    for(let index = 0; index < words.length; index+=1){
        if(words[index].length > longestWord.length){
            longestWord = words[index];
        }
    }
    return longestWord;
}



// Iteration 3 | Sum Numbers
const cities = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbers) {
    let totalResult = 0;
    for(let i = 0; i < numbers.length; i++){
        totalResult += numbers[i];
    }

    return(totalResult);
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(numbers) {
    if(numbers.length ===0){
        return(0);
    }
    let totalResult = 0;

    for(let i = 0; i < numbers.length; i++){
        totalResult += numbers[i];
    }

    return  totalResult / numbers.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

//You have words2 array which has 8 word inside. Done
//User will give an word Done |  and you have to check if that word is in the words2 array then return that word else return 0.

//word = "eating";
//You should be iterating(means for loop) in your array word by word, and check if the currentWord from the array is equal to what userInputWord;



function doesWordExist(words2, userInputWord) {
//   if (words2.length === 0){
//     return null;
//   }
//   for(let i = 0; i < words2.length; i++){
//     if (words2[i] === userInputWord) {
//         return true;
//     }
//   } 
//     return false;
// }

// console.log(result);
return words2.length ? words2.includes(userInputWord) : null;
}
