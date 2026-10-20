// Iteration 1 | Find the Maximum
function maxOfTwoNumbers
(a, b) 
{
	let biggerNumber = "";
  
	if (a > b) {

  	biggerNumber = a;
	}

	else if (a < b ) {

  	biggerNumber = b;
	}

	else {

		console.log("Both numbers are the same :P");
		biggerNumber = a;		
	}

	return biggerNumber;
  	
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord
(words)
{

	let longestWord = "";

	for (let i = 0; i < words.length; i++) {

		if (words[i].length > longestWord.length) {

  		longestWord = words[i];
		}
	}

	if (words.length === 0) {

		longestWord = null;
	}

	return longestWord;

}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers
(numbers)
{
	let sum = 0;

	for (let i = 0; i < numbers.length; i++) {

		sum += numbers[i];	
	}
	
	if (numbers.length === 0) {

		sum = 0;
	}

	else if (numbers.lenght === 1) {
	
  	sum = numbers[0];
	}

	return sum; 
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers
(numbers2) 
{
	let sum = 0;

	for (let i = 0; i < numbers2.length; i++) {

		sum += numbers2[i];
	}

	let average = sum / numbers2.length;	

	if (numbers2.length === 0) {

		average = 0;
	}
	
	else if (numbers2.length === 1) {

		average = numbers2[0];
	}

	return average;
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist
(words2, word) 
{ 
    for (let i = 0; i < words2.length; i++) {

        if (words2[i] === word) {

            return true;
        }
    }

		if (words2.length === 0) {

    	return null;
		}

    return false;
}
