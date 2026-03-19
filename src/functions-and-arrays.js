// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    console.log(num1, num2)
    if (num1 > num2)
    return num1;

    else (num1 < num2) 
    return num2;
}



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    let longuest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longuest.length) {
            longuest = words[i];
            return longuest;
        }
    words.splice(0, words.length);
    }
}

//const duplicateWords = [
  //  "mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"
//];

//function removeDuplicateWords(duplicateWords) {
    //const uniquewords2 = [];

   // duplicateWords.forEach((aWord) => {
   // if (!uniqueduplicateWords.includes(aWords)) {
    //        uniqueduplicateWords.push(aWord);
   //     }
   // });
   // return uniqueduplicateWords;
//}
//console.log(removeDuplicateWords(duplicateWords))
console.log(findLongestWord(words))




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let total = 0;
    for (let i =0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let total = sumNumbers(numbers2)
    return total / numbers2.length;

};

console.log(sumNumbers(numbers2))
console.log(averageNumbers(numbers2))


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2) {
    let wordToSearch = words2
}
