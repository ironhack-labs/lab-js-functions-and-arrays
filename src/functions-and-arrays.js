// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(array) {
  // let charCount = 0;
  // for (let i=0; i <= array.length-1; i++) {
  //     let first = words[i].length
  //     let sec  = words[i+1].length
  //     if (words[i+1] === undefined) {
  //         sec = words[i].length
  //     } else if (array[i].length > array[i+1].length ) {
  //         charCount = i
  //     }
  // };
  // console.log(charCount)
}

const winner = findLongestWord(words);
console.log("Winner:", winner);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
  let sum = 0;
  nums.forEach(function (element) {
    sum += element;
  });
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return sumNumbers(numbers) / numbers.length;
  }
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(array, searchedWord) {
//   console.log(searchedWord);
//   let state;
//   array.forEach(function (element) {
//     console.log("Elelemt:", element);
//     if (element === 0) {
//       console.log("Zusand: NULL");
//       state = null;
//     }
//     if (searchedWord === element) {
//       console.log("Zusand: true");
//       state = true;
//     } else if (searchedWord !== element){
//         state = false
//     }
//   });

//   if (state === true) {
//     return true;
//   } else if (state === null || state === undefined) {
//     return null
//   } else if (!state) {
//     return false
//   }
    for( const word of array) {

        switch(searchedWord){
            case searchedWord === word || word === undefined:
                return true
                break
            case array === 0:
                return null;
                break
            case word !== searchedWord:
                return false;
            default:
                return false
                break
        }


    }
}

console.log(doesWordExist(words2, "subset"));
