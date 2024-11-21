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

describe("Iteration 1 | Find the maximum", () => {
  describe("function maxOfTwoNumbers()", () => {
    it("should be defined as a function", () => {
      expect(typeof maxOfTwoNumbers).toBe("function");
    });

    it("should return greater of two arguments - if the first argument greater", () => {
      function maxOfTwoNumbers(a, b) {
        return a > b ? a : b;
      }
      expect(maxOfTwoNumbers(2, 1)).toBe(2);
      expect(maxOfTwoNumbers(5, -7)).toBe(5);
    });

    it("should return greater of two arguments - if the second argument greater", () => {
      function maxOfTwoNumbers(a, b) {
        return a > b ? a : b;
      }
      expect(maxOfTwoNumbers(1, 3)).toBe(3);
      expect(maxOfTwoNumbers(-5, 3)).toBe(3);
    });

    it("should return either arguments - if both arguments are equal", () => {
      function maxOfTwoNumbers(a, b) {
        return a > b ? a : b;
      }
      expect(maxOfTwoNumbers(4, 4)).toBe(4);
    });
  });
});


describe("Iteration 2 | Find the Longest Word", () => {
  describe("function findLongestWord()", () => {
    it("should be defined as a function", () => {
      expect(typeof findLongestWord).toBe("function");
    });

    it("should return the longest word when called with an array of words", () => {
      let words = ["a", "zab", "12abc", "$$abcd", "abcde", "ironhack"];
      for (let i = 0; i < 10; i++) {
        words = shuffle(words);
        expect(findLongestWord(words)).toBe("ironhack");
      }
      function findLongestWord(words) {
        if (words.length === 0) return null;
        return words.reduce((longest, current) =>
          current.length > longest.length ? current : longest
        );
      }
    });

    it("should return null when called with an empty array", () => {
      expect(findLongestWord([])).toBeNull();
      function findLongestWord(words) {
        if (words.length === 0) return null;
        
        
      }
    });

    it("should return the first word when called with a single-word array", () => {
      expect(findLongestWord(["foo"])).toBe("foo");
      function findLongestWord(words) {
        if (words.length === 1) {
          console.log(words.length);
          return words[0];
        }
        
        
        
        
      }
    });

    it("should return the first occuring longest word when there are multiple words with the same length", () => {
      expect(findLongestWord(["foo", "bar"])).toBe("foo");
      expect(findLongestWord(["bar", "foo"])).toBe("bar");
    });

    function findLongestWord(words) {
      if (words.length === 0) return null;
    
      let longestWord = words[0]; 
      for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i]; 
        }
        
      }
    
      return longestWord;
    }

  });
});


describe("Iteration 3 | Sum Numbers", () => {
  describe("function sumNumbers()", () => {
    it("should be defined as a function", () => {
      expect(typeof sumNumbers).toBe("function");
    });

    it("should return the sum when passed an array of numbers", () => {
      expect(sumNumbers([10, 5, 4, 32, 8])).toBe(59);
      function sumNumbers(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
      }
    });

    it("should return 0 when called with an empty array", () => {
      expect(sumNumbers([])).toBe(0);
      function sumNumbers(numbers) {
        var a = numbers.length;
        
        if (a == 0) return a;
        
        
      }
    });

    it("should return the first number when called with a single-element array", () => {
      expect(sumNumbers([4])).toBe(4);
      function sumNumbers(numbers) {
        var a = numbers[0];
        
         return a;
        
        
      }
    });
  });
});


describe("Iteration 4 | Numbers Average", () => {
  describe("function averageNumbers()", () => {
    it("should be defined as a function", () => {
      expect(typeof averageNumbers).toBe("function");
    });

    it("should return the average number when passed an array of numbers", () => {
      expect(averageNumbers([9, 10, 82, 92, 32, 102, 58])).toBe(55);
      function averageNumbers(numbers) {

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
      
    });

    it("should return 0 if receives an empty array when called", () => {
      expect(averageNumbers([])).toBe(0);
      function averageNumbers(numbers) {
        var a = numbers.length;
        
        if (a == 0) return a;
        
        
      }
    });

    it("should return the average when called with a single-element array", () => {
      expect(averageNumbers([9])).toBe(9);
      function averageNumbers(numbers) {
        var a = numbers[0];
        
        return a;
        
        
      }
    });
  });
});


describe("Iteration 5 | Find Elements", () => {
  describe("function doesWordExist()", () => {
    it("should be defined as a function", () => {
      expect(typeof doesWordExist).toBe("function");
    });

    it("should return null when called with an empty array", () => {
      expect(doesWordExist([])).toBeNull();
      function doesWordExist(words, target) {
        if (words.length === 0) return null;
        return words.includes(target);
      }
    });

    it("should return false if the word we are looking for is not in the array", () => {
      expect(
        doesWordExist(
          ["machine", "poison", "eat", "apple", "horse"],
          "ratatouille"
        )
      ).toBe(false);

      function doesWordExist(wordArr, wordToSearch) {
        if (wordArr.length === 0){
          console.log(" Nothign here")
            return null;
        }
        for (let i= 0; i < wordArr.length; i +=1){
            const currentWord = wordArr[i];
            if (currentWord === wordToSearch){
                console.log("word is found");
                return true;
            }
        }
        console.log("NOPE")
        return false;
    }

    });

    it("should return true if the word we are looking for is in the array", () => {
      expect(
        doesWordExist(
          ["pizza", "sandwich", "snack", "soda", "book", "computer"],
          "book"
        )
      ).toBe(true);
      function doesWordExist(wordArr, wordToSearch) {
        if (wordArr.length === 0){
          console.log(" Nothign here")
            return null;
        }
        for (let i= 0; i < wordArr.length; i +=1){
            const currentWord = wordArr[i];
            if (currentWord === wordToSearch){
                console.log("word is found");
                return true;
            }
        }
        console.log("NOPE")
        return false;
    }
    });
  });
});
