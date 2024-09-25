// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
	if (number1 >= number2) {
		return number1;
	} else {
		return number2;
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

function findLongestWord(words) {
	let longestWord = "";
	if (words.length === 0) {
		return null;
	}
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
	return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
	let sum = 0;
	numbers.forEach((number) => {
		sum += number;
	});
	return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
	let sum = 0;
	if (numbers.length === 0) {
		return sum;
	}
	numbers.forEach((number) => {
		sum += number;
	});

	return sum / numbers.length;
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

function doesWordExist(words, find) {
	if (words.length === 0) {
		return null;
	} else if (words.includes(find)) {
		return true;
	} else {
		return false;
	}
}
