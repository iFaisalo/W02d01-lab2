// # 1
// ## Calculate the Cube

function calculateCube (num) {
	return Math.pow(num, 3);}

// console.log (calculateCube(5));
 // => 125

// -- -- -- -- -- -- -- -- -- -- --

// # 2
// ## Is a Vowel?

function isAVowel (str) {
		const lowerdStr = str.toLowerCase ();
  const vowelLetters = ['a','e','i','o','u'];
for (let i = 0; i < vowelLetters.length; i ++) {
	if (lowerdStr == vowelLetters[i]) { return 'TRUE' }
	else { return 'FALSE' } }
}

// console.log (isAVowel('a'));
// => true

// -- -- -- -- -- -- -- -- -- -- --

// # 3
// ## Get Two Lengths

function getTwoLengths (str1, str2) {
				let arrStr1 = str1.split('');
				let arrStr2 = str2.split('');
				let res = [arrStr1.length, arrStr2.length];
				return res; }

// console.log(getTwoLengths("Hank", "Hippopopalous"))
// => [4, 13]

// -- -- -- -- -- -- -- -- -- -- --

// # 4 
// ## Get Multiple Lengths

// function getMultipleLengths (strArr) {
// 	// let resArr = '';
// 	// for (let i = 0; i < strArr.length; i ++) {
// 	// 	resArr = strArr[i].length;
// 	// }
// }

// angry ..

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

// -- -- -- -- -- -- -- -- -- -- --

// # 5
// ## Maximum of Three Numbers

function maxOfThree (num1, num2, num3) {
// 			if (num1 > num2 && num1 > num3) {return num1}	
// 			if (num2 > num1 && num2 > num3) {return num2}
// 			if (num3 > num1 && num3 > num2) {return num3}
// 			if (num1 == num2 && num1 == num3
// 							|| num2 == num1 && num2 == num3
// 							|| num3 == num1 && num3 == num2) {return num1}
// }

// console.log(maxOfThree(6, 9, 1));
// => 9

// -- -- -- -- -- -- -- -- -- -- --

// # 6
// ## Print Longest Word

// I didn't got the idea ..

// -- -- -- -- -- -- -- -- -- -- --

// # 7
// ## Transmogrify the Numbers

function transmogrify (num1, num2, num3) {
let res = num1 * num2;
	return Math.pow(res, num3)
}

// console.log(transmogrify(5, 3, 2));
// => 225

// -- -- -- -- -- -- -- -- -- -- --

// # 8
// ## Project Euler Problem 2

// I didn't got the idea ..

// -- -- -- -- -- -- -- -- -- -- --

// # 9
// ## A Needle in the Haystack

// function findNeedle (arr) {
	let pos = '';
	for (let i = 0; i < arr.length; i ++){
		if (arr[i] == 'needle') {
			pos = arr.indexOf('needle')
		}
	}
	return 'found the needle at postition ' + pos
}
	
// keep showing "findNeedle is not defined"