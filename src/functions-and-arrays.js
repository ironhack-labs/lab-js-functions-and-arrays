// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	return num2;
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

function findLongestWord(words) {
	let longestWord = "";

	if (words.length == 0) {
		return 0;
	} else {
		words.forEach((word) => {
			if (word.length > longestWord.length) {
				longestWord = word;
			}
		});
	}
	return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
	let sumTotal = 0;
	numbers.forEach((num) => {
		sumTotal += num;
	});
	return sumTotal;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
	let sumTotal = 0;
	let average = 0;

	if (numbers2.length == 0) {
		return 0;
	} else {
		numbers2.forEach((num) => {
			sumTotal += num;
		});

		average = sumTotal / numbers2.length;
		return average;
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

function doesWordExist(words2, findWord) {
	let value = false;

	if (words2.length == 0) {
		return null;
	} else {
		words2.forEach((word) => {
			if (word == findWord) {
				value = true;
			}
		});
	}
	return value;
}
