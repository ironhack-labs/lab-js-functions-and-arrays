const shuffle = (currentArray) => {
  const array = [...currentArray];
  let counter = array.length;

  while (counter > 0) {
    let randomIndex = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
};

// Iteration 1 
function maxOfTwoNumbers(num1,num2) {
  return num1 >= num2 ? num1 : num2
}
const maxOfTwoNumbers = (num1,num2) => num1 >= num2 ? num1 : num2

// Iteration 2 
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) return 0
  let longestWord = ''
  for (const word of arrayOfWords) {
      if (word.length > longestWord.length) {longestWord = word}
  }
  return longestWord
}
const findLongestWord = arrayOfWords => 
  arrayOfWords.reduce((a,b) => a.length >= b.length ? a : b, '') || 0

// Iteration 3 
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  return arrayOfNumbers.reduce((a,b) => a + b, 0)
}
const sumNumbers = arrayOfNumbers => arrayOfNumbers.reduce((a,b) => a + b, 0)


// Iteration 4 
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) return 0
  return sumNumbers(arrayOfNumbers) / arrayOfNumbers.length
}
const averageNumbers = arrayOfNumbers =>
  sumNumbers(arrayOfNumbers) / arrayOfNumbers.length || 0

// Iteration 5
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, searchString) {
  if (arrayOfWords.length === 0) return null
  return arrayOfWords.includes(searchString)
}
const doesWordExist = (arrayOfWords, searchString) =>
  !arrayOfWords.length ? null : arrayOfWords.some((word) => word === searchString)

Footer
© 2024 GitHub, Inc.


describe("Iteration 5 | Find Elements", () => {
  describe("function doesWordExist()", () => {
    it("should be defined as a function", () => {
      expect(typeof doesWordExist).toBe("function");
    });

    it("should return null if receives an empty array when called", () => {
      expect(doesWordExist([])).toBe(null);
    });

    it("should return false if the word we are looking for is not in the array", () => {
      expect(
        doesWordExist(
          ["machine", "poison", "eat", "apple", "horse"],
          "ratatouille"
        )
      ).toBe(false);
    });

    it("should return true if the word we are looking for is in the array", () => {
      expect(
        doesWordExist(
          ["pizza", "sandwich", "snack", "soda", "book", "computer"],
          "book"
        )
      ).toBe(true);
    });
  });
});
