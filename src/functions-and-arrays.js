// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
	if (num1 == num2) return num1, num2
	return Math.max(num1, num2)
}

// Iteration 2 | Find the Longest Word
const words = [
	'mystery',
	'brother',
	'aviator',
	'crocodile',
	'pearl',
	'orchard',
	'crackpot',
]

function findLongestWord(words) {
	if (words.length === 0) return null
	let longestWord = ''
	words.map((word) => {
		if (word.length > longestWord.length) {
			longestWord = word
		}
	})
	return longestWord
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers(numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0)
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9]

function averageNumbers(numbers2) {
	if (numbers2.length == 0) return 0
	return sumNumbers(numbers2) / numbers2.length
}

// Iteration 5 | Find Elements
const words2 = [
	'machine',
	'subset',
	'trouble',
	'starting',
	'matter',
	'eating',
	'truth',
	'disobedience',
]

function doesWordExist(words, word) {
	if (words.length == 0) return null
	// for (let i = 0; i < words.length; i++) {
	// 	if (words[i] === word) return true
	// }
	// words.map(w => if (w === word) return true)
	// return false
	return words.some((w) => w === word)
}
