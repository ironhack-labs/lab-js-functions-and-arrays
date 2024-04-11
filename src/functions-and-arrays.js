// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else {
    return number1;
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

function findLongestWord(wordsArray) 
{
 // Filtro para comprobar si el Array está vacío.
  
     if (wordsArray.length === 0) 
     {
         return null; // El corrector del LAB recomienda [] en lugar de "null", pero JASMINE no.
     }
    
     const longestWord;
     const longestValor; 

     for (i = 0; i < wordsArray.length; i++)
     {
        if (wordsArray[i].length > longestValor)
        {
            longestValor = wordsArray[i].length;
            longestWord = wordsArray[i];
        }
     }
    
  return longestWord;  
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArr) {
  let addArr = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    addArr += numbersArr[i];
  }
  return addArr;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageArr) {
  let sumNums = 0;
  let averageNums = 0;

  for (let i = 0; i < averageArr.length; i++) {
    sumNums += averageArr[i];

    averageNums = sumNums / averageArr.length;
  }
  return averageNums;
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

function doesWordExist(arryOfArr)
 {
  
     if (arryOfArr.length === 0) 
        {
            return null;
        }

  
}
