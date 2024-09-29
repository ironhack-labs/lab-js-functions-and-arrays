// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else if (n1 < n2) {
        return n2;
    } else {
        return n1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (!words.length) {
        return null;
    }

    if (words.length === 1) {
        return words[0];
    }

    let palabra = words[0];
    for (let i = 0; i < words.length; i++) {
      let palabraAux = words[i];
        if (palabraAux.length > palabra.length) {
            palabra = palabraAux;
        }
    }
  return palabra;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let suma = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        let numAux = numbers[i];
        suma = suma + numAux;
    }

    return suma;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0;
    }
    
    let suma = sumNumbers(numbers2);
    let divisor = numbers2.length;

    return (suma / divisor);
    
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
    if (words.length === 0 || word.length === 0) {
        return null;
    }

    let exist = false;
    for (let i = 0; i < words.length; i++) {
        let palabra = words[i];
        if (palabra === word) {
            exist = true;
        }
    }
    return exist;
}
