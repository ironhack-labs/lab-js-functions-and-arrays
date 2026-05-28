// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
    if(a > b) {
        return a;
    } else if(a < b) {
        return b;
    } else {
        return a, b;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if(arr.length == 0) {
        return null;
    }
    let palabraMayor = "";
    let mayor = 0;
    for(let i = 0; i < arr.length; i++) {
        let cont = 0;
        for(let j = 0; j < arr[i].length; j++) {
            cont++;
        }
        if(cont > mayor) {
            mayor = cont;
            palabraMayor = arr[i];
        }
    }
    return palabraMayor;
}

console.log(findLongestWord(words))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let suma = 0;
    for(let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    let suma = 0;
    let avg = 0;
    if(arr.length == 0) {
        return 0;
    }
    for(let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    avg = suma / arr.length;
    return avg;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    if (arr.length === 0) return null;   // empty array → null

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true;                            // found the word
    }
  }

  return false;
}

console.log(doesWordExist(words2, "subset"));
