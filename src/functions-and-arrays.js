// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numb1, numb2) {
    if (numb1 > numb2){
        return numb1
    } else if (numb1 < numb2){
        return numb2
    } else {return numb1}
}

console.log (maxOfTwoNumbers (3,5))
console.log (maxOfTwoNumbers (7,11))




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord() {
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord());


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(someNumbers) {

    if (someNumbers.length === 0) {
    return 0;
  }

    let sum = someNumbers[0];

    for (let i = 1; i < someNumbers.length; i++){
      sum = sum + someNumbers[i]
    }

    console.log (sum);

    return sum;
    }



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageNum) {
   if (averageNum === 0){
    return "empty error"
   }

    let result = averageNum [0];

    for (let i = 1; i < averageNum.length; i++){
        result = result + averageNum[i]/ averageNum.length
    }
    console.log (result);

    return result
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words,element) {

    for (let i =0; i< words.length; i++){
        if (words[i] === element){
            return true;}
            else {
                return false;
            }
    }
}