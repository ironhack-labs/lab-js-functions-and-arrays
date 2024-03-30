// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  //dealing with error handling first
  if (!a || !b) {
    return "all parameters are required";
  } else if (typeof a !== "number" || typeof b !== "number") {
    return "only numbers are allowed"; //error handling for the case we pass a string
  } else if (a > b) {
    //from here below all already passes the test requirements
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a, b; //if both numbers are equal
  }
}

//console.log(maxOfTwoNumbers(10, 2));

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

function findLongestWord(words) {
  if (words.length === 0) {
    return null; //in case of an empty array
  } else if (words.length === 1) {
    return words[0]; //returns the first word in case only word in array
  } //until here all fine done alone

  let longestWord = words[0]; //declaring a variable to store the longest
  //it starts being the first word since we assume it may have only one above
  for (let i = 1; i < words.length; i++) {
    //a loop that iterates through the array
    if (
      words[i].length > longestWord.length ||
      (words[i].length === longestWord.length &&
        words.indexOf(words[i]) < words.indexOf(longestWord))
    ) {
      //if the next i item is longest than longest word
      // OR i has the same length as longest word
      //AND the index of i is smaller than the index of the previous longest word
      //then update longest words for words[i]
      longestWord = words[i];
    }
  }
  return longestWord;
}

//example from studying
/*
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
*/

// Iteration 3 | Sum Numbers
//do this without using .reduce method, now we do with "declarative way" - using loops
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]; //function receives as parameter an array of numbers

function sumNumbers(numbers) {
  let sum = numbers[0];

  if (numbers.length === 0) {
    //in case numbers is an empty array, return 0
    return 0;
  } else if (numbers.length > 0) {
    for (let i = 1; i < numbers.length; i++) {
      //iterate through array and add each next item
      sum = sum + numbers[i];
    }
  }
  return sum;
}

console.log(sumNumbers(numbers));
//done this all by myself without even googling!!! /o/

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    //in case numbers is an empty array, return 0
    return 0;
  } else if (numbers2.length === 1) {
    return numbers2[0] / numbers2.length; //returns the average of a single element
  }

  let avg = "";
  for (let i = 0; i <= numbers2.length; i++) {
    avg = sumNumbers(numbers2) / numbers2.length;
  }
  return avg;
}

console.log(averageNumbers(numbers2));
//also managed to do alone!!!

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

function doesWordExist(words2, searchWord) {
  if (words2.length === 0) {
    return null; //return null for an empty array
  }
  //return words2.includes(searchWord); //this will return true in case finding
  //otherwise it returns false automatically
  //here passess all tests but how can we include changing to lower case?

  const lowerCaseWords2 = words2.map((word) => word.toLowerCase());
  //this will convert each word inside of words2 to lower case
  const lowerCaseSearchWord = searchWord.toLowerCase(); //converting search word to lower case
  return lowerCaseWords2.includes(lowerCaseSearchWord); //check if one is including the other ===
} //passes all tests and has a little extra for case sensitive

console.log(doesWordExist(words2, "machine")); //true
console.log(doesWordExist(words2, "abacaxi")); //false
console.log(doesWordExist([], "meat")); //null

/* as i had done myself more complicated!!!! had forgotten the includes. 
function doesWordExist(words2, searchWord) {
  //this function has two parameter
  //one array words2 and one "word" which is the word to be found inside of the array
  if (words2.length === 0) {
    //returns null for an  empty array
    return null;
  }

  for (let i = 0; i <= words2.length; i++) {
    if (
      words2.filter((word) => words2.toLowerCase().includes(word.toLowerCase()))
    ) {
      return true;
    } // did until here, but missing the false part
  }
}

console.log(doesWordExist(words2, "abacaxi")); //not in the array but we cant see

*/

//try to use same logic as here
//example from studying before

/*
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */

/*
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
*/
