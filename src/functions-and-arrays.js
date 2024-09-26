// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2){
		return num1;
	} else if (num2 > num1){
		return num2;
	}
	else {
		return (num1, num2)
	}
}
//maxOfTwoNumbers(5,9);

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(names) {
	if(names.length === 0){
		return 0;
	}
	let longestWord = '';
	names.forEach((name)=>{
		if(name.length > longestWord.length){
			longestWord = name;
		};
});
return longestWord;
}

findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(nums) {
	let sum = 0;
	for (let i=0; i<nums.length;i++) {
		sum += nums[i];
	}
	return sum;
}

sumNumbers(numbers);

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(nums) {
	if (nums.length === 0){
		return 0;
	} else{
		return sumNumbers(nums)/nums.length;
	}
}

averageNumbers(numbers2);


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
function doesWordExist(input, word) {
	if(input.length === 0) {
		return null;
	}
	for(i=0; i < input.length; i++){
		if ( input[i] === word ){
			return true;
		}
	}
		return false;

}

doesWordExist(words2, "machine");
