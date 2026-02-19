// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
	if (a > b) {
		return a;
	} else if (b > a) {
		return b;
	} else if (a === b) {
		return a;
	}
}
//---------------------------------------------------------------------------------------------------------------------------------
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

function findLongestWord(arrStr) {
	if (arrStr.length === 0) {
		return null;
	}
	let longhWord = "";

	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i].length > longhWord.length) {
			longhWord = arrStr[i];
		}
	}
	return longhWord;
}
//---------------------------------------------------------------------------------------------------------------------------------
// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrOfNumbers) {
	if (arrOfNumbers.length === 0) {
		return 0;
	}

	let total = 0;
	for (let i = 0; i < arrOfNumbers.length; i++) {
		total += arrOfNumbers[i];
	}

	return total;
}

//---------------------------------------------------------------------------------------------------------------------------------
// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNumber) {
	if (arrNumber.length === 0) return 0;

	let result = sumNumbers(arrNumber) / arrNumber.length;
	return result;
}
//---------------------------------------------------------------------------------------------------------------------------------
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

function doesWordExist(arrStrings, word) {
	if (arrStrings.length === 0) return null;

	let foundWord;

	for (let i = 0; i < arrStrings.length; i++) {
		if (arrStrings.includes(word)) {
			return (foundWord = true);
		} else {
			return (foundWord = false);
		}
	}
}
