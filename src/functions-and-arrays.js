// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
	return a >= b ? a : b;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
	if (!arr.length) return null;
	let longest = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length > longest.length) {
			longest = arr[i];
		}
	}
	return longest;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
	if (!arr.length) return 0;
	return sumNumbers(arr) / arr.length;
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
	if (!arr.length) return null;
	return arr.includes(word);
}
