// Iteration 1 | Find the Maximum
let maxNum = 0;
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        maxNum = num1;
        console.log(num1 + " is bigger than the second number");
    } else if (num1 < num2) {
        maxNum = num2;
        console.log(num2 + " is bigger than " + num1);
    } else if (num1 === num2) {
        maxNum = num1;
    }
    else {
        console.log("Those are not numbers");
    }
    return maxNum;
}


maxOfTwoNumbers(-1, 1);




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


let word = words[0];

function findLongestWord(words, word) {
    if(words.length === 0)
    {
        return 0;
    }
    else if(words.length === 1)
    {
        return words[0];
    }
          let longestWord = word;  
    for (let i = 1; i < longestWord.length; i++) {
        if (word[i].length > word) {
            longestWord = words[i];
        }
    }
    return longestWord;
}



console.log(findLongestWord(words, longestWord));






// Iteration 3 | Sum Numbers///
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum = 0;

function sumNumbers() {
  if (numbers.length === 0) {
    return null;
  } else if (numbers.length === 1) {
    return numbers[0];
  }

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const result = console.log(sum);
  return result;
}
const result = sumNumbers(sum);
console.log(result);








// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }else if(numbers2.length  === 1){
        return numbers2[0];
    }

    let sum = 0;

    for (let i = 0; i < numbers2.length; i++) {
        sum += numbers2[i];
    }

    const avg = sum / numbers2.length;
    console.log(avg);

    return avg;
}

averageNumbers(numbers2);




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, word) {
    if (words2.length === 0) {
        return null;
    }

    for (let i = 0; i < words2.length; i++) {
        if (words2[i].includes(word)) {
            return true;
        }


    }

    return false;

}


console.log(doesWordExist(words2, "machine"));